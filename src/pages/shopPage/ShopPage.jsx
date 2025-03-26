import React, { useState } from "react";
import "./ShopPage.css";
import Title from "../../components/title/Title";
import { Filter, MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { categories, collection } from "../../assets/data";
import Card from "../../components/card/Card";
import  useIsMobile from "../../hooks/useIsMobile"

const ShopPage = () => {
  const itemsPerPage = 12;
  const [sort, setSort] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSaleChecked, setIsSaleChecked] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const isMobile = useIsMobile();
  const [filterBar, setFilterBar] = useState(isMobile);

  const onChangeHandler = (e) => {
    setSort(e.target.value);
  };

  const getSortedCollection = () => {
    let sortedCollection = [...collection];
    if (selectedCategories.length > 0) {
      sortedCollection = sortedCollection.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    if (isSaleChecked) {
      sortedCollection = sortedCollection.filter((item) => item.isOnSale);
    }
    sortedCollection = sortedCollection.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );
    switch (sort.toLowerCase()) {
      case "featured":
        sortedCollection = sortedCollection.filter((item) => item.isFeatured);
        break;
      case "newest arrivals":
        sortedCollection = sortedCollection.filter((item) => item.isNew);
        break;
      case "low to high":
        sortedCollection = sortedCollection.sort((a, b) => a.price - b.price);
        break;
      case "high to low":
        sortedCollection = sortedCollection.sort((a, b) => b.price - a.price);
        break;
      default:
        return sortedCollection;
    }
    return sortedCollection;
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };

  const handleSaleChange = (e) => {
    setIsSaleChecked(e.target.checked);
  };

  const handlePriceRangeChange = (e) => {
    const value = Number(e.target.value);
    setPriceRange([0, value]);
  };

  const handleClearAll = () => {
    setSort("all");
    setSelectedCategories([]);
    setIsSaleChecked(false);
    setPriceRange([0, 300]);
    setCurrentPage(1);
  };

  const paginatedCollection = getSortedCollection().slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(getSortedCollection().length / itemsPerPage);

  return (
    <section>
      <Title
        title="Shop Our Collection"
        description="Discover our curated selection of premium clothing and accessories for every occasion."
      />
      <div className="shop-container">
        <aside
        style={{
          position: filterBar && 'fixed',
          transform: filterBar && 'translateY(-200%)'
        }}
        className="filters">
          <div className="top-layer">
            <h1>Filters</h1>
            <h2 onClick={handleClearAll} style={{ cursor: "pointer" }}>
              Clear all
            </h2>
          </div>
          <div className="middle-layer">
            <h1>Categories</h1>
            <div className="filters--checkbox-buttons">
              {categories.map((category, index) => {
                return (
                  <div key={index} className="filters-checkbox-field">
                    <input
                      type="checkbox"
                      name={category}
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    <label htmlFor={category}>{category}</label>
                  </div>
                );
              })}
            </div>
            <div className="filters-salecheckbox-field">
              <input
                type="checkbox"
                name="sale"
                value="sale"
                checked={isSaleChecked}
                onChange={handleSaleChange}
              />
              <label htmlFor="sale">Sale</label>
            </div>
          </div>
          <hr />
          <div className="bottom-layer">
            <h1>Price Range</h1>
            <input
              type="range"
              min="0"
              max="300"
              value={priceRange[1]}
              onChange={handlePriceRangeChange}
            />
            <div className="filters--price-range-prices">
              <span>{priceRange[0]}$</span>
              <span>{priceRange[1]}$</span>
            </div>
          </div>
        </aside>
        <main className="shop-main">
          <div className="top-layer">
            <h1>Showing {getSortedCollection().length} products</h1>
            <select defaultValue={sort} onChange={onChangeHandler}>
              <option value="all">All</option>
              <option value="featured">Featured</option>
              <option value="newest arrivals">Newest Arrivals</option>
              <option value="low to high">Low to High</option>
              <option value="high to low">High to Low</option>
            </select>
             {/* Sort and filter */}
      {isMobile && <div className="sort-and-filter">
        <Filter onClick={() => setFilterBar(prev => !prev)} stroke="rgb(116, 103, 117)"/>
        </div>}
          </div>
          <div className="middle-layer">
            {paginatedCollection.map((item) => {
              return (
                <Card
                  key={item._id}
                  type={item.type}
                  title={item.title}
                  price={item.price}
                  isNew={item.isOnSale ? undefined : item.isNew}
                  isOnSale={item.isOnSale}
                  image={item.image}
                  discountPercentage={
                    item.isOnSale ? item.discountPercentage : undefined
                  }
                  originalPrice={item.isOnSale ? item.originalPrice : undefined}
                />
              );
            })}
          </div>
          <div className="bottom-layer">
            <div
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <MoveLeftIcon size={15} />
            </div>
            <div>
              {currentPage} of {totalPages}
            </div>
            <div
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              <MoveRightIcon size={15} />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default ShopPage;

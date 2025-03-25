import React from "react";
import "./HomePage.css";
import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";
import { brands, categories, exclusiveCollection, saleItems } from "../../assets/data";
import { ArrowRight } from "lucide-react";
import Title from "../../components/title/Title";
import useIsMobile from "../../hooks/useIsMobile";

const HomePage = () => {
  const isMobile = useIsMobile();
  console.log(isMobile);
  
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* Category section */}
      <section className="shop-by-category">
        <Title
          title="Shop by Category"
          description="Explore our curated collection of products for every need and occasion"
        />
        <div className="shop-by-category--cards">
          {categories.length > 4 && (
            <h6 className="shop-by-category--cards--view-all-btn">
              View all categories
              <ArrowRight
                className="shop-by-category--cards--arrow-right"
                size={isMobile ? 16 : 20}
              />
            </h6>
          )}
          {categories.slice(0, 4).map((item) => (
            <Card
              key={item._id}
              type={item.type}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
      {/* Exclusive Section */}
      <section className="exclusive-collection">
        <Title
          title="Exclusive Collection"
          description="Discover our premium selection of handcrafted pieces"
        />
        <div className="exclusive-collection--cards">
          {exclusiveCollection.length > 4 && (
            <h6 className="exclusive-collection--cards--view-all-btn">
              View all collection
              <ArrowRight
                className="exclusive-collection--cards--arrow-right"
                size={20}
              />
            </h6>
          )}
          {exclusiveCollection.slice(0, 4).map((item) => {
            return (
              <Card
                key={item._id}
                type={item.type}
                image={item.image}
                title={item.title}
                price={item.price}
                isNew={item.isNew}
              />
            );
          })}
        </div>
      </section>
      {/* Brands */}
      <section className="brands">
        <Title
          title="Premium Brands"
          description="Explore our collection from world-renowned luxury fashion houses"
        />
        <div className="brand-image">
          {brands.map((item) => {
            return <img key={item._id} src={item.image} alt={item.title} />;
          })}
        </div>
      </section>
      {/* Season sale */}
      <section className="season-sale">
          <Title
            title="Season Sale"
            description="Limited time offers on premium pieces from our collection"
          />
            <div className="season-sale--cards">
          {saleItems.length > 4 && (
            <h6 className="season-sale--cards--view-all-btn">
              View all Items
              <ArrowRight
                className="season-sale--cards--arrow-right"
                size={20}
              />
            </h6>
          )}
          {saleItems.slice(0, 4).map((item) => {
            return (
              <Card
                key={item._id}
                type={item.type}
                image={item.image}
                title={item.title}
                price={item.price}
                isOnSale={item.isOnSale}
                discountPercentage={item.discountPercentage}
                originalPrice={item.originalPrice}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomePage;

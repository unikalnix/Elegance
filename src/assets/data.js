export const navItems = ["men", "women", "kids", "accessories", "sale"];
export const categories = [
  {
    _id: "1",
    type: "category",
    title: "Men",
    image: "src/assets/men.jpg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "2",
    type: "category",
    title: "Women",
    image: "src/assets/women.jpg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "3",
    type: "category",
    title: "Kids",
    image: "src/assets/kid.jpeg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "4",
    type: "category",
    title: "Accessories",
    image: "src/assets/accessory.jpg",
    description: "Complete Your Look",
  },
  {
    _id: "4",
    type: "category",
    title: "Accessories",
    image: "src/assets/accessory.jpg",
    description: "Complete Your Look",
  },
];
export const exclusiveCollection = [
  {
    _id: "1",
    type: "sale",
    title:"Premium Cotton Shirt",
    price:"89.99",
    isNew: true,
    image:"src/assets/shirt.jpeg"
  },
  {
    _id: "2",
    type: "sale",
    title:"Designer Slim-Fit Jeans",
    price:"129.99",
    isNew: false,
    image:"src/assets/jeans.jpg"
  },
  {
    _id: "3",
    type: "sale",
    title:"Merino Wool Sweater",
    price:"159.99",
    isNew: true,
    image:"src/assets/sweater.jpeg"
  },
  {
    _id: "4",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isNew: false,
    image:"src/assets/shoes.jpg"
  },
  {
    _id: "5",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isNew: false,
    image:"src/assets/shoes.jpg"
  },
];
export const brands = [{
  _id: "1",
  title: "Versace",
  image: "src/assets/versace-removebg-preview.png",
},
{
  _id: "2",
  title: "Gucci",
  image: "src/assets/gucci-removebg-preview.png",
},
{
  _id: "3",
  title: "Prada",
  image: "src/assets/prada-removebg-preview.png",
},
{
  _id: "4",
  title: "Dior",
  image: "src/assets/dior-removebg-preview.png",
},
{
  _id: "5",
  title: "Chanel",
  image: "src/assets/chanel-removebg-preview.png",
},
{
  _id: "6",

  title: "Louis Vuitton",
  image: "src/assets/louis_vuitton-removebg-preview.png",
}];
export const saleItems = [
  {
    _id: "1",
    type: "sale",
    title:"Premium Cotton Shirt",
    price:"89.99",
    isOnSale: true,
    image:"src/assets/shirt.jpeg",
    discountPercentage: 20,
    originalPrice: 109.99
  },
  {
    _id: "2",
    type: "sale",
    title:"Designer Slim-Fit Jeans",
    price:"129.99",
    isOnSale: true,
    image:"src/assets/jeans.jpg",
    discountPercentage: 10,
    originalPrice: 149.99
  },
  {
    _id: "3",
    type: "sale",
    title:"Merino Wool Sweater",
    price:"159.99",
    isOnSale: true,
    image:"src/assets/sweater.jpeg",
    discountPercentage: 15,
    originalPrice: 179.99
  },
  {
    _id: "4",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isOnSale: true,
    image:"src/assets/shoes.jpg",
    discountPercentage: 25,
    originalPrice: 229.99
  },
  {
    _id: "5",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isOnSale: true,
    image:"src/assets/shoes.jpg",
    discountPercentage: 25,
    originalPrice: 229.99
  }
]
export const footerLinks = [
  {
    _id: "1",
    title: "Shop",
    links: [
      { name: "Men", path: "#" },
      { name: "Women", path: "#" },
      { name: "Kids", path: "#" },
      { name: "Accessories", path: "#" },
      { name: "Sale", path: "#" }
    ]
  },
  {
    _id: "2",
    title: "Company",
    links: [
      { name: "About Us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Store Locator", path: "#" },
      { name: "Sustainability", path: "#" },
      { name: "Press", path: "#" }
    ]
  },
  {
    _id: "3",
    title: "Customer Service",
    links: [
      { name: "Contact Us", path: "#" },
      { name: "FAQs", path: "#" },
      { name: "Shipping & Returns", path: "#" },
      { name: "Size Guide", path: "#" },
      { name: "Privacy Policy", path: "#" }
    ]
  }
];

export const navItems = ["men", "women", "kids", "accessories", "sale"];
export const categories = [
  {
    _id: "1",
    type: "category",
    title: "Men",
    image: "public/men.jpg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "2",
    type: "category",
    title: "Women",
    image: "public/women.jpg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "3",
    type: "category",
    title: "Kids",
    image: "public/kid.jpeg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "4",
    type: "category",
    title: "Accessories",
    image: "public/accessory.jpg",
    description: "Complete Your Look",
  },
  {
    _id: "4",
    type: "category",
    title: "Accessories",
    image: "public/accessory.jpg",
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
    image:"public/shirt.jpeg"
  },
  {
    _id: "2",
    type: "sale",
    title:"Designer Slim-Fit Jeans",
    price:"129.99",
    isNew: false,
    image:"public/jeans.jpg"
  },
  {
    _id: "3",
    type: "sale",
    title:"Merino Wool Sweater",
    price:"159.99",
    isNew: true,
    image:"public/sweater.jpeg"
  },
  {
    _id: "4",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isNew: false,
    image:"public/shoes.jpg"
  },
  {
    _id: "5",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isNew: false,
    image:"public/shoes.jpg"
  },
];
export const brands = [{
  _id: "1",
  title: "Versace",
  image: "public/versace-removebg-preview.png",
},
{
  _id: "2",
  title: "Gucci",
  image: "public/gucci-removebg-preview.png",
},
{
  _id: "3",
  title: "Prada",
  image: "public/prada-removebg-preview.png",
},
{
  _id: "4",
  title: "Dior",
  image: "public/dior-removebg-preview.png",
},
{
  _id: "5",
  title: "Chanel",
  image: "public/chanel-removebg-preview.png",
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
    image:"public/shirt.jpeg",
    discountPercentage: 20,
    originalPrice: 109.99
  },
  {
    _id: "2",
    type: "sale",
    title:"Designer Slim-Fit Jeans",
    price:"129.99",
    isOnSale: true,
    image:"public/jeans.jpg",
    discountPercentage: 10,
    originalPrice: 149.99
  },
  {
    _id: "3",
    type: "sale",
    title:"Merino Wool Sweater",
    price:"159.99",
    isOnSale: true,
    image:"public/sweater.jpeg",
    discountPercentage: 15,
    originalPrice: 179.99
  },
  {
    _id: "4",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isOnSale: true,
    image:"public/shoes.jpg",
    discountPercentage: 25,
    originalPrice: 229.99
  },
  {
    _id: "5",
    type: "sale",
    title:"Italian Leather Loafers",
    price:"199.99",
    isOnSale: true,
    image:"public/shoes.jpg",
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

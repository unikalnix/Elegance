export const navItems = ["shop", "men", "women", "kids", "accessories", "sale", "about", "contact"];
export const categories = ["men", "women", "kids", "accessories", "sale"]
export const homeCategoriesData = [
  {
    _id: "1",
    type: "category",
    title: "Men",
    image: "/images/men.jpg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "2",
    type: "category",
    title: "Women",
    image: "/images/women.jpg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "3",
    type: "category",
    title: "Kids",
    image: "/images/kid.jpeg",
    description: "Summer & Winter Collection",
  },
  {
    _id: "4",
    type: "category",
    title: "Accessories",
    image: "/images/accessory.jpg",
    description: "Complete Your Look",
  },
  {
    _id: "4",
    type: "category",
    title: "Accessories",
    image: "/images/accessory.jpg",
    description: "Complete Your Look",
  },
];
export const brands = [
  {
    _id: "1",
    title: "Versace",
    image: "/images/versace-removebg-preview.png",
  },
  {
    _id: "2",
    title: "Gucci",
    image: "/images/gucci-removebg-preview.png",
  },
  {
    _id: "3",
    title: "Prada",
    image: "/images/prada-removebg-preview.png",
  },
  {
    _id: "4",
    title: "Dior",
    image: "/images/dior-removebg-preview.png",
  },
  {
    _id: "5",
    title: "Chanel",
    image: "/images/chanel-removebg-preview.png",
  },
  {
    _id: "6",

    title: "Louis Vuitton",
    image: "/images/louis_vuitton-removebg-preview.png",
  },
];

export const footerLinks = [
  {
    _id: "1",
    title: "Shop",
    links: [
      { name: "Men", path: "#" },
      { name: "Women", path: "#" },
      { name: "Kids", path: "#" },
      { name: "Accessories", path: "#" },
      { name: "Sale", path: "#" },
    ],
  },
  {
    _id: "2",
    title: "Company",
    links: [
      { name: "About Us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Store Locator", path: "#" },
      { name: "Sustainability", path: "#" },
      { name: "Press", path: "#" },
    ],
  },
  {
    _id: "3",
    title: "Customer Service",
    links: [
      { name: "Contact Us", path: "#" },
      { name: "FAQs", path: "#" },
      { name: "Shipping & Returns", path: "#" },
      { name: "Size Guide", path: "#" },
      { name: "Privacy Policy", path: "#" },
    ],
  },
];

export const collection = [
  {
    "_id": "1",
    "type": "sale",
    "title": "Premium Cotton Shirt",
    "price": "89.99",
    "isNew": true,
    "isFeatured": true,
    "isOnSale": false,
    "image": "/images/shirt.jpeg",
    "discountPercentage": 0,
    "originalPrice": "89.99",
    "category": "men"
  },
  {
    "_id": "2",
    "type": "sale",
    "title": "Designer Slim-Fit Jeans",
    "price": "129.99",
    "isNew": false,
    "isFeatured": true,
    "isOnSale": true,
    "image": "/images/jeans.jpg",
    "discountPercentage": 10,
    "originalPrice": "144.99",
    "category": "men"
  },
  {
    "_id": "3",
    "type": "sale",
    "title": "Merino Wool Sweater",
    "price": "159.99",
    "isNew": true,
    "isFeatured": true,
    "isOnSale": false,
    "image": "/images/sweater.jpeg",
    "discountPercentage": 0,
    "originalPrice": "159.99",
    "category": "men"
  },
  {
    "_id": "4",
    "type": "sale",
    "title": "Italian Leather Loafers",
    "price": "199.99",
    "isNew": false,
    "isFeatured": false,
    "isOnSale": true,
    "image": "/images/shoes.jpg",
    "discountPercentage": 20,
    "originalPrice": "249.99",
    "category": "men"
  }
]

  export const users = [
    {
      "_id": 1,
      "username": "hello",
      "password": "123"
    },
    {
      "_id": 2,
      "username": "john_doe",
      "password": "pass456"
    },
    {
      "_id": 3,
      "username": "jane_smith",
      "password": "secure789"
    },
    {
      "_id": 4,
      "username": "mark_tech",
      "password": "tech@2024"
    },
    {
      "_id": 5,
      "username": "emma_dev",
      "password": "devpass321"
    }
  ]
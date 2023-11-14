import cupcake from "../assets/cupcake.svg";
import pizza from "../assets/pizza.svg";
import kebab from "../assets/kebab.svg";
import salmon from "../assets/salmon.svg";
import doughnut from "../assets/doughnut.svg";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";

let categories = [
  {
    id: 1,
    name: "Cupcake",
    items: 22,
    iconUrl: cupcake,
  },
  {
    id: 2,
    name: "Pizza",
    items: 25,
    iconUrl: pizza,
  },
  {
    id: 3,
    name: "Kebab",
    items: 12,
    iconUrl: kebab,
  },
  {
    id: 4,
    name: "Salmon",
    items: 22,
    iconUrl: salmon,
  },
  {
    id: 5,
    name: "Doughnut",
    items: 11,
    iconUrl: doughnut,
  },
  {
    id: 6,
    name: "Cupcake",
    items: 22,
    iconUrl: cupcake,
  },
  {
    id: 7,
    name: "Pizza",
    items: 25,
    iconUrl: pizza,
  },
  {
    id: 8,
    name: "Kebab",
    items: 12,
    iconUrl: kebab,
  },
];

let trending = [
  {
    id: 1,
    name: "Pizza Paperono",
    category: "Pizza",
    rating: 4,
    imageUrl: image1,
  },
  {
    id: 2,
    name: "Pizza Meat",
    category: "Pizza",
    rating: 3,
    imageUrl: image2,
  },
  {
    id: 3,
    name: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    imageUrl: image3,
  },
  {
    id: 4,
    name: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    imageUrl: image4,
  },
  {
    id: 5,
    name: "Cupcake Choco",
    category: "Cupcake",
    rating: 4,
    imageUrl: image5,
  },
  {
    id: 6,
    name: "Doughnut Milk",
    category: "Doughnut",
    rating: 5,
    imageUrl: image6,
  },
  {
    id: 7,
    name: "Doughnut Unicorn",
    category: "Doughnut",
    rating: 4,
    imageUrl: image7,
  },
  {
    id: 8,
    name: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    imageUrl: image8,
  },
  {
    id: 9,
    name: "Pizza Paperono",
    category: "Pizza",
    rating: 4,
    imageUrl: image1,
  },
  {
    id: 10,
    name: "Pizza Meat",
    category: "Pizza",
    rating: 3,
    imageUrl: image2,
  },
  {
    id: 11,
    name: "Doner Kebab",
    category: "Kebab",
    rating: 5,
    imageUrl: image3,
  },
  {
    id: 12,
    name: "Salmon Roll",
    category: "Salmon",
    rating: 4,
    imageUrl: image4,
  },
  {
    id: 13,
    name: "Cupcake Choco",
    category: "Cupcake",
    rating: 4,
    imageUrl: image5,
  },
  {
    id: 14,
    name: "Doughnut Milk",
    category: "Doughnut",
    rating: 5,
    imageUrl: image6,
  },
  {
    id: 15,
    name: "Doughnut Unicorn",
    category: "Doughnut",
    rating: 4,
    imageUrl: image7,
  },
  {
    id: 16,
    name: "Kathi Kebab",
    category: "Kebab",
    rating: 4,
    imageUrl: image8,
  },
];

function getAllCategories() {
  return categories;
}

function getAllTrending() {
  return trending;
}

export { getAllCategories, getAllTrending };

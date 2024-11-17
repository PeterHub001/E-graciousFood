// Import all images dynamically
const images = import.meta.glob('./*.{jpg,jpeg,png,svg}', { eager: true });

// Organize imported images in an object with filename as key
const assets = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const nameMatch = path.match(/\/([^/]+)\./); // Adjusted regex to capture filename
    const name = nameMatch ? nameMatch[1] : path; // Fallback to the full path if match fails
    return [name, module.default];
  })
);

// Define menu list with references to images in assets
export const menu_list = [
  {
    menu_name: "Greek Salad",
    menu_image: assets["menu_1"]
  },
  {
    menu_name: "Nigerian dish",
    menu_image: assets["menu_2"]
  },
  {
    menu_name: "Pasteries",
    menu_image: assets["menu_3"]
  },
  {
    menu_name: "Small chops",
    menu_image: assets["menu_4"]
  },
  {
    menu_name: "Cakes",
    menu_image: assets["menu_5"]
  },
  {
    menu_name: "Salad",
    menu_image: assets["menu_6"]
  },
  {
    menu_name: "Smodies",
    menu_image: assets["menu_7"]
  },
  {
    menu_name: "Deserts",
    menu_image: assets["menu_8"]
  }
];
export const food_list = [
  {
    _id: "1",
    name: "Greek Salad",
    image: assets["img_6"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    _id: "2",
    name: "tomtom",
    image: assets["img_7"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Nigerian dish"
  },
  {
    _id: "3",
    name: "Greek salad",
    image: assets["img_8"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Nigerian dish"
  },
  {
    _id: "4",
    name: "Greek salad",
    image: assets["img_9"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being"
  },
  {
    _id: "5",
    name: "Greek salad",
    image: assets["img_10"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasteries"
  },
  {
    _id: "6",
    name: "Greek salad",
    image: assets["img_11"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasteries"
  },
  {
    _id: "7",
    name: "Greek salad",
    image: assets["img_12"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasteries"
  },
  {
    _id: "8",
    name: "Greek salad",
    image: assets["img_13"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Pasteries"
  },
  {
    _id: "9",
    name: "Greek salad",
    image: assets["img_14"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    _id: "10",
    name: "Greek salad",
    image: assets["img_15"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    _id: "11",
    name: "Greek salad",
    image: assets["img_16"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Salad"
  },
  {
    _id: "12",
    name: "Greek Salad",
    image: assets["img_17"],
    price: 12,
    description: "Food provides essential nutrients for overall health and well-being",
    category: "Nigerian dish"
  }
]

export default assets;

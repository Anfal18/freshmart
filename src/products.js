
const products = [
  // ================= VEGETABLES =================
  {
    id: 1,
    name: "Tomato",
    category: "Vegetables",
    price: 30,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&auto=format&fit=crop",
    description: "Fresh, juicy tomatoes."
  },
  {
    id: 2,
    name: "Potato",
    category: "Vegetables",
    price: 40,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop",
    description: "Fresh potatoes."
  },
  {
    id: 3,
    name: "Carrot",
    category: "Vegetables",
    price: 50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500&auto=format&fit=crop",
    description: "Fresh crunchy carrots."
  },
  {
    id: 4,
    name: "Onion",
    category: "Vegetables",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&auto=format&fit=crop",
    description: "Fresh onions."
  },
  {
    id: 5,
    name: "Cabbage",
    category: "Vegetables",
    price: 35,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=500&auto=format&fit=crop",
    description: "Fresh green cabbage."
  },
  {
    id: 6,
    name: "Cauliflower",
    category: "Vegetables",
    price: 50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500&auto=format&fit=crop",
    description: "Fresh cauliflower."
  },
  {
    id: 7,
    name: "Broccoli",
    category: "Vegetables",
    price: 100,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop",
    description: "Fresh green broccoli."
  },
  {
    id: 8,
    name: "Cucumber",
    category: "Vegetables",
    price: 35,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500&auto=format&fit=crop",
    description: "Fresh cucumber."
  },
  {
    id: 9,
    name: "Green Chilli",
    category: "Vegetables",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=500&auto=format&fit=crop",
    description: "Fresh green chillies."
  },
  {
    id: 10,
    name: "Capsicum",
    category: "Vegetables",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500&auto=format&fit=crop",
    description: "Fresh bell peppers."
  },
  {
    id: 11,
    name: "Spinach",
    category: "Vegetables",
    price: 30,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop",
    description: "Fresh leafy spinach."
  },
  {
    id: 12,
    name: "Brinjal",
    category: "Vegetables",
    price: 40,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1526049332082-27f8e41d5e8a?w=500&auto=format&fit=crop",
    description: "Fresh purple brinjal."
  },
  {
    id: 13,
    name: "Beetroot",
    category: "Vegetables",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop",
    description: "Fresh beetroot."
  },
  {
    id: 14,
    name: "Pumpkin",
    category: "Vegetables",
    price: 35,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=500&auto=format&fit=crop",
    description: "Fresh pumpkin."
  },
  {
    id: 15,
    name: "Ladies Finger",
    category: "Vegetables",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?w=500&auto=format&fit=crop",
    description: "Fresh ladies finger."
  },
  {
    id: 16,
    name: "Green Peas",
    category: "Vegetables",
    price: 100,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=500&auto=format&fit=crop",
    description: "Fresh green peas."
  },
  {
    id: 17,
    name: "Garlic",
    category: "Vegetables",
    price: 180,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=500&auto=format&fit=crop",
    description: "Fresh garlic."
  },
  {
    id: 18,
    name: "Ginger",
    category: "Vegetables",
    price: 120,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1630623093145-f606591c2546?w=500&auto=format&fit=crop",
    description: "Fresh ginger."
  },
  {
    id: 19,
    name: "Radish",
    category: "Vegetables",
    price: 35,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop",
    description: "Fresh radish."
  },
  {
    id: 20,
    name: "Sweet Potato",
    category: "Vegetables",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1744659749700-c4213f840355?w=500&auto=format&fit=crop",
    description: "Fresh sweet potatoes."
  },

  // ================= FRUITS =================
  {
    id: 21,
    name: "Apple",
    category: "Fruits",
    price: 150,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop",
    description: "Crisp and delicious apples."
  },
  {
    id: 22,
    name: "Banana",
    category: "Fruits",
    price: 60,
    unit: "dozen",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop",
    description: "Sweet fresh bananas."
  },
  {
    id: 23,
    name: "Orange",
    category: "Fruits",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop",
    description: "Juicy oranges."
  },
  {
    id: 24,
    name: "Grapes",
    category: "Fruits",
    price: 100,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&auto=format&fit=crop",
    description: "Sweet grapes."
  },
  {
    id: 25,
    name: "Mango",
    category: "Fruits",
    price: 120,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop",
    description: "Sweet tropical mangoes."
  },
  {
    id: 26,
    name: "Pineapple",
    category: "Fruits",
    price: 60,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop",
    description: "Fresh pineapple."
  },
  {
    id: 27,
    name: "Watermelon",
    category: "Fruits",
    price: 35,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500&auto=format&fit=crop",
    description: "Refreshing watermelon."
  },
  {
    id: 28,
    name: "Papaya",
    category: "Fruits",
    price: 45,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=500&auto=format&fit=crop",
    description: "Fresh ripe papaya."
  },
  {
    id: 29,
    name: "Pomegranate",
    category: "Fruits",
    price: 180,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?w=500&auto=format&fit=crop",
    description: "Juicy pomegranates."
  },
  {
    id: 30,
    name: "Strawberry",
    category: "Fruits",
    price: 200,
    unit: "box",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop",
    description: "Fresh strawberries."
  },
  {
    id: 31,
    name: "Guava",
    category: "Fruits",
    price: 60,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?w=500&auto=format&fit=crop",
    description: "Fresh guava."
  },
  {
    id: 32,
    name: "Lemon",
    category: "Fruits",
    price: 80,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=500&auto=format&fit=crop",
    description: "Fresh lemons."
  },
  {
    id: 33,
    name: "Kiwi",
    category: "Fruits",
    price: 250,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500&auto=format&fit=crop",
    description: "Fresh kiwi fruit."
  },
  {
    id: 34,
    name: "Pear",
    category: "Fruits",
    price: 160,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=500&auto=format&fit=crop",
    description: "Sweet and juicy pears."
  },
  {
    id: 35,
    name: "Muskmelon",
    category: "Fruits",
    price: 50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=500&auto=format&fit=crop",
    description: "Fresh muskmelon."
  },
  {
    id: 36,
    name: "Dragon Fruit",
    category: "Fruits",
    price: 180,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=500&auto=format&fit=crop",
    description: "Fresh dragon fruit."
  }
];

export default products;

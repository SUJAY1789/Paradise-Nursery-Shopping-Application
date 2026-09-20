import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
  // Indoor Plants
  {
    id: 1,
    category: "Indoor Plants",
    name: "Snake Plant",
    price: 499,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 2,
    category: "Indoor Plants",
    name: "Peace Lily",
    price: 599,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
  },
  {
    id: 3,
    category: "Indoor Plants",
    name: "Money Plant",
    price: 299,
    image: "https://images.unsplash.com/photo-1614594575924-a4e7c5f9a6f7",
  },
  {
    id: 4,
    category: "Indoor Plants",
    name: "ZZ Plant",
    price: 699,
    image: "https://images.unsplash.com/photo-1632207691144-5e5a3f5a5b3f",
  },
  {
    id: 5,
    category: "Indoor Plants",
    name: "Spider Plant",
    price: 399,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333",
  },
  {
    id: 6,
    category: "Indoor Plants",
    name: "Rubber Plant",
    price: 799,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },

  // Flowering Plants
  {
    id: 7,
    category: "Flowering Plants",
    name: "Rose Plant",
    price: 349,
    image: "https://images.unsplash.com/photo-1496062031456-07b8f162a322",
  },
  {
    id: 8,
    category: "Flowering Plants",
    name: "Jasmine Plant",
    price: 299,
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651",
  },
  {
    id: 9,
    category: "Flowering Plants",
    name: "Hibiscus Plant",
    price: 399,
    image: "https://images.unsplash.com/photo-1597089542047-b9873d82d8a6",
  },
  {
    id: 10,
    category: "Flowering Plants",
    name: "Orchid Plant",
    price: 899,
    image: "https://images.unsplash.com/photo-1566907225476-7f7f4d4b5c4e",
  },
  {
    id: 11,
    category: "Flowering Plants",
    name: "Marigold Plant",
    price: 249,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
  },
  {
    id: 12,
    category: "Flowering Plants",
    name: "Bougainvillea Plant",
    price: 499,
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99",
  },

  // Succulents
  {
    id: 13,
    category: "Succulents",
    name: "Aloe Vera",
    price: 299,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
  },
  {
    id: 14,
    category: "Succulents",
    name: "Echeveria",
    price: 349,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 15,
    category: "Succulents",
    name: "Jade Plant",
    price: 399,
    image: "https://images.unsplash.com/photo-1525498128493-380d1990a112",
  },
  {
    id: 16,
    category: "Succulents",
    name: "Haworthia",
    price: 449,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 17,
    category: "Succulents",
    name: "String of Pearls",
    price: 599,
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc",
  },
  {
    id: 18,
    category: "Succulents",
    name: "Zebra Haworthia",
    price: 499,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems((prev) => [...prev, plant.id]);
  };

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart ({cartItemCount})</Link>
      </nav>

      <h1>Paradise Nursery</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="200"
                    height="200"
                  />

                  <h3>{plant.name}</h3>

                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedItems.includes(plant.id)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;

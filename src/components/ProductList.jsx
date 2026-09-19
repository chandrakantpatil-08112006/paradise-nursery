import { useDispatch, useSelector } from "react-redux";

import Navbar from "./Navbar.jsx";
import { addToCart } from "../redux/CartSlice.jsx";

// Plant images are stored in "public/images".
// BASE_URL makes sure the paths also work on GitHub Pages.
const imageFolder = `${import.meta.env.BASE_URL}images/`;

// ---------------------------------------------------------------
// PLANT DATA
// 3 categories x 6 plants = 18 unique plants.
// Every plant has: id, name, category, price, image, description
// ---------------------------------------------------------------
const plantCategories = [
  {
    categoryName: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        category: "Indoor Plants",
        price: 15,
        image: `${imageFolder}snake-plant.svg`,
        description: "Tall, upright leaves. Very hard to kill and great for beginners.",
      },
      {
        id: 2,
        name: "Peace Lily",
        category: "Indoor Plants",
        price: 18,
        image: `${imageFolder}peace-lily.svg`,
        description: "Glossy leaves and white flowers. Helps freshen the air indoors.",
      },
      {
        id: 3,
        name: "Spider Plant",
        category: "Indoor Plants",
        price: 12,
        image: `${imageFolder}spider-plant.svg`,
        description: "Arching striped leaves. Grows fast and is safe for pets.",
      },
      {
        id: 4,
        name: "ZZ Plant",
        category: "Indoor Plants",
        price: 22,
        image: `${imageFolder}zz-plant.svg`,
        description: "Shiny dark leaves that cope well with low light and little water.",
      },
      {
        id: 5,
        name: "Rubber Plant",
        category: "Indoor Plants",
        price: 25,
        image: `${imageFolder}rubber-plant.svg`,
        description: "Large, thick leaves that make a bold statement in any room.",
      },
      {
        id: 6,
        name: "Pothos",
        category: "Indoor Plants",
        price: 10,
        image: `${imageFolder}pothos.svg`,
        description: "A trailing vine with heart-shaped leaves. Easy to grow and share.",
      },
    ],
  },
  {
    categoryName: "Succulents",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        category: "Succulents",
        price: 12,
        image: `${imageFolder}aloe-vera.svg`,
        description: "Thick, spiky leaves filled with soothing gel. Loves bright light.",
      },
      {
        id: 8,
        name: "Jade Plant",
        category: "Succulents",
        price: 14,
        image: `${imageFolder}jade-plant.svg`,
        description: "A tiny tree with round, fleshy leaves. Said to bring good luck.",
      },
      {
        id: 9,
        name: "Echeveria",
        category: "Succulents",
        price: 9,
        image: `${imageFolder}echeveria.svg`,
        description: "A rose-shaped rosette in soft blue-green with pink tips.",
      },
      {
        id: 10,
        name: "Haworthia",
        category: "Succulents",
        price: 8,
        image: `${imageFolder}haworthia.svg`,
        description: "A small, spiky succulent that does well on a desk or shelf.",
      },
      {
        id: 11,
        name: "Zebra Haworthia",
        category: "Succulents",
        price: 10,
        image: `${imageFolder}zebra-haworthia.svg`,
        description: "Dark green leaves with white zebra stripes. Compact and stylish.",
      },
      {
        id: 12,
        name: "String of Pearls",
        category: "Succulents",
        price: 16,
        image: `${imageFolder}string-of-pearls.svg`,
        description: "Long strands of bead-like leaves. Perfect for hanging pots.",
      },
    ],
  },
  {
    categoryName: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "African Violet",
        category: "Flowering Plants",
        price: 11,
        image: `${imageFolder}african-violet.svg`,
        description: "Small purple flowers that can bloom almost all year round.",
      },
      {
        id: 14,
        name: "Anthurium",
        category: "Flowering Plants",
        price: 24,
        image: `${imageFolder}anthurium.svg`,
        description: "Bright red, heart-shaped blooms above dark green leaves.",
      },
      {
        id: 15,
        name: "Begonia",
        category: "Flowering Plants",
        price: 13,
        image: `${imageFolder}begonia.svg`,
        description: "Colorful blossoms and patterned leaves for a cheerful windowsill.",
      },
      {
        id: 16,
        name: "Kalanchoe",
        category: "Flowering Plants",
        price: 12,
        image: `${imageFolder}kalanchoe.svg`,
        description: "Clusters of tiny flowers on easy-care, succulent leaves.",
      },
      {
        id: 17,
        name: "Orchid",
        category: "Flowering Plants",
        price: 30,
        image: `${imageFolder}orchid.svg`,
        description: "Elegant arching stems with long-lasting, delicate flowers.",
      },
      {
        id: 18,
        name: "Gerbera",
        category: "Flowering Plants",
        price: 15,
        image: `${imageFolder}gerbera.svg`,
        description: "Big, bright daisy-like flowers in warm, happy colors.",
      },
    ],
  },
];

// --------------------------------------------------------------
// PRODUCT LIST PAGE (route "/plants")
// ---------------------------------------------------------------
function ProductList() {
  const dispatch = useDispatch();

  // Read the cart items from the Redux store.
  const cartItems = useSelector((state) => state.cart.items);

  // A plant is "added" when its id can be found in the cart.
  // Because this comes from Redux, the button goes back to normal
  // if the plant is later deleted from the cart.
  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  // Send the plant to the Redux cart.
  const handleAddToCart = (plant) => {
    dispatch(
      addToCart({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
      })
    );
  };

  return (
    <div className="page">
      <Navbar />

      <main className="products-page">
        <header className="page-header">
          <h1 className="page-title">Our Plants</h1>
          <p className="page-subtitle">
            Browse our collection of indoor plants, succulents and flowering plants.
          </p>
        </header>

        {/* One section for each category */}
        {plantCategories.map((category) => (
          <section className="category-section" key={category.categoryName}>
            <h2 className="category-title">{category.categoryName}</h2>

            {/* One card for each plant in the category */}
            <div className="plant-grid">
              {category.plants.map((plant) => {
                const added = isInCart(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <img
                      className="plant-thumbnail"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <div className="plant-info">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <p className="plant-price">${plant.price}</p>

                      <button
                        className={added ? "add-to-cart-btn added" : "add-to-cart-btn"}
                        disabled={added}
                        onClick={() => handleAddToCart(plant)}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;

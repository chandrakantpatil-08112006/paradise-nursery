import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice.jsx";

// ---------------------------------------------------------------
// SHOPPING CART PAGE (route "/cart")
// ---------------------------------------------------------------
function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Read the cart items from the Redux store.
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of plants = sum of all quantities.
  const totalPlants = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Total amount = sum of (price x quantity) for every item.
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleContinueShopping = () => {
    navigate("/plants");
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  // ---------- Empty cart ----------
  if (cartItems.length === 0) {
    return (
      <div className="page">
        <Navbar />

        <main className="cart-page">
          <div className="empty-cart">
            <div className="empty-cart-icon">🪴</div>
            <h1 className="empty-cart-title">Your cart is empty.</h1>
            <p className="empty-cart-text">
              Start shopping and bring some greenery home!
            </p>
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ---------- Cart with items ----------
  return (
    <div className="page">
      <Navbar />

      <main className="cart-page">
        <h1 className="page-title">Shopping Cart</h1>

        <div className="cart-layout">
          {/* Left side: one row for each plant in the cart */}
          <section className="cart-list">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img className="cart-item-image" src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">Unit Price: ${item.price}</p>

                  <div className="quantity-control">
                    <span className="quantity-label">Quantity:</span>
                    <button
                      className="quantity-btn"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-actions">
                  {/* Item total = price x quantity */}
                  <p className="cart-item-total">Item Total: ${item.price * item.quantity}</p>
                  <button
                    className="delete-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </section>

          {/* Right side: totals and buttons */}
          <aside className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>

            <p className="summary-row">
              <span>Total Plants:</span>
              <strong>{totalPlants}</strong>
            </p>
            <p className="summary-row summary-total">
              <span>Total Amount:</span>
              <strong>${totalAmount}</strong>
            </p>

            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="continue-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default CartItem;

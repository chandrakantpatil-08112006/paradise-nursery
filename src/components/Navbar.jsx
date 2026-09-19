import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// The Navbar is used on the Plants page and on the Cart page.
// It reads the cart from Redux, so the number next to the cart
// updates immediately whenever the cart changes.

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  // Total number of plants = the sum of every item's quantity.
  const totalPlants = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-logo">🌿</span> Paradise Nursery
      </Link>

      <div className="navbar-links">
        {/* NavLink adds the class "active" to the link of the current page */}
        <NavLink to="/" end className="navbar-link">
          Home
        </NavLink>
        <NavLink to="/plants" className="navbar-link">
          Plants
        </NavLink>
        <NavLink to="/cart" className="navbar-link cart-link">
          🛒 Cart ({totalPlants})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

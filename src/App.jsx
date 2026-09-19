import { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

import AboutUs from "./components/AboutUs.jsx";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import "./App.css";

// Images are stored in the "public/images" folder.
// BASE_URL makes sure the image paths also work on GitHub Pages.
const imageFolder = `${import.meta.env.BASE_URL}images/`;

// ---------------------------------------------------------------
// LANDING PAGE (route "/")
// Shows the company name, a short description (AboutUs)
// and the "Get Started" button that opens the Plants page.
// The background image for this page is set in App.css (.landing-page).
// ---------------------------------------------------------------
function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/plants");
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-tagline">Where green meets home</p>

        <AboutUs />

        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      <div className="landing-showcase">
        <img
          className="showcase-image showcase-image-large"
          src={`${imageFolder}anthurium.svg`}
          alt="Anthurium in a pot"
        />
        <img
          className="showcase-image showcase-image-small"
          src={`${imageFolder}aloe-vera.svg`}
          alt="Aloe vera in a pot"
        />
      </div>
    </div>
  );
}

// When the page changes, scroll back to the top.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ---------------------------------------------------------------
// APP: decides which page to show for each URL.
// The Router itself is created in main.jsx.
// ---------------------------------------------------------------
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        {/* Any unknown URL goes back to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

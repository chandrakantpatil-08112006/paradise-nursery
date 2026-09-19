# 🌿 Paradise Nursery

**Paradise Nursery** is a modern and interactive plant shopping web application built with **React.js and Redux Toolkit**. The application provides a simple and user-friendly experience for browsing houseplants, adding plants to a shopping cart, and managing cart quantities before checkout.

The project was developed as part of the **Paradise Nursery Shopping Application Final Project**, focusing on React component development, state management with Redux, routing, and responsive user interface design.

---

## 🌱 About Paradise Nursery

Paradise Nursery is an online plant shop created for plant lovers who want to explore and purchase beautiful houseplants conveniently.

The application allows users to:

* Explore a variety of houseplants
* Browse plants by category
* View plant images, names, and prices
* Add plants to their shopping cart
* View the total number of items in the cart
* Increase or decrease item quantities
* Remove plants from the cart
* View individual and overall cart costs
* Continue shopping or proceed toward checkout

---

## ✨ Features

### 🏠 Landing Page

* Attractive Paradise Nursery branding
* Background image
* Introduction about the company
* **Get Started** button
* Navigation to the plant shopping page

### 🌿 Product Listing

* Multiple houseplant categories
* Multiple plants available in each category
* Plant thumbnail images
* Plant names
* Plant prices
* **Add to Cart** functionality
* Add-to-cart button becomes disabled after the plant is added
* Dynamically updated cart count

### 🛒 Shopping Cart

* Displays all selected plants
* Displays plant thumbnails
* Displays plant names
* Displays unit prices
* Displays quantity of each plant
* Increase quantity button
* Decrease quantity button
* Delete/remove button
* Individual item total
* Total number of plants
* Total cart amount
* **Continue Shopping** button
* **Checkout** button with a "Coming Soon" message

### 🧭 Navigation

The application provides navigation between:

* 🏠 Home
* 🌿 Plants
* 🛒 Cart

The navigation bar is available on the product listing and shopping cart pages.

---

## 🛠️ Technologies Used

* **React.js** – Frontend user interface
* **Redux Toolkit** – Global shopping cart state management
* **React Router** – Page navigation
* **JavaScript (ES6+)** – Application logic
* **HTML5** – Structure
* **CSS3** – Styling and responsive layout
* **Vite** – Development and build tool
* **Git & GitHub** – Version control and project hosting
* **GitHub Pages** – Application deployment

---

## 📂 Project Structure

```text
paradise-nursery/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── ProductList.jsx
│   │   ├── CartItem.jsx
│   │   └── Navbar.jsx
│   │
│   ├── redux/
│   │   └── CartSlice.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

> The exact folder structure may vary depending on the implementation.

---

## 🛒 Shopping Cart State Management

The shopping cart is managed using **Redux Toolkit**.

The cart state handles:

* Adding plants
* Tracking quantities
* Increasing quantities
* Decreasing quantities
* Removing products
* Calculating total items
* Calculating total cart price

This provides centralized and predictable state management across the application.

---

## 🔄 Application Flow

```text
                 ┌─────────────────┐
                 │   Landing Page  │
                 │ Paradise Nursery│
                 └────────┬────────┘
                          │
                    Get Started
                          │
                          ▼
                 ┌─────────────────┐
                 │  Plants Page    │
                 │                 │
                 │ Browse Plants   │
                 │ Add to Cart     │
                 └────────┬────────┘
                          │
                    View Cart
                          │
                          ▼
                 ┌─────────────────┐
                 │   Cart Page     │
                 │                 │
                 │ Increase        │
                 │ Decrease        │
                 │ Delete          │
                 │ Calculate Total │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │    Checkout     │
                 │   Coming Soon   │
                 └─────────────────┘
```

---

## 📱 Responsive Design

The application is designed to provide a clean and usable interface across different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile devices
* 📱 Tablets

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/paradise-nursery.git
```

### 2. Navigate to the Project

```bash
cd paradise-nursery
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

---

## 🌐 Live Demo

**Live Application:**
`YOUR-GITHUB-PAGES-URL`

**GitHub Repository:**
`YOUR-GITHUB-REPOSITORY-URL`

> Replace the placeholder URLs above with your actual GitHub repository and deployed GitHub Pages URLs.

---

## 🎯 Project Objectives

The main objectives of this project are to demonstrate practical knowledge of:

* React component architecture
* React Hooks
* React Router
* Redux Toolkit
* Global state management
* Event handling
* Dynamic rendering
* Array manipulation
* Conditional rendering
* Shopping cart logic
* Responsive UI development
* Git and GitHub
* GitHub Pages deployment

---

## 📸 Application Highlights

### 🏠 Landing Page

A welcoming landing page introducing Paradise Nursery with a background image and a clear call-to-action.

### 🌿 Plants Page

Users can browse plants organized into different categories and add their preferred plants to the cart.

### 🛒 Cart Page

Users can manage their selected plants, adjust quantities, remove items, and view dynamically calculated totals.

---

## 👨‍💻 Developer

**Chandrakant Patil**

B.E. Computer Science and Engineering (AI & ML)

---

## 📄 License

This project was created for educational and academic purposes as part of the Paradise Nursery Shopping Application Final Project.

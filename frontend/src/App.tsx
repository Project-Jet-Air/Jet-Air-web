import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <div className="grid-container">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="#">Jet Air</a>
        </div>
        <div className="header-links">
          <a href="#">Cart</a>
          <a href="#">Sign In</a>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li><a href="#">Pants</a></li>
          <li><a href="#">Shirts</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main>
        <div className="content">
          <ul className="products">
            {[...Array(2)].map((_, index) => (
              <li key={index}>
                <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />

                  <div className="product-name">
                    <a href="#">Slim Shirt</a>
                  </div>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$60</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer>&copy; 2022 Jet Air</footer>
    </div>
  );
}

export default App;

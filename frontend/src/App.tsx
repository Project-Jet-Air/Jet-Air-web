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
          <span>Jet Air</span> {/* ✅ Left aligned */}
        </div>
        <nav className="header-links">
          <a href="#">Home</a>
          <a href="#">Catalog</a> {/* ✅ Right aligned */}
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <h1>Home</h1>
      </main>

      {/* Sidebar */}
      <aside className="sidebar">
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <h3>Shopping Categories</h3>
        <ul>
          <li><a href="#">Pants</a></li>
          <li><a href="#">Shirts</a></li>
        </ul>
      </aside>

      {/* Footer */}
      <footer>&copy; 2024 Jet Air</footer>
    </div>
  );
}

export default App;

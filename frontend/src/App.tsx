import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home/Home';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import OrderDetail from './Orders/OrderDetail';

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
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/orders">Orders</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/catalog' element={<Products/>} />

          <Route path="orders" element={<Orders />}></Route>
          <Route path="order/:id" element={<OrderDetail />}></Route>
        </Routes>
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

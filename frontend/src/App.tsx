import React from "react";
import { RoutePath as Router, Route, Switch, Link } from "react-router-dom";
import Payment from './Payment/Payment'; // Import payment part
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
    <div className="grid-container">
      {/* Header */}
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <span>Jet Air</span> {/* ✅ Left aligned */}
        </div>
        <nav className="header-links">
          <Link to="/">Home</Link> {/* Link to Home */}
          <Link to="/catalog">Catalog</Link> {/* Link to Catalog */}
          <Link to="/payment">Payment</Link> {/* Link to Payment */}          
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Switch>
          <Route path="/" exact>
          <h1>Home</h1>
          </Route>
          <Route path="/payment">
          <Payment />
          </Route>
        </Switch>
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
    </Router>
  );
}
export default App;

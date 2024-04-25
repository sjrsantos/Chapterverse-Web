import "./styles.scss";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
  return (
    <nav className="main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/about-us">About</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
    </nav>
  );
}

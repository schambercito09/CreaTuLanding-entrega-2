import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

export const NavBar = () => {
    
 
    return (
      <nav className="container mt-2 d-flex">
        <Logo/>
        
        <div>
          <Link to="/">
            <button className="btn btn-dark">Home</button>
          </Link>
          <Link to="cart">
            <button className="btn btn-dark">Cart</button>
          </Link>
          
          
        </div>
        
      </nav>
  )
}

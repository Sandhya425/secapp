import { Link } from "react-router-dom";
import "./style.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar=()=>{
   
    return(
    <>
    <section className="s1">
     <article className="a1">
           <b>LEOLATHERS</b>
    </article>
    <article className="a2">
    <div><Link to="/">Home</Link></div>
    <div><Link to="/shop">Shop</Link></div>
    <div><Link to="/blog">Blog</Link></div>
    <div><Link to="/about">About</Link></div>
    <div><Link to="/contact">Contact</Link></div>
    <div><Link to="/get pro">GetPro</Link></div>
    </article>
    <article className="a3">
    <div><Link to="/login">Login</Link></div>
    <div><Link to="/register">Register</Link></div>
    <div><FaShoppingCart /></div>
    <div><FaSearch /></div>
    </article>
     </section>
    </>
    )
}
export default Navbar
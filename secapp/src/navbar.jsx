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
    <div><Link to="/">HOME</Link></div>
    <div><Link to="/shop">SHOP</Link></div>
    <div><Link to="/blog">BLOG</Link></div>
    <div><Link to="/about">ABOUT</Link></div>
    <div><Link to="/contact">CONTACT</Link></div>
    <div><Link to="/getpro">GET PRO</Link></div>
    </article>
    <article className="a3">
    <div><Link to="/login">LOGIN</Link></div>
    <div><Link to="/register">REGISTER</Link></div>
    <div><FaShoppingCart /></div>
    <div><FaSearch/></div>
    </article>
     </section>
    </>
    )
}
export default Navbar
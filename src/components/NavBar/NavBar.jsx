import CartWidget from "../CartWidget/cartWidget.jsx";
import './navBar.css';
import {Link, useParams} from "react-router-dom"
import logo from "./assets/veterinaria.png"


const NavBar = () =>{
    return (
        <nav class="nav-bar">
            <div class="logo">
                <img src={logo} alt="logo" class="logo-img"/>
            </div>
            <div class="navigator">
                <Link to="/category/perros"><li>Perros</li></Link>
                <Link to="/category/gatos"><li>Gatos</li></Link>
                <CartWidget/>
            </div>
        </nav>
    )

}

export default NavBar

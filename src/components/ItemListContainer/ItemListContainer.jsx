import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/navBar";



const ItemListContainer = () =>{
    const { id } = useParams();
    return (
        <div>
            <NavBar/>
            {/* <Link to="/category/pants">
                <button>Pantalones</button>
            </Link>
            <Link to="/category/shoes">
                <button>Zapatos</button>
            </Link> */}

            {id && id === "perros" && (
                <div>
                    <h1>Perros</h1>
                    <p>Esta es la descripcion de productos para perros</p>
                    <span>Categoria: Perros</span>
                    <button>Ir al detalle</button>
                </div>
            )}
            {id && id === "gatos" && (
                <div>
                    <h1>Gatos</h1>
                    <p>Esta es la descripcion de productos para gatos</p>
                    <span>Categoria: Gatos</span>
                    <button>Ir al detalle</button>
                </div>
            )}
        </div>
    )
}

export default ItemListContainer
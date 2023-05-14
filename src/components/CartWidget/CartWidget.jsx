import cart from "./assets/logo.svg"
import './cartWidget.css'

const CartWidget = () =>{
    return (
        <div class="cart">
            <img src={cart} alt="cart-widget"/>
            0            
        </div>
    )
}

export default CartWidget
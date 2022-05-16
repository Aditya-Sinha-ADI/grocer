import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./CartButton.module.css";
function CartButton(props) {
  const CartCntx = useContext(CartContext);
  const { items } = CartCntx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>
        <ion-icon name="cart" class={classes.navIcons}></ion-icon>
        <p>Your Cart</p>
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
export default CartButton;

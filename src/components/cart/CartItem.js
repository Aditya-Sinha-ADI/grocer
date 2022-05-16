import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `Rs.${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.cartval}>
        <h2>{props.name}</h2>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
      <div className={classes.summary}>
        <span className={classes.amount}>x {props.amount}</span>
        <span className={classes.price}>{price}</span>
      </div>
    </li>
  );
};

export default CartItem;

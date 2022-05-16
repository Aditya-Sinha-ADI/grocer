import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";
import Fruit from "./fruit.jpg";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div>
      <div className={classes.products}>
        {/* <div className={classes.image}>{props.img}</div> */}
        <figure className={classes.image}>
          <img src={Fruit} alt="product" />
        </figure>
        <div className={classes.productDesc}>
          <div>
            <p className={classes.productName}>{props.name}</p>
            <ul className={classes.productProperties}>
              <li>{props.category}</li>
              <li>
                <p className={classes.price}> Rs.{props.price}</p>
                <p className={classes.discount}>Rs.{props.mrp}</p>
              </li>
            </ul>
          </div>
          <div>
            <span className={classes.tag}>{props.tag}% OFF</span>
          </div>
        </div>
        <div className={classes.CartBtn}>
          <ProductItemForm onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};
export default ProductItem;

import { Fragment } from "react/cjs/react.production.min";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";
// import fruit from "./fruit.jpg";
// import Oil from "./oil.jpg";
// import shampoo from "./shampoo.jpg";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Grapes",
    category: "Fruits",
    tag: 10,
    // img: <img src={fruit} alt="product" />,
    originalPrice: 25,
    price: 16.5,
  },
  {
    id: "p2",
    name: "Hair Oil",
    category: "Hair Product",
    tag: 25,
    // img: <img src={Oil} alt="Product" />,
    originalPrice: 120,
    price: 89.99,
  },
  {
    id: "p3",
    name: "Shampoo",
    category: "Hair Product",
    tag: 15,
    // img: <img src={shampoo} alt="Product" />,
    originalPrice: 140,
    price: 92.99,
  },
  {
    id: "p4",
    name: "Watermelon",
    category: "Fruits",
    tag: 5,
    // img: <img src={fruit} alt="Product" />,
    originalPrice: 30,
    price: 18.99,
  },
];

const AvailableProducts = () => {
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      // img={product.img}
      name={product.name}
      category={product.category}
      price={product.price}
      tag={product.tag}
      mrp={product.originalPrice}
    />
  ));

  return (
      <section className={classes.productsList}>
        <div className={classes.productsAll}>{productsList}</div>
        <div className={classes.productsAll}>{productsList}</div>
        <div className={classes.productsAll}>{productsList}</div>
        <div className={classes.productsAll}>{productsList}</div>
      </section>
  );
};
export default AvailableProducts;

import { Fragment } from "react/cjs/react.production.min";
import AvailableProducts from "./AvailableProducts";
import Header from "../Layout/Header/Header";
import Heading from "../Layout/HeadING/Heading";

const Products = () => {
  return (
    <Fragment>
      <Header />
      <Heading />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;

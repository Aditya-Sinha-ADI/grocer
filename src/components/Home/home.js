import { Fragment } from "react/cjs/react.production.min";
import "./home.css";
import Nav from "./nav-bar/nav";
import Search from "./logoSearch/search";
import Swiper from "./Swiper/Swiper";
import Cards from "./Cards/Cards";
import Category from "./category/category";
import Fruits from "./Fresh Fruits/fresh";
import Vegetables from "./vegetables/vegetables";
import Nuts from "./Nuts/Nuts";
import Footer from "./footer/footer";
const Home = () => {
  return (
    <Fragment>
    <Nav />
    <Search />
    <Swiper />
    <Cards />
    <Category />
    <Fruits />
    <Vegetables />
    <Nuts />
    <Footer />
    </Fragment>
  );
};

export default Home;

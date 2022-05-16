import "./category.css";
import fruits from "../../../images/fruits.jpeg";
import dry from "../../../images/dry.jpeg";
import staples from "../../../images/staples.jpeg";
import species from "../../../images/species.jpeg";
import beauty from "../../../images/beauty.png";
import beverages from "../../../images/beverages.jpeg";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="background">
      <div className="category text-center p-2">
        <h1>Shop by Category</h1>
      </div>
      <div className="container">
        <div className="row categories mt-5">
          <div className="col-4 overlay">
            <Link to="/Catagory">
              <img src={fruits}></img>{" "}
              <div className="fruits text-center">
                <p>Fruits & vegetables</p>
              </div>
            </Link>
          </div>

          <div className="col-4 overlay">
            <Link to="/Catagory">
              <img src={dry}></img>
              <div className="fruits text-center">
                <p>Dry Fruits</p>
              </div>
            </Link>
          </div>
          <div className="col-4 overlay">
            <Link to="/Catagory">
              <img src={staples}></img>
              <div className="fruits text-center">
                <p>Daily Staples</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row categories mt-5">
          <div className="col-4 overlay">
            <Link to="/Catagory">
              <img src={species}></img>
              <div className="fruits text-center">
                <p>Indian Species</p>
              </div>
            </Link>
          </div>
          <div className="col-4 overlay">
            <Link to="/Catagory">
              <img src={beauty}></img>
              <div className="fruits text-center">
                <p>Beauty and Hygiene</p>
              </div>
            </Link>
          </div>
          <div className="col-4 overlay">
            <Link to="/Catagory">
              <img src={beverages}></img>
              <div className="fruits text-center">
                <p>Beverages</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="row categories mt-5 pb-5">
          <div className="col-6"></div>
          <div className="col-2 crd p-4">
            <h2 className="ms-4">
              Explore<br></br>Bank<br></br>Offers
            </h2>
          </div>
          <div className="col-1"></div>
          <div className="col-2 cad p-4">
            <h2 className="ms-4">
              Explore<br></br>Combo<br></br>Offers
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;

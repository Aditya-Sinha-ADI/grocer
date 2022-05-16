import "./fresh.css";
import fruits from "../../../images/fruits.jpeg";
const Fruits = () => {
  return (
    <div className="background pb-5">
      <div className="category text-center p-2">
        <h1>Fresh Fruits</h1>
      </div>
      <div className="container mt-5">
        <div className="row fresh">
          <div className="col-4">
            <div className="card-back pb-1">
              <img src={fruits}></img>
              <div className="label m-2">
                <h3>Fruits</h3>
                <h3>$23</h3>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card-back pb-1">
              <img src={fruits}></img>
              <div className="label m-2">
                <h3>Fruits</h3>
                <h3>$23</h3>
              </div>
            </div>
          </div>
          <div className="col-4 pb-5">
            <div className="card-back pb-1">
              <img src={fruits}></img>
              <div className="label m-2">
                <h3>Fruits</h3>
                <h3>$23</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fruits;

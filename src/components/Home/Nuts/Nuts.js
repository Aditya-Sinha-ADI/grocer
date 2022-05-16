import fruits from "../../../images/fruits.jpeg";
import "./Nuts.css";
const Nuts = () => {
  return (
    <div className="background">
      <div className="category text-center p-2">
        <h1>Necessary Nuts</h1>
      </div>
      <div className="container my-5">
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
          <div className="col-4">
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
      <div className="container my-5">
        <div className="row">
          <div className="col-4 combo">
            <h1 className="ms-4 mt-4">
              Explore Combo <br /> Packs
            </h1>
            <div className="col-8">
              <p className="ms-4 mt-4">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor
              </p>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 combo-2">
                <h1 className="ms-4 my-4">
                  Explore
                  <br /> Combo <br /> Packs
                </h1>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 combo-3">
                <h1 className="ms-4 my-4">
                  Explore
                  <br /> Combo <br /> Packs
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nuts;

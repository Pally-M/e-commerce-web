import { Link } from "react-router-dom";
import Lock from "../Assets/Name=lock-closed.png";
import "../styles/AddAddress.css";

function AddAdress() {
  return (
    <>
      <div className="ccontainers">
        <div className="bottom-ccontainer">
          <form>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Shipping name </label>
                <input type="text" id="name" placeholder="John Maker" />
              </div>
            </div>
            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Street name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="123 Plae Grond Street"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="card">
                <label htmlFor="name">City</label>
                <input type="text" id="name" placeholder="Vermont" />
              </div>
            </div>

            <div className="form-group">
              <div className="card">
                <label htmlFor="name">State/Province</label>
                <input type="text" id="name" placeholder="California" />
              </div>
            </div>

            <div className="form-group">
              <div className="card">
                <label htmlFor="name">Country</label>
                <input type="text" id="name" placeholder="United States" />
              </div>
            </div>
            <br></br>

            <div className="checkbox">
              <input type="checkbox" id="myCheckbox" name="myCheckbox" />
              <label htmlFor="myCheckbox">
                Save this as your default payment method
              </label>
            </div>

            <div className="btn5">
              <Link to="/Checkout">
                <button className="bttn5">Add Address</button>
              </Link>
            </div>

            <div className="la-line">
              <p>Back</p>
              <p id="la">
                <img src={Lock} alt=""></img>Secure Connection
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddAdress;
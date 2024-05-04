import { Button } from "antd";

import { Link } from "react-router-dom";

const HotelCard = () => {
  return (
    <div className="row hotel-card">
      <div className="col-md-4 text-center text-md-start">
        <img
          width={240}
          height={240}
          className="img-thumbnail rounded-4"
          src="https://cf.bstatic.com/xdata/images/hotel/square240/545532453.webp?k=b41cc0409e0d9a20f1b7d6c27bd66abae4dcac1208c968a71c5a77d97ab9d331&o="
          alt=""
        />
      </div>
      <div className="col-md-5 ">
        <div className="align-items-center d-flex justify-content-between">
          <h4 className="mb-0">
            <Link to="" className="text-decoration-none ">
              Long Beach Hotel
            </Link>
          </h4>
          <div className="d-flex justify-content-between align-items-center">
            <div className="hotel-star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
        <p
          className="d-flex flex-wrap gap-1 justify-content-between mb-0 mt-1 "
          style={{ fontSize: "12px" }}
        >
          <Link to="">Cox's Bazar</Link> <Link to={""}>Show on map</Link>{" "}
          <span>1.8 km from downtown</span>
          <span> Beach Nearby</span>
        </p>

        <div className="border card my-1  p-2">
          <h6 className="mb-0"> Deluxe Double Room with Balcony</h6>
          <p className="mb-0">1 king bed</p>
          <div className=" htl-features">
            <p className="mb-0"> Breakfast included</p>
            <ul>
              <li> Free cancellation </li>
              <li> No prepayment needed – pay at the property</li>
            </ul>
          </div>
          <h6 className="mb-0 room-limit">
            Only 2 rooms left at this price on our site
          </h6>
        </div>
      </div>
      <div className="col-md-3 align-self-end ">
        <div className="booking-price text-center text-md-start">
          <h6> 1 night, 2 adults</h6>
          <p> BDT 36,217 </p>
          <span>+BDT 11,264 taxes and fees</span>
        </div>
        <div className="d-flex justify-content-center justify-content-md-end mb-2 my-3 pe-2">
          <Button type="primary">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;

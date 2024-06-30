import { Link } from 'react-router-dom';
import './Offer.css';

const Offers = () => {
  return (
    <div
      className="row mx-auto "
      style={{ background: '#E7F1FE' }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="col-md-6 px-4 _offer_contents">
        <div className="bg-white rounded-3">
          <div className="_offer_contents">
            <div>
              <img
                className="img-fluid rounded-3 rounded-bottom-0 rounded-top"
                src="https://www.princess.com/content/dam/princess-headless/shorex/ports/new-york-city-new-york.jpg"
                alt=""
              />
            </div>

            <div className="ps-3">
              <h6 className=" my-2 text-secondary" style={{ fontSize: 14 }}>
                AMERICA'S CRUISE SALE
              </h6>
              <h5 className="fs-5 fw-bold my-2">Set sail from $43/night</h5>
              <p style={{ fontSize: 17 }}>
                Make your next vacation a cruise! Book now to get up to $2,000
                to spend at sea plus the absolute lowest prices, guaranteed.
              </p>
              <Link className="text-decoration-none" to={''}>
                Search Cruises{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 px-4 _offer_contents">
        <div className="bg-white rounded-3">
          <div className="_offer_contents">
            <div>
              <img
                className="img-fluid rounded-3 rounded-bottom-0 rounded-top"
                src="https://www.princess.com/content/dam/princess-headless/shorex/ports/new-york-city-new-york.jpg"
                alt=""
              />
            </div>

            <div className="ps-3">
              <h6 className=" my-2 text-secondary" style={{ fontSize: 14 }}>
                AMERICA'S CRUISE SALE
              </h6>
              <h5 className="fs-5 fw-bold my-2">Set sail from $43/night</h5>
              <p style={{ fontSize: 17 }}>
                Make your next vacation a cruise! Book now to get up to $2,000
                to spend at sea plus the absolute lowest prices, guaranteed.
              </p>
              <Link className="text-decoration-none" to={''}>
                Search Cruises{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

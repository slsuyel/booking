/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';

const Card = () => {
  const isMobile = false;

  return (
    <section
      className={`hr-content justify-content-between d-flex align-items-center why-contents ${
        isMobile ? 'stack__card ' : ''
      }`}
    >
      <div className=" row mx-auto text-black">
        <div className="col-md-6 position-relative ">
          <div className="pt-5">
            <p>Priceline VIP Rewards™ Visa® Card</p>
            <h2 className="my-3 px-1 fw-bold">
              Military & Veterans Travel Deal
            </h2>
            <p>
              AmericanForcesTravel.com is the U.S. Department of Defense
              official online leisure travel site offering exclusive travel
              deals and benefits for the military, veterans and DOD civilians.
            </p>
          </div>
          <div>
            <Link className="btn btn-primary" to="">
              Book Now
            </Link>
          </div>
          <p style={{ fontSize: '14px' }}>
            Eligibility: Active military, Guard or Reserve, U.S. Coast Guard,
            Retired Military, and all eligible MWR patrons. Entrants must be
            eligible for the Military Morale, Welfare, and Recreation (“MWR”)
            Program benefits as outlined in DoD Instruction 1015.10 and the
            COMDTINST M1710.13D.
          </p>
        </div>

        <div className="col-md-6 p-0">
          <img
            className="myImg img-fluid "
            src="https://images.ctfassets.net/sdx4pteldsvw/6nOtNGHmvWyn8lmpU0LcUj/26295a4adc90a32e8d4579f52ac6f725/aft_marketing_tout_660x480_2.jpg?w=544&h=400&fm=webp&q=80"
            alt="Heart-shaped image"
          />
        </div>
      </div>
    </section>
  );
};

export default Card;

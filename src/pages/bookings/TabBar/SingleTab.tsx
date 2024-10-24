import { useParams } from 'react-router-dom';
import FlightsTab from '../../Home/Tabs/FlightsTab';

import CarsTab from '../../Home/Tabs/CarsTab';

import BookingSearch from '../BookingSearch/BookingSearch';

const SingleTab = () => {
  const { service } = useParams();

  let tabContent;
  let headingMessage;

  if (service === 'flights') {
    tabContent = <FlightsTab />;
    headingMessage = 'Save more on your next flight';
  } else if (service === 'hotels') {
    tabContent = <BookingSearch />;
    headingMessage = 'Save more on your next hotel';
  } else if (service === 'cars') {
    tabContent = <CarsTab />;
    headingMessage = 'Save more on your next rental car';
  } else {
    tabContent = null;
    headingMessage = '';
  }

  return (
    <>
      <div
        className="hr_content_slick container mt-5 bg_grad"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="col-md-10 mx-auto text-dark py-3">
          <h5 className="ms-5 fs-5 my-3" style={{ color: '#0053a3' }}>
            {headingMessage}
          </h5>
          {tabContent}
        </div>
      </div>
      {/* <div className="text-center mt-5 pt-4">coming soon</div> */}
    </>
  );
};

export default SingleTab;

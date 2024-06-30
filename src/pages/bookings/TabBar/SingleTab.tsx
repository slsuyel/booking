import { useParams } from 'react-router-dom';
import FlightsTab from '../../Home/Tabs/FlightsTab';
import HotelsTab from '../../Home/Tabs/HotelsTab';
import CarsTab from '../../Home/Tabs/CarsTab';

const SingleTab = () => {
  const { service } = useParams();

  let tabContent;
  let headingMessage;

  if (service === 'flights') {
    tabContent = <FlightsTab />;
    headingMessage = 'Save more on your next flight';
  } else if (service === 'hotels') {
    tabContent = <HotelsTab />;
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
      <div className="hr_content_slick ">
        <div className="col-md-10 mx-auto text-dark">
          <h2 className="ms-5 my-3">{headingMessage}</h2>
          {tabContent}
        </div>
      </div>
      <div className="text-center mt-5 pt-4">coming soon</div>
    </>
  );
};

export default SingleTab;

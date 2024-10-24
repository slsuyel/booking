// import RecentSearch from './../bookings/RecentSearch/RecentSearch';

import Offers from '../bookings/Offers/Offers';
import HorizontalScroll from '../../components/ui/HorizontalScroll/HorizontalScroll';
import HeroAnimationSlider from '../../components/ui/HeroAnimationSlider/HeroAnimationSlider';
import TimeCardScroll from '../../components/ui/TimeCardScroll/TimeCardScroll';
import SearchTab from './SearchTab';

const Home = () => {
  return (
    <>
      <div className=" bg-body-secondary py-5">
        <div className=" col-md-5 mx-auto mt-4">
          <SearchTab />
        </div>
      </div>

      <Offers />
      <HeroAnimationSlider />

      <HorizontalScroll />

      <TimeCardScroll />
    </>
  );
};

export default Home;

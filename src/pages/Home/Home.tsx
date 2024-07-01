import RecentSearch from './../bookings/RecentSearch/RecentSearch';

import Offers from '../bookings/Offers/Offers';
import HorizontalScroll from '../../components/ui/HorizontalScroll/HorizontalScroll';
import HeroAnimationSlider from '../../components/ui/HeroAnimationSlider/HeroAnimationSlider';
import TimeCardScroll from '../../components/ui/TimeCardScroll/TimeCardScroll';

const Home = () => {
  return (
    <>
      <RecentSearch />

      <HeroAnimationSlider />

      <HorizontalScroll />

      <TimeCardScroll />

      <Offers />
    </>
  );
};

export default Home;

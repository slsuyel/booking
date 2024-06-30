import SearchTab from './SearchTab';
import RecentSearch from './../bookings/RecentSearch/RecentSearch';

import Offers from '../bookings/Offers/Offers';
import HorizontalScroll from '../../components/ui/HorizontalScroll/HorizontalScroll';

const Home = () => {
  return (
    <>
      <div
        className=" row mx-auto position-relative py-5 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <SearchTab />
        <div className="col-md-5 p-0 ">
          <img
            className="banner_img_p"
            src="https://us.canvasartrocks.com/cdn/shop/products/Travel_the_world_monument_Wall_Mural_Wallpaper_a_1400x.jpg?v\u003d1571715164"
            alt=""
          />
        </div>
      </div>

      <RecentSearch />
      <br />
      <br />
      <HorizontalScroll />
      <br />
      <br />
      <br />
      <Offers />
      <br />
      <br />
    </>
  );
};

export default Home;

import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import { GoToTop } from 'go-to-top-react';
import PromoMessage from '../ui/PromoMessage';
import { useEffect } from 'react';
import AOS from 'aos';
import SearchTab from '../../pages/Home/SearchTab';
const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ScrollToTop>
      <PromoMessage />
      <main className="">
        <div className="bg_grad ">
          <Header />
          {location.pathname == '/' && (
            <div
              className=" row mx-auto position-relative py-5 container"
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
          )}
        </div>

        <div style={{ minHeight: '70vh' }}>
          <Outlet />
        </div>
        <GoToTop />
        <div className="position-relative " style={{ background: '#0c3545' }}>
          <Footer />
        </div>
      </main>
    </ScrollToTop>
  );
};

export default MainLayout;

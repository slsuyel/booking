import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import { GoToTop } from 'go-to-top-react';
import PromoMessage from '../ui/PromoMessage';
import { useEffect } from 'react';
import AOS from 'aos';
const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ScrollToTop>
      <PromoMessage />
      <main className=" container">
        <Header />

        <div style={{ minHeight: '70vh' }}>
          <Outlet />
        </div>
        <GoToTop />
        <div className="position-relative ">
          {' '}
          <Footer />
        </div>
      </main>
    </ScrollToTop>
  );
};

export default MainLayout;

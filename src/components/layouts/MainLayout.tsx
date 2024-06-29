import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import { GoToTop } from 'go-to-top-react';

const MainLayout = () => {
  return (
    <ScrollToTop>
      <main className=" container">
        <Header />

        <div style={{ minHeight: '100vh' }}>
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

import { Outlet } from 'react-router-dom';
import ScrollToTop from '../../utils/ScrollToTop';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import { GoToTop } from 'go-to-top-react';

const MainLayout = () => {
  return (
    <ScrollToTop>
      <main className="position-relative">
        <Header />
        <div style={{ minHeight: '100vh' }}>
          <Outlet />
        </div>
        <GoToTop />
        <Footer />
      </main>
    </ScrollToTop>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import Header from "./../ui/Header";
import Footer from "./../ui/Footer";
import { GoToTop } from "go-to-top-react";

const MainLayout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
      <GoToTop />
    </ScrollToTop>
  );
};

export default MainLayout;

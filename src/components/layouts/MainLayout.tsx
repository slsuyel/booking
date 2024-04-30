import { Outlet } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";
import Header from "./../ui/Header";
import Footer from "./../ui/Footer";
import { GoToTop } from "go-to-top-react";
import { Container } from "react-bootstrap";
const MainLayout = () => {
  return (
    <Container>
      <ScrollToTop>
        <Header />
        <Outlet />
        <Footer />
        <GoToTop />
      </ScrollToTop>
    </Container>
  );
};

export default MainLayout;

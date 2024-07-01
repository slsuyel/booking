import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo_example.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import Hamburger from 'hamburger-react';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // Updated state name to camelCase

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsFixed(offset > 0);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    { id: 1, label: 'Login', link: '/login' },
    { id: 2, label: 'Register', link: '/register' },
    { id: 3, label: 'Hotels', link: '/b/hotels' },
    { id: 5, label: 'Flight', link: '/b/flights' },
    { id: 4, label: 'Cars', link: '/b/cars' },
  ];

  const onClose = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed={isFixed ? undefined : undefined}
        className={` p-0 py-2 pcln-global-heade  ${isFixed ? '' : ''} ${
          isMobile ? 'd-none' : 'd-block'
        }`}
      >
        <Container>
          <Navbar.Brand href="/" className="p-0">
            <img src={logo} alt="" width={200} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" fs-5 fw-semibold gap-3"
          >
            {menuItems.map(item => (
              <NavLink
                key={item.id}
                to={item.link}
                className="nav-link  px-2 fs-6 text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </Navbar.Collapse>
          <>
            <button className="fs-6 item_tab_btn mx-1 text-uppercase">
              <i className="fa-solid fa-circle-info"></i> Help
            </button>
            <button className="fs-6 item_tab_btn mx-1 text-uppercase">
              <i className="fa-solid fa-magnifying-glass"></i> Find My Trip
            </button>
          </>
        </Container>
      </Navbar>

      {isMobile && (
        <>
          <div className="align-items-center d-flex justify-content-between p-2">
            <Navbar.Brand href="/" className="p-1">
              <img src={logo} alt="" width={120} />
            </Navbar.Brand>
            <Hamburger toggled={mobileMenu} toggle={setMobileMenu} />
          </div>

          <Drawer placement="left" onClose={onClose} open={mobileMenu}>
            {menuItems.map(item => (
              <NavLink key={item.id} to={item.link} className="nav-link fs-4">
                {item.label}
              </NavLink>
            ))}
            <>
              <button className="fw-bold item_tab_btn mx-1 text-uppercase">
                <i className="fa-solid fa-circle-info"></i> Help
              </button>
              <button className="fw-bold item_tab_btn mx-1 text-uppercase">
                <i className="fa-solid fa-magnifying-glass"></i> Find My Trip
              </button>
            </>
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;

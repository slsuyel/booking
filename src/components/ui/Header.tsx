/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/logo_example.png';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsFixed(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    {
      name: 'Who we are',
      link: 'https://rahmaniatravel.com/who-we-are',
    },
    {
      name: 'Umrah',
      subMenu: [
        {
          name: 'Upcoming Umrah Packages',
          subMenu: [
            {
              name: 'October package 2024',
              link: 'https://rahmaniatravel.com/umrah/upcoming/october-package-2024',
            },
            {
              name: 'Summer package 2024',
              link: 'https://rahmaniatravel.com/umrah/upcoming/summer-package-2024',
            },
            {
              name: 'September package 2024',
              link: 'https://rahmaniatravel.com/umrah/upcoming/september-package-2024',
            },
          ],
        },
        {
          name: 'Popular Umrah Packages',
          subMenu: [
            {
              name: '7 days gold package',
              link: 'https://rahmaniatravel.com/umrah/popular/7-days-gold-package',
            },
            {
              name: '10 days standard package',
              link: 'https://rahmaniatravel.com/umrah/popular/10-days-standard-package',
            },
            {
              name: '14 days premium package',
              link: 'https://rahmaniatravel.com/umrah/popular/14-days-premium-package',
            },
            {
              name: '21 days gold package',
              link: 'https://rahmaniatravel.com/umrah/popular/21-days-gold-package',
            },
          ],
        },
      ],
    },
    {
      name: 'Hajj',
      link: 'https://rahmaniatravel.com/hajj',
    },
    {
      name: 'Umrah from',
      subMenu: [
        {
          name: 'California',
          link: 'https://rahmaniatravel.com/umrah-from/california',
        },
        {
          name: 'Chicago',
          link: 'https://rahmaniatravel.com/umrah-from/chicago',
        },
        {
          name: 'Dallas',
          link: 'https://rahmaniatravel.com/umrah-from/dallas',
        },
        {
          name: 'Detroit',
          link: 'https://rahmaniatravel.com/umrah-from/detroit',
        },
        {
          name: 'Houston',
          link: 'https://rahmaniatravel.com/umrah-from/houston',
        },
        {
          name: 'Los Angeles',
          link: 'https://rahmaniatravel.com/umrah-from/los-angeles',
        },
        {
          name: 'New York',
          link: 'https://rahmaniatravel.com/umrah-from/new-york',
        },
        {
          name: 'Washington DC',
          link: 'https://rahmaniatravel.com/umrah-from/washington-dc',
        },
        {
          name: 'Buffalo',
          link: 'https://rahmaniatravel.com/umrah-from/buffalo',
        },
        {
          name: 'Florida',
          link: 'https://rahmaniatravel.com/umrah-from/florida',
        },
      ],
    },
    {
      name: 'Learning & Success',
      subMenu: [
        {
          name: 'The Kaba’h',
          link: 'https://rahmaniatravel.com/learning-success/the-kabah',
        },
        {
          name: 'Masjid Al Haram',
          link: 'https://rahmaniatravel.com/learning-success/masjid-al-haram',
        },
        {
          name: 'Masjid Al Nabawi',
          link: 'https://rahmaniatravel.com/learning-success/masjid-al-nabawi',
        },
        {
          name: 'Preparation',
          link: 'https://rahmaniatravel.com/learning-success/preparation',
        },
        {
          name: 'Umrah Guide',
          link: 'https://rahmaniatravel.com/learning-success/umrah-guide',
        },
        {
          name: 'Travel Guide',
          link: 'https://rahmaniatravel.com/learning-success/travel-guide',
        },
        {
          name: 'Hajj guide',
          link: 'https://rahmaniatravel.com/learning-success/hajj-guide',
        },
        {
          name: 'The Prophet’s Hajj',
          subMenu: [
            {
              name: 'Introduction',
              link: 'https://rahmaniatravel.com/learning-success/the-prophets-hajj/introduction',
            },
            {
              name: 'The Journey to Makkah',
              link: 'https://rahmaniatravel.com/learning-success/the-prophets-hajj/journey-to-makkah',
            },
            {
              name: 'Entering Makkah & Umrah',
              link: 'https://rahmaniatravel.com/learning-success/the-prophets-hajj/entering-makkah-umrah',
            },
            {
              name: 'Days of Hajj',
              link: 'https://rahmaniatravel.com/learning-success/the-prophets-hajj/days-of-hajj',
            },
            {
              name: 'The Return Journey',
              link: 'https://rahmaniatravel.com/learning-success/the-prophets-hajj/return-journey',
            },
          ],
        },
        {
          name: 'Maps',
          link: 'https://rahmaniatravel.com/learning-success/maps',
        },
      ],
    },
  ];

  const renderMenuItems = (items: any) => {
    return items.map((item: any, index: any) => {
      if (item.subMenu) {
        return (
          <NavDropdown
            key={index}
            className="nav_itm_a"
            title={item.name}
            id={`nav-dropdown-${index}`}
          >
            {renderMenuItems(item.subMenu)}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link
            target="_blank"
            className="nav_itm_a"
            as={NavLink}
            to={item.link}
            key={index}
          >
            {item.name}
          </Nav.Link>
        );
      }
    });
  };

  return (
    <Navbar
      expand="lg"
      fixed={isFixed ? 'top' : undefined}
      className={`p-0 py-3 custom-navbar ${
        isFixed ? 'navbar-scrolled mx-auto' : ''
      }`}
    >
      <Container>
        <Navbar.Brand href="/" className="p-0">
          <img src={logo} alt="Logo" width={180} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="fs-5 fw-semibold gap-4"
        >
          <Nav className="me-auto">{renderMenuItems(menuItems)}</Nav>
        </Navbar.Collapse>

        <div className="header-buttons d-flex justify-content-center">
          <Link
            to={`/b/flights`}
            className="text-decoration-none fs-6 header-btn mx-1 text-uppercase"
          >
            <i className="fa-solid fa-plane-circle-check"></i> Flight Ticket
          </Link>
          <Link
            to={`/b/hotels`}
            className="text-decoration-none fs-6 header-btn mx-1 text-uppercase"
          >
            <i className="fa-solid fa-magnifying-glass"></i> Hotel booking
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;

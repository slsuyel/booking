import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="p-3 pt-4 text-light rounded-top"
        style={{ background: '#0c3545' }}
      >
        <div className="row footer_all_service">
          <div className="col-md-3 ">
            <h5>Our Customers</h5>
            <ul className="list-unstyled ">
              <li>
                <Link to="/">
                  <i className="fas fa-users me-2"></i>
                  Travel Agents and Experts
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-users-cog me-2"></i>
                  Employee & Member Benefits
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-user-friends me-2"></i>
                  Travel Influencers
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-user me-2"></i>
                  Travelers
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Why Booktickets24.com</h5>
            <ul className="list-unstyled ">
              <li>
                <Link to="/">
                  <i className="fas fa-store-alt me-2"></i>
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-laptop-code me-2"></i>
                  Travel Tech & Innovation
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-info-circle me-2"></i>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Leadership Team</h5>
            <ul className="list-unstyled ">
              <li>
                <Link to="/">
                  <i className="fas fa-newspaper me-2"></i>
                  Press Releases
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-handshake me-2"></i>
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fas fa-newspaper me-2"></i>
                  In the News
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled ">
              <li>
                <Link to="/">
                  <i className="fas fa-briefcase me-2"></i>
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className=" footer_section ">
        <div className="absolute cloud_left">
          <ul className="inline-list">
            <li className="cloud" />
            <li className="cloud" />
            <li className="cloud" />
          </ul>
        </div>
        <div className="absolute cloud_right">
          <ul className="inline-list">
            <li className="cloud" />
            <li className="cloud" />
            <li className="cloud" />
          </ul>
        </div>
        <span className="absolute sun" />
        <div className="absolute landscape left_m">
          <span className="grass gl">
            <span className="land_tree leftt-gras">
              <ul className="inline-list">
                <li className="t_grass" />
                <li className="t_grass" />
                <li className="t_grass" />
              </ul>
            </span>
          </span>
          <span className="absolute tree1" />
          <span className="absolute tree2" />
        </div>
        <div className="absolute landscape max_right">
          <span className="grass">
            <span className="land_tree">
              <ul className="inline-list">
                <li className="t_grass" />
                <li className="t_grass" />
                <li className="t_grass" />
              </ul>
            </span>
          </span>
          <div className="mountain">
            <div className="r-mountain" />
            <ul className="snow inline-list">
              <li />
              <li />
              <li />
            </ul>
          </div>
        </div>
        <div className="absolute boat">
          <ul className="no-bullet">
            <ul className="no-bullet fume">
              <li className="fume4" />
              <li className="fume3" />
              <li className="fume2" />
              <li className="fume1" />
            </ul>
            <li className="smokestack" />
            <li className="white-body">
              <ul className="windows inline-list">
                <li className="circle" />
                <li className="circle" />
                <li className="circle" />
              </ul>
            </li>
            <li className="boat-body" />
          </ul>
        </div>
        <div className="absolute dark-back" />
        <div className="absolute plane">
          <ul className="no-bullet">
            <li className="plane-body">
              <ul className="windows inline-list">
                <li className="circle" />
                <li className="circle" />
                <li className="circle" />
                <li className="circle" />
                <li className="circle" />
              </ul>
            </li>
            <li className="wing1" />
            <li className="wing1 flipwing" />
            <li className="absolute teal" />
          </ul>
        </div>
        <div className="absolute sea">
          <span className="wave1" />
          <span className="wave2" />
          <span className="wave3" />
          <span className="wave4" />
        </div>
      </section>
    </>
  );
};

export default Footer;

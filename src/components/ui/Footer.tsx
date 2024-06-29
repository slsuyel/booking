import './Footer.css';
const Footer = () => {
  return (
    <>
      <div className="animated-gradient-background p-3 py-5 text-light">
        <div className="row">
          <div className="col-md-3">
            <h5>Our Customers</h5>
            <ul className="list-unstyled ps-4">
              <li>Travel Agents and Experts</li>
              <li>Employee & Member Benefits</li>
              <li>Travel Influencers</li>
              <li>Travelers</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Why Mondee</h5>
            <ul className="list-unstyled ps-4">
              <li>Meet Abhi</li>
              <li>Marketplace</li>
              <li>Travel Tech & Innovation</li>
              <li>About</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Leadership Team</h5>
            <ul className="list-unstyled ps-4">
              <li>Press Releases</li>
              <li>Partners</li>
              <li>In the News</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled ps-4">
              <li>Careers</li>
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

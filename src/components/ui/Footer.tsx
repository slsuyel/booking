const Footer = () => {
  return (
    <footer className="ct-footer_rrr text-white py-5">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-md-3 my-1">
            <img
              width={250}
              src="https://rahmaniatravel.com/wp-content/uploads/2024/04/Rahmania-Logo-ai-2.png"
              alt=""
            />
            <p
              className=""
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              We are honored to serve you for more than 22 years for all kind of
              Air Tickets and Visa Processing.
            </p>

            {/* Social Media Links */}
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Umrah Package List */}
          <div className="col-md-3 my-1">
            <h5 className="text-uppercase mb-3">Umrah Package List</h5>
            <ul className="list-unstyled">
              <li>October package 2024</li>
              <li>Summer package 2024</li>
              <li>September package 2024</li>
              <li>7 days gold package</li>
              <li>10 days standard package</li>
              <li>14 days premium package</li>
              <li>21 days gold package</li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 my-1">
            <h5 className="text-uppercase mb-3">Our Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Flight Ticket
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Hotel booking
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Who we are
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Get a Quote
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Privacy notice
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-3 my-1">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              37-15, 73rd Street, Suite 203, Bangladesh Plaza, Jackson Heights,
              NY 11372
            </p>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              <i className="fas fa-phone"></i> 718-205-3270
            </p>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              <i className="fas fa-phone"></i> 718-205-2677
            </p>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              <i className="fas fa-phone"></i> 646-322-1654
            </p>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp: 917-502-4969
            </p>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              <i className="fas fa-envelope"></i>{' '}
              rahmaniatravelservicesny@gmail.com
            </p>
            <p
              style={{
                fontSize:
                  'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.156), 16px)',
              }}
            >
              <i className="fas fa-envelope"></i> rahmaniatravel@yahoo.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

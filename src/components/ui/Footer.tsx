const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About</h5>
            <p>
              This project aims to develop a comprehensive Food Distribution and
              Supplies Management System to efficiently manage the distribution
              of food and supplies to those in need.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Our Services</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <span className="text-muted">
          Developed by{" "}
          <a target="_blank" href="https://zsi.ai/">
            ZSI.Ai
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;

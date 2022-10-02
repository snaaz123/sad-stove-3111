import "./Footer.css";
function Footer(){

    return (
      <div className="main-main-footer">
        <div className="main-footer">
          <div>
            <h1 className="footer-head">POPULAR LOCATIONS</h1>
            <p>Kolkata</p>
            <p>Mumbai</p>
            <p>Chennai</p>
            <p>Pune</p>
          </div>
          <div>
            <h5 className="footer-head">TRENDING LOCATIONS</h5>
            <p>Bhubaneshwar</p>
            <p> Hyderabad</p>
            <p>Chandigarh</p>
            <p>Nashik</p>
          </div>
          <div>
            <h5 className="footer-head">ABOUT US</h5>
            <p>Group</p>
            <p>Careers</p>
            <p>Contact Us</p>
            <p>OLXPeople</p>
            <p>Waah Jobs</p>
          </div>
          <div>
            <h5 className="footer-head">OLX</h5>
            <p>Help</p>
            <p>Sitemap</p>
            <p>Legal & Privacy information</p>
            <p>Blog</p>
          </div>
          <div>
            <div>
              <h5 className="footer-head">FOLLOW US</h5>
            </div>

            <div className="scl-icon">
              <div>
                <a href="https://www.facebook.com/olxindia/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6422/6422199.png"
                    alt=""
                  />
                </a>
              </div>

              <div>
                <a href="https://www.instagram.com/olx_india/">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6422/6422200.png"
                    alt=""
                  />
                </a>
              </div>

              <div>
                <a href="https://twitter.com/OLX_India">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/6422/6422210.png"
                    alt=""
                  />
                </a>
              </div>

              <div>
                <a href="https://www.youtube.com/user/OLXInTv">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3917/3917707.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footer;
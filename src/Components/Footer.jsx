import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-list">
          <div className="footer-card">
            <div className="nav-logo">
              <img
                src="https://www.uptodd.com/images/newWebsite/footer-logo.webp"
                onError="this.onError=null; this.src='/images/newWebsite/footer-logo.png'"
                alt="UpTodd - Nurturing Baby Genius"
              />
            </div>
            <div className="social-media-icons">
              <a
                href="https://www.facebook.com/uptodd/"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://www.uptodd.com/images/newWebsite/facebook.svg"
                  alt="UpTodd - Nurturing Baby Genius"
                />
              </a>
              <a
                href="https://www.instagram.com/uptoddler/?hl=en"
                rel="noreferrer"
                target="_blank">
                <img
                  src="https://www.uptodd.com/images/newWebsite/insta.svg"
                  rel="noreferrer"
                  alt="UpTodd - Nurturing Baby Genius"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCsFXOLtW2VeaFgXK-VxLC5g"
                rel="noreferrer"
                target="_blank">
                <img
                  src="https://www.uptodd.com/images/newWebsite/youtube.svg"
                  alt="UpTodd - Nurturing Baby Genius"
                />
              </a>
              <a
                href="https://in.linkedin.com/company/uptodd"
                target="_blank"
                rel="noreferrer">
                <img
                  src="https://www.uptodd.com/images/newWebsite/linkedin.svg"
                  alt="UpTodd - Nurturing Baby Genius"
                />
              </a>
            </div>
          </div>
          <div className="footer-card">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about" target="_blank">
                  About us
                </a>
              </li>
              <li>
                <a href="/careers" target="_blank">
                  Careers
                </a>
              </li>
            </ul>
            <li>
              <a href="/contact-us" target="_blank">
                Contact us
              </a>
            </li>
          </div>
          <ul>
            <div className="footer-card">
              <h3>Community</h3>
              <li>
                <a
                  href="https://blog.uptodd.com/parenting-stories/"
                  rel="noreferrer"
                  target="_blank">
                  Share your journey
                </a>
              </li>
              <li>
                <a
                  href="https://blog.uptodd.com/"
                  target="_blank"
                  rel="noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <a href="/research" target="_blank">
                  Research Hub
                </a>
              </li>
            </div>
          </ul>
          <div className="footer-card">
            <ul>
              <h3>Program</h3>

              <li>
                <a href="/personalised_premium_program" target="_blank">
                  Personalised Premium Program
                </a>
              </li>
              <li>
                <a
                  id="homeScreenToSuperDailyViaFooter"
                  href="/super_daily_app_program"
                  target="_blank">
                  Super Daily Program
                </a>
              </li>
              {/* <!--<li><a href="/subscription-boxes" target="_blank">Uptodd Subscritptions box</a></li>--> */}
              {/* <!--<li><a href="/intro-parenting-program" target="_blank">Free intro Program</a></li>--> */}
            </ul>
          </div>
          <div className="footer-card">
            <h3>Download App now</h3>
            <div className="application-links">
              <a
                href="https://play.google.com/store/apps/details?id=com.uptodd.uptoddapp&amp;hl=en_IN&amp;gl=US"
                rel="noreferrer"
                target="_blank">
                <img
                  src="https://www.uptodd.com/images/newWebsite/googleplay.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/googleplay.png'"
                  alt="UpTodd - Nurturing Baby Genius"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/uptodd/id1558333792"
                rel="noreferrer"
                target="_blank">
                <img
                  src="https://www.uptodd.com/images/newWebsite/appstore.webp"
                  onError="this.onError=null; this.src='/images/newWebsite/appstore.png'"
                  alt="UpTodd - Nurturing Baby Genius"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h4>
            © 2024 All Rights Reserved
            <span>
              <a href="/privacy-policy" target="_blank">
                Privacy policy
              </a>
            </span>
            <span>
              <a href="/terms-conditions" target="_blank">
                Terms and Conditions
              </a>
            </span>
          </h4>
          <img
            src="https://www.uptodd.com/images/newWebsite/line.svg"
            alt="UpTodd - Nurturing Baby Genius"
          />
          <p>
            Disclaimer: The information provided on this website is for general
            purposes only. We do not guarantee its accuracy or suitability for
            any specific use. Use it at your own discretion.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open');
  };
  
  return (
    <div className={`header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container-nav">
        <h1 className="header-container-logo">
          <svg className="logoUser" width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M79.3058 25.8169C79.3058 20.1774 76.5741 15.7274 71.3532 15.7274C66.1102 15.7274 62.938 20.1774 62.938 25.7728C62.938 32.4037 66.6829 35.7521 72.0581 35.7521C74.6796 35.7521 76.6622 35.1573 78.1602 34.3202V29.9143C76.6622 30.6633 74.9439 31.126 72.763 31.126C70.6262 31.126 68.7317 30.377 68.4893 27.7775H79.2617C79.2617 27.4911 79.3058 26.3456 79.3058 25.8169ZM68.4233 23.7241C68.4233 21.2348 69.9433 20.1994 71.3311 20.1994C72.6749 20.1994 74.1068 21.2348 74.1068 23.7241H68.4233Z" fill="#FFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M54.4345 15.7274C52.2756 15.7274 50.8877 16.7408 50.1167 17.4457L49.8303 16.0799H44.9839V41.7661L50.4912 40.5986L50.5132 34.3643C51.3063 34.937 52.4739 35.7521 54.4124 35.7521C58.3557 35.7521 61.9465 32.5799 61.9465 25.5966C61.9244 19.2081 58.2896 15.7274 54.4345 15.7274ZM53.1127 30.9056C51.813 30.9056 51.0419 30.443 50.5132 29.8703L50.4912 21.6974C51.064 21.0585 51.857 20.6179 53.1127 20.6179C55.1174 20.6179 56.5052 22.8649 56.5052 25.7508C56.5052 28.7027 55.1394 30.9056 53.1127 30.9056Z" fill="#FFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M37.4057 14.4277L42.935 13.2381V8.76611L37.4057 9.93367V14.4277Z" fill="#FFF"/>
            <path d="M42.935 16.1019H37.4057V35.3776H42.935V16.1019Z" fill="#FFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M31.4795 17.7321L31.1271 16.1019H26.3687V35.3776H31.8761V22.3142C33.1758 20.6179 35.3787 20.9263 36.0616 21.1686V16.1019C35.3567 15.8375 32.7793 15.3529 31.4795 17.7321Z" fill="#FFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M20.465 11.3215L15.0899 12.467L15.0679 30.1125C15.0679 33.3729 17.5131 35.7741 20.7735 35.7741C22.5799 35.7741 23.9016 35.4436 24.6286 35.0471V30.5751C23.9237 30.8615 20.443 31.8749 20.443 28.6145V20.7941H24.6286V16.1019H20.443L20.465 11.3215Z" fill="#FFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.57342 21.6974C5.57342 20.8383 6.27836 20.5078 7.44592 20.5078C9.12015 20.5078 11.235 21.0145 12.9092 21.9177V16.7408C11.0808 16.0138 9.27435 15.7274 7.44592 15.7274C2.97396 15.7274 0 18.0626 0 21.9618C0 28.0418 8.37115 27.0726 8.37115 29.694C8.37115 30.7074 7.48998 31.0378 6.25633 31.0378C4.4279 31.0378 2.09279 30.2888 0.242322 29.2755V34.5185C2.29105 35.3996 4.36181 35.7742 6.25633 35.7742C10.8384 35.7742 13.9886 33.5051 13.9886 29.5619C13.9666 22.9971 5.57342 24.1647 5.57342 21.6974Z" fill="#FFF"/>
          </svg>
        </h1>
        <div className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <nav className="header-nav nav-list-item">
            <ul className="nav-list-item">
              <li className="nav-item">Products</li>
              <li className="nav-item">Solutions</li>
              <li className="nav-item">Developers</li>
              <li className="nav-item">Resources</li>
              <li className="nav-item">Pricing</li>
            </ul>
          </nav>
        </div>
        <div className="header-sign-btn-container">
          <div className="header-sign-btn">
            <div className="header-sign-in">
              <div className="header-login">
                <a href="#" className="login-button">
                  Sign in
                  <svg className="hover-arrow"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true">
                    <g fillRule="evenodd">
                      <path className="hover-arrow_linePath" d="M0 5h5"></path>
                      <path className="hover-arrow_tipPath" d="M1 1l4 4-4 4"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="header-btn">
              <a href="#" className="header-btn-arrow-right">
                <span> Contact sales </span>
                <svg className="hover-arrow"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true">
                    <g fillRule="evenodd">
                      <path className="hover-arrow_linePath" d="M0 5h5"></path>
                      <path className="hover-arrow_tipPath" d="M1 1l4 4-4 4"></path>
                    </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header; 
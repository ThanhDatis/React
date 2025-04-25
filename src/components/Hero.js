import React from 'react';
import Canvas from './Canvas';

const Hero = () => {
  return (
    <>
      <div className="section-background">
        <div className="hero-section-background">
          <Canvas />
        </div>
      </div>
      <div className="section-container">
        <div className="section-container-layout">
          <div className="column-1-title">
            <header className="header-caption-c">
              <div className="caption-date-describe">
                <div className="caption-date">
                  <span className="caption-date-title caption-link">
                    <span>
                      Sessions 2025&nbsp;·&nbsp;May&nbsp;&nbsp;6-8
                      <span className="caption-separator">&nbsp;·&nbsp;</span>
                      <a className="caption-link-register" href="#">
                        Last chance to register&nbsp;
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
                    </span>
                  </span>
                </div>
              </div>
              <h1 className="header-caption-title">
                Financial infrastructure to grow your revenue
              </h1>
              <div className="describe-body">
                Join the millions of companies that use Stripe to accept payments online and in person, 
                embed financial services, power custom revenue models, 
                and build a more profitable business.
              </div>
              <div className="email-input-c">
                <div className="email-input-c-b">
                  <input name="Email address" type="email" className="email-input" placeholder="Email address" />
                  <a href="#" className="input-btn-arrow-right">
                    <span className="input-btn-title"> Start now </span>
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
            </header>
          </div>
          <div className="column-2-title">
            <div className="col-2-image">
              <img src={require('../assets/images/anh-mau.jpg')} alt="Ảnh minh họa" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 
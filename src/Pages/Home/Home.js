import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import banner1 from '../../images/main-banner.jpg';
import catbanner from '../../images/catbanner-01.jpg';
import catbanner2 from '../../images/catbanner-02.jpg';
import catbanner3 from '../../images/catbanner-03.jpg';
import catbanner4 from '../../images/catbanner-04.jpg';
import service1 from '../../images/service.png';
import service2 from '../../images/service-02.png';
import service3 from '../../images/service-03.png';
import service4 from '../../images/service-04.png';
import service5 from '../../images/service-05.png';
import camera from '../../images/camera.jpg';
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  className="img-fluid rounded-3"
                  src={banner1}
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4> Supper Charged for pros.</h4>
                  <h5>Ipod S13+ pro</h5>
                  <p>From $999.00 or $41.363/mo.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src={catbanner}
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Supper Charged for pros.</h4>
                    <h5>Ipod S13+ pro</h5>
                    <p>From $999.00 or $41.363/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src={catbanner2}
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Supper Charged for pros.</h4>
                    <h5>Ipod S13+ pro</h5>
                    <p>From $999.00 or $41.363/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src={catbanner3}
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Supper Charged for pros.</h4>
                    <h5>Ipod S13+ pro</h5>
                    <p>From $999.00 or $41.363/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src={catbanner4}
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4> Supper Charged for pros.</h4>
                    <h5>Ipod S13+ pro</h5>
                    <p>From $999.00 or $41.363/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------  */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service1} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From All orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2} alt="services" />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop Within Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service5} alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------  */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src={camera} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

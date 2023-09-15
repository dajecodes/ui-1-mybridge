import "../../styles/layout/Footer.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="footer-custome container-fluid"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="row p-5 d-flex justify-content-around flex-wrap ">
          <div className="col-lg-3">
            <img
              src="https://s3-alpha-sig.figma.com/img/2804/d996/05ccf75e276a30c5030dc0a2c7e2f877?Expires=1695600000&Signature=GWQ~CSO~MZBBMEtb7~NF2kjsAWTvDyeFjoJ2xf4D-v1ctCvxQOS~7BcPJSEFtfoMtKFRo6Zrp9yhduebGDX7WbEsjlysmKZ1b7DxWqactBgRvjPag7O~i3OSS3gKmjH9MHhQoAhf3FgBPWybN9h~ZO3OyAGzOjsKhtGkLDKikCloZJTyb-rL~ouCLe27Xr35gxh2g-7m8t8oFysG27Nr52S9-UVbYFkzvA9ILmVxCJmvjUQcxj3UhtJqDrqikcsVCVCUTeVhJ~nBe0lYfwn7Jcro8k4jpWqeZedRlpKkHXk8xfLn3R-TvLAiIDKvjDFIgNaaofQE2eQlYGmb11IRzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              width="25%"
            />

            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="col-lg-2">
            <h2 className="text-white fs-3 mb-5">Quick Links</h2>
            <ul>
              <li>
                <a
                  className="text-decoration-none text-white pb-5"
                  href="www.test.lk"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white mb-3"
                  href="www.test.lk"
                >
                  Abouts Us
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white mb-3"
                  href="www.test.lk"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white mb-3"
                  href="www.test.lk"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white mb-3"
                  href="www.test.lk"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white mb-3"
                  href="www.test.lk"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h2 className="text-white fs-3 mb-5">Get in Touch</h2>

            <div className="d-flex justify-content-start my-3">
              <img src="/assets/phone.svg" alt="" />
              <span className="text-white ms-4">+94 70 113 7034</span>
            </div>
            <div className="d-flex justify-content-start my-3">
              <img src="/assets/mail.svg" alt="" />
              <span className="text-white ms-4">example@gmail.com</span>
            </div>
            <div className="d-flex justify-content-start my-3">
              <img src="/assets/map-pin.svg" alt="" />
              <span className="text-white ms-4">
                250 Halderman Rd, West Alexandria, OH, 45381
              </span>
            </div>
          </div>
          <div className="col-lg-3 ">
            <h2 className="text-white fs-3 mb-5">Social Media</h2>
            <div className="row">
              <a href="www.test.lk" className="g-2 sm-icon">
                <img
                  className="img-fluid"
                  src="/assets/facebook.svg"
                  alt=""
                  width="30"
                  height="30"
                />
              </a>
              <a href="www.test.lk" className="g-2 sm-icon">
                <img
                  className="img-fluid"
                  src="/assets/twitter.svg"
                  alt=""
                  width="30"
                  height="30"
                />
              </a>
              <a href="www.test.lk" className="g-2 sm-icon">
                <img
                  className="img-fluid"
                  src="/assets/instagram.svg"
                  alt=""
                  width="30"
                  height="30"
                />
              </a>
              <a href="www.test.lk" className="g-2 sm-icon">
                <img
                  className="img-fluid"
                  src="/assets/linkedin.svg"
                  alt=""
                  width="30"
                  height="30"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="containeer-fluid bg-warning text-white p-3 m-0">
        <h5 className="fw-light">
          Copyright © 2022 Stephen Innovations. All Rights Reserved.
        </h5>
      </div>
    </>
  );
};

export default Footer;

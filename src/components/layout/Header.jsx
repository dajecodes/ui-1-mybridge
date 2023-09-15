import { useState } from "react";
import { Link  } from "react-router-dom";
import "../../styles/layout/Header.css";
import { menuLinksData } from "../../Data/Data";

const Header = () => {
  // const navBarLinks =useRef(document.querySelectorAll(".nav-link"))
  //   navBarLinks.current.forEach(navBarLink=>{
  //     navBarLink.addEventListener('click',()=>{
  //       document.querySelector('.active').classList.remove('active')
  //       navBarLink.classList.add('active')
  //     })
  //   })

  const [menuLinks, setMenuLinks] = useState({
    activeMenuLink: menuLinksData[0],
    links: menuLinksData,
  });
  
  const activeLink = (index) => {
    
    setMenuLinks({ ...menuLinks, activeMenuLink: menuLinks.links[index] });
  };

  const checkState = (index) => {
    if (menuLinks.links[index] === menuLinks.activeMenuLink) {
      return "nav-link active";
    } else {
      return "nav-link";
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light  py-0 ">
        <div className="container px-lg-0 py-0">
          <a className="navbar-brand p-0 " href="www.test.lk">
            <img
              src="https://s3-alpha-sig.figma.com/img/a9c0/61d1/d4b89debc1f6246c74ad9a18f67a3df5?Expires=1694995200&Signature=j5b6YdHlM13H1RxtmWrshFG2Inx6i5lZ6wNVvi6G3qHBMnEl5k82dC6VSA7JSfdUf0bJZ1VXwDup229lYv0NFos4hdiZI5n2Ls8dhDg28YP1vY4BKJe-Cw3aVbACooVqPitAjU-2LPOurBW6QKe7M7xiYCayVmf4iGaH-Vt1jRtvSMGCMXShqSUYyY5cWRJK0jIKvgmw7X2FRCKwcTRz-UeHNlc45c6Pi~2ku~1TkfV7hbEcxZxX-plUdCOWyNjw5VXlIxQ7vT30ZbJJZznFVQ0N-EWr-cFjNmjfVVT1lXoZo3hWFxEHPiK6dLcdRvZpKQcdWAwdMt3a5PcQaAK6KQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              width="75"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse  "
            style={{ height: 75 }}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold ">
              {menuLinks.links.map((link) => (
                <li key={link.id} className="nav-item">
                  <Link
                    className={checkState(link.id)}
                    to={link.path}
                    onClick={() => {
                      activeLink(link.id);
                    }}
                  >
                    {link.linkName}
                  </Link>
                </li>
              ))}



             
              

              {/* <li className="nav-item ">
                <a className="nav-link "  href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  SERVICE
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="/about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/testimonials">
                  TESTIMONIAL
                </a>
              </li>              
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  CONTACT US
                </a>
              </li> */}
            </ul>

            <div className="d-flex justify-content-between border-start border-secondary-subtle ps-4 pt-3 h-100">
              <img
                src="https://s3-alpha-sig.figma.com/img/c430/e705/872f520c81e05f298c78249d023941ef?Expires=1694995200&Signature=U8pfexCRrZ1V5sDT7z~Zsvmb836Uc-bqd2tmoPGASg5uihrLF85sjWOZzfYBHw9sJuDldKLcSBQSPW5V2lf3qUOyfli5lQDv8vmzVmczsQlav6Hvtd2Ow4Ot3iKjX~PY2DpifFG2SKm8GVm3jfgCGlpD0hTFoTPGhluufgESRAq1Py0BG4zA8p6nl64iY1pubUrS49nutaVJAsU8OA4vk9d5FdQWEe7pgTbNTRezjIuXMGsGe8V~se~ai5DwMmt49tBDkxOCQpTDi7UM2SnoGg-jD9m4V9YXaecPvlpO-HCjlgZ~RYk-AQkEGPhpHcF2~RUMxUzCYvauVg-2zRfdYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width="45"
                height="30"
                className="mt-3"
              />
              <div className="d-flex flex-column ms-3">
                <span className="fw-light">Contact Us</span>
                <span className="text-warning fw-bold">(555)5802 3059</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarComponent = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!event.target.closest(".menu")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const dropdownLinks = {
    "For Kindergarten": [
      { to: "/AllMentors", label: "All Mentors" },
      { to: "/CoursesPricing", label: "Courses Pricing" },
    ],
    "For High School": [
      { to: "/AllMentors", label: "All Mentors" },
      { to: "/CoursesPricing", label: "Courses Pricing" },
    ],
    "For College": [
      { to: "/AllMentors", label: "All Mentors" },
      { to: "/CoursesPricing", label: "Courses Pricing" },
    ],
    Courses: [
      { to: "/AllMentors", label: "All Mentors" },
      { to: "/CoursesPricing", label: "Courses Pricing" },
    ],
  };

  return (
    <div className="SD container">
      <div className="nav">
        <div className="logo">
          <Link to="./">
            <img
              className="eduviLogo"
              src="/public/images/Navbar/Logo.svg"
              alt="EduviLogo"
            />
          </Link>
        </div>

        <div className="menu">
          <ul>
            {[
              "Shop",
              "For Kindergarten",
              "For High School",
              "For College",
              "Courses",
            ].map((item, index) => (
              <li
                key={index}
                className="regular-font"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  className="tabs"
                  to={`./${item.toLowerCase().replace(/ /g, "")}`}
                >
                  {item} {item !== "Shop" && <FaAngleDown />}
                </Link>
                {item !== "Shop" && activeDropdown === index && (
                  <div className="dropdown-content">
                    {dropdownLinks[item].map((link, linkIndex) => (
                      <Link key={linkIndex} to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rightPart">
          <ul>
            <li className="regular-font cart">
              <span className="regular-font">cart (0)</span>
              <img src="/public/images/Navbar/Shoppingbag.svg" alt="cart" />
            </li>
            <li className="regular-font profile">
              <span className="regular-font">MY Account</span>
              <img src="/public/images/Navbar/profile.svg" alt="profile" />
            </li>
          </ul>
        </div>

        <div className="verticalMenu burger-icon" onClick={toggleSideMenu}>
          <p className="bergerMenu">Menu</p>
          <GiHamburgerMenu />
        </div>
      </div>
      {isSideMenuOpen && (
        <div className="sideMenu">
          <ul>
            <li className="sideMenuLIST">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="sideMenuLIST">
              <Link to="/For Kindergarten">For Kindergarten</Link>
            </li>
            <li className="sideMenuLIST">
              <Link to="/SingleMentorDetalis">For High School</Link>
            </li>
            <li className="sideMenuLIST">
              <Link to="/CoursesDetalis">For College</Link>
            </li>
            <li className="sideMenuLIST">
              <Link to="/Courses">Courses</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

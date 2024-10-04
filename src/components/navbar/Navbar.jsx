import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiMenuFold3Line, RiMenuUnfold3Line } from "react-icons/ri";
import LightDarkButton from "../LightDarkButton";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import About from "../about/About";
import RigelPlusSeries from "../products/rigelPlusSeries/RigelPlusSeries";
import AlphaPlusSeries from "../products/alphaPlusSeries/AlphaPlusSeries";
import PhotoGallery from "../gallery/photoGallery/PhotoGallery";
import VideoGallery from "../gallery/videoGallery/VideoGallery";
import News from "../gallery/news/News";
import Brochures from "../download-centers/brochures/Brochures";
import Certificates from "../download-centers/certificates/Certificates";
import CompanyProfile from "../download-centers/company-profile/CompanyProfile";
import WarrantyStatement from "../download-centers/warranty-statement/WarrantyStatement";
import Career from "../career/Career";
import Blogs from "../blogs/Blogs";
import Contact from "../contact/Contact";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseHover = (menu) => {
    if (!clickedDropdown) {
      clearTimeout(hoverTimeout);
      setHoveredDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!clickedDropdown) {
      const timeout = setTimeout(() => {
        setHoveredDropdown(null);
      }, 50); // Adjust the delay as needed
      setHoverTimeout(timeout);
    }
  };

  const handleClick = (menu) => {
    if (clickedDropdown === menu) {
      setClickedDropdown(null);
    } else {
      setClickedDropdown(menu);
      setHoveredDropdown(null);
    }
  };

  const handleClickByClick = (menu) => {
    if (clickedDropdown === menu) {
      setClickedDropdown(null);
    } else {
      setClickedDropdown(menu);
      setHoveredDropdown(null);
    }
  };

  const handleClickByHover = (menu) => {
    if (clickedDropdown === menu) {
      setClickedDropdown(null);
    } else {
      setClickedDropdown(null);
      setHoveredDropdown(null);
    }
  };

  const closeDropdown = () => {
    setClickedDropdown(null);
    setHoveredDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <div onClick={closeDropdown}>
          <div
            className={`fixed top-0 left-0 right-0 z-50 flex justify-around items-center whitespace-nowrap py-3 transition-colors duration-300 ${
              isScrolled ? "bg-opacity-100 bg-gray-800" : "bg-transparent"
            } `}
          >
            <Link
              to="/"
              onClick={() => {
                const homeSection = document.getElementById("home-section");
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <div>
                <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-sky-500 text-transparent bg-clip-text font-bold lg:text-5xl md:text-5xl text-2xl lg:leading-normal md:leading-normal">
                  Solarguy
                </div>
                <div className="font-semibold italic text-right lg:mr-5 md:mr-5 mr-2 lg:text-[10px] md:text-[10px] text-[6px] text-white">
                  Every day is a SUN Day
                </div>
              </div>
            </Link>
            <div className="flex lg:gap-10 md:gap-8 gap-5 items-center">
              <div className="hidden lg:flex gap-10 font-semibold cursor-pointer text-white">
                {/* Desktop view */}
                <Link
                  to="/"
                  onClick={() => {
                    const homeSection = document.getElementById("home-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link
                  to="/about"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("about-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div className="relative group">
                    About Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseHover("Products")}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hoveredDropdown === "Products") {
                      handleClickByHover("Products"); // Call handleClickByHover if already hovered
                    } else {
                      handleClickByClick("Products"); // Call handleClickByClick if clicked directly
                    }
                  }}
                >
                  <div className="flex items-center">
                    Products
                    <IoMdArrowDropdown className="w-5 h-5 ml-1" />
                  </div>
                  {(hoveredDropdown === "Products" ||
                    clickedDropdown === "Products") && (
                    <div className="absolute bg-yellow-100 text-black rounded-lg mt-1 p-2 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/rigel-plus-series"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("rigelPlus-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Rigel Plus
                          </div>
                        </Link>
                        <Link
                          to="/alpha-plus-series"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("alphaPlus-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Alpha Plus
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseHover("Gallery")}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hoveredDropdown === "Gallery") {
                      handleClickByHover("Gallery"); // Call handleClickByHover if already hovered
                    } else {
                      handleClickByClick("Gallery"); // Call handleClickByClick if clicked directly
                    }
                  }}
                >
                  <div className="flex items-center">
                    Gallery
                    <IoMdArrowDropdown className="w-5 h-5 ml-1" />
                  </div>
                  {(hoveredDropdown === "Gallery" ||
                    clickedDropdown === "Gallery") && (
                    <div className="absolute bg-yellow-100 text-black rounded-lg mt-1 p-2 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/photo-gallery"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "photoGallery-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Photo Gallery
                          </div>
                        </Link>
                        <Link
                          to="/video-gallery"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "videoGallery-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Video Gallery
                          </div>
                        </Link>
                        <Link
                          to="/news"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("news-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            News
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseHover("Download Center")}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (hoveredDropdown === "Download Center") {
                      handleClickByHover("Download Center"); // Call handleClickByHover if already hovered
                    } else {
                      handleClickByClick("Download Center"); // Call handleClickByClick if clicked directly
                    }
                  }}
                >
                  <div className="flex items-center">
                    Download Center
                    <IoMdArrowDropdown className="w-5 h-5 ml-1" />
                  </div>
                  {(hoveredDropdown === "Download Center" ||
                    clickedDropdown === "Download Center") && (
                    <div className="absolute bg-yellow-100 text-black rounded-lg mt-1 p-2 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/brochures"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("brochures-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Brochures
                          </div>
                        </Link>
                        <Link
                          to="/certificates"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "certificates-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Certificates
                          </div>
                        </Link>
                        <Link
                          to="/company-profile"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "companyProfile-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Company Profile
                          </div>
                        </Link>
                        <Link
                          to="/warranty-statement"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "warrantyStatement-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md">
                            Warranty Statement
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/career"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("career-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <div className="relative group">
                    Career
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("blogs-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <div className="relative group">
                    Blogs
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("contact-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <div className="relative group">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
              </div>

              <LightDarkButton
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />

              {/* Mobile and iPad view */}
              <div className="lg:hidden">
                {menuOpen ? (
                  <RiMenuFold3Line
                    onClick={toggleMenu}
                    className="text-white lg:w-8 md:w-8 w-6 lg:h-8 md:h-8 h-6"
                  />
                ) : (
                  <RiMenuUnfold3Line
                    onClick={toggleMenu}
                    className="text-white lg:w-8 md:w-8 w-6 lg:h-8 md:h-8 h-6"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Mobile and iPad menu */}
          {menuOpen && (
            <div className="lg:hidden fixed md:top-[110px] top-[60px] left-0 right-0 bg-gray-800 text-white py-4 z-40">
              <div className="flex flex-col gap-4 font-semibold items-center">
                <Link
                  to="/"
                  onClick={() => {
                    const homeSection = document.getElementById("home-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div onClick={handleLinkClick} className="relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link
                  to="/about"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("about-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <div onClick={handleLinkClick} className="relative group">
                    About Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                {/* dropdown with positioning adjustment */}
                <div
                  className="relative group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick("Products");
                  }}
                >
                  <div className="flex items-center">
                    Products
                    <IoMdArrowDropdown className="w-5 h-5 ml-1" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                  {(hoveredDropdown === "Products" ||
                    clickedDropdown === "Products") && (
                    <div className="bg-yellow-100 text-black rounded-lg mt-1 p-2 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/rigel-plus-series"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("rigelPlus-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Rigel Plus
                          </div>
                        </Link>
                        <Link
                          to="/alpha-plus-series"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("alphaPlus-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Alpha Plus
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick("Gallery");
                  }}
                >
                  <div className="flex items-center">
                    Gallery
                    <IoMdArrowDropdown className="w-5 h-5 ml-1" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                  {(hoveredDropdown === "Gallery" ||
                    clickedDropdown === "Gallery") && (
                    <div className="bg-yellow-100 text-black rounded-lg mt-1 p-2 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/photo-gallery"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "photoGallery-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Photo Gallery
                          </div>
                        </Link>
                        <Link
                          to="/video-gallery"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "videoGallery-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Video Gallery
                          </div>
                        </Link>
                        <Link
                          to="/news"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("news-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            News
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick("Download Center");
                  }}
                >
                  <div className="flex items-center">
                    Download Center
                    <IoMdArrowDropdown className="w-5 h-5 ml-1" />
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                  {(hoveredDropdown === "Download Center" ||
                    clickedDropdown === "Download Center") && (
                    <div className="bg-yellow-100 text-black rounded-lg mt-1 p-2 shadow-lg">
                      <div className="flex flex-col gap-2">
                        <Link
                          to="/brochures"
                          onClick={() => {
                            const homeSection =
                              document.getElementById("brochures-section");
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Brochures
                          </div>
                        </Link>
                        <Link
                          to="/certificates"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "certificates-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Certificates
                          </div>
                        </Link>
                        <Link
                          to="/company-profile"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "companyProfile-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Company Profile
                          </div>
                        </Link>
                        <Link
                          to="/warranty-statement"
                          onClick={() => {
                            const homeSection = document.getElementById(
                              "warrantyStatement-section"
                            );
                            if (homeSection) {
                              homeSection.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        >
                          <div
                            onClick={handleLinkClick}
                            className="hover:text-white hover:font-semibold hover:bg-gray-700 px-2 py-1 rounded-md"
                          >
                            Warranty Statement
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/career"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("career-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <div onClick={handleLinkClick} className="relative group">
                    Career
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link
                  to="/blogs"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("blogs-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <div onClick={handleLinkClick} className="relative group">
                    Blogs
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => {
                    const homeSection =
                      document.getElementById("contact-section");
                    if (homeSection) {
                      homeSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  <div onClick={handleLinkClick} className="relative group">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route
            path="/rigel-plus-series"
            element={<RigelPlusSeries isDarkMode={isDarkMode} />}
          />
          <Route
            path="/alpha-plus-series"
            element={<AlphaPlusSeries isDarkMode={isDarkMode} />}
          />
          <Route
            path="/photo-gallery"
            element={<PhotoGallery isDarkMode={isDarkMode} />}
          />
          <Route
            path="/video-gallery"
            element={<VideoGallery isDarkMode={isDarkMode} />}
          />
          <Route path="/news" element={<News isDarkMode={isDarkMode} />} />
          <Route
            path="/brochures"
            element={<Brochures isDarkMode={isDarkMode} />}
          />
          <Route
            path="/certificates"
            element={<Certificates isDarkMode={isDarkMode} />}
          />
          <Route
            path="/company-profile"
            element={<CompanyProfile isDarkMode={isDarkMode} />}
          />
          <Route
            path="/warranty-statement"
            element={<WarrantyStatement isDarkMode={isDarkMode} />}
          />
          <Route path="/career" element={<Career isDarkMode={isDarkMode} />} />
          <Route path="/blogs" element={<Blogs isDarkMode={isDarkMode} />} />
          <Route
            path="/contact"
            element={<Contact isDarkMode={isDarkMode} />}
          />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </BrowserRouter>
    </>
  );
};

export default Navbar;

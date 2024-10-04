import React, { useState } from "react";
import {
  FaFacebook,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { MdTextsms } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

Modal.setAppElement("#root"); // Specify the root element for accessibility

const Footer = ({ isDarkMode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const phoneNumber = "+917385363401";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    closeModal();
  };

  const handleText = () => {
    window.location.href = `sms:${phoneNumber}`;
    closeModal();
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/${phoneNumber}`;
    closeModal();
  };

  return (
    <>
      <div className="mt-16">
        <div className={`${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
          <div className="lg:flex justify-around lg:ml-20">
            <div className="lg:w-[350px] md:w-full w-full">
              <div>
                <div
                  className={`bg-gradient-to-r text-transparent bg-clip-text font-bold lg:text-5xl md:text-5xl text-2xl lg:leading-normal md:leading-normal lg:text-start md:text-center text-center ${
                    isDarkMode
                      ? "from-indigo-600 via-blue-500 to-sky-500"
                      : "from-purple-600 via-pink-500 to-sky-400"
                  }`}
                >
                  Solarguy
                </div>
                <div className="font-semibold italic lg:ml-[75px] md:ml-[75px] ml-[28px] lg:text-[10px] md:text-[10px] text-[6px] lg:text-start md:text-center text-center">
                  Every day is a SUN Day
                </div>
              </div>
              <div className="lg:mt-3 md:mt-5 mt-5 lg:text-base md:text-base text-sm lg:text-start md:text-center text-center lg:px-0 md:px-10 px-10">
                Solarguy: Stringent quality tests and perfection when it comes
                to the output is a way of life for us.
              </div>
              <div className="flex lg:justify-normal md:justify-center justify-center cursor-pointer lg:mt-5 md:mt-7 mt-7 lg:mb-7 md:mb-0 mb-0 gap-4">
                <FaFacebook size={30} className="hover:text-blue-600" />
                <FaInstagramSquare size={30} className="hover:text-pink-600" />
                <FaYoutube size={30} className="hover:text-red-600" />
                <FaLinkedin size={30} className="hover:text-blue-600" />
                <FaGithubSquare size={30} className="hover:text-yellow-600" />
              </div>
            </div>
            <div className="lg:flex md:flex lg:justify-normal md:justify-center lg:gap-24 md:gap-16 mt-7 lg:ml-0 md:ml-10 ml-0 lg:px-0 md:px-10 px-10">
              <div className="flex justify-center lg:mt-0 md:mt-5 mt-5">
                <ul className="list-disc list-inside">
                  <div className="font-bold text-2xl whitespace-nowrap">
                    Quick Links
                  </div>
                  <Link
                    to="/"
                    onClick={() => {
                      const homeSection =
                        document.getElementById("home-section");
                      if (homeSection) {
                        homeSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <div
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">Home</li>
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
                    <div
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">About Us</li>
                    </div>
                  </Link>
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
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">Gallery</li>
                    </div>
                  </Link>
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
                    <div
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">Careers</li>
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
                    <div
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">Blogs</li>
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
                    <div
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3 lg:mb-5 md:mb-5 mb-0">Contact Us</li>
                    </div>
                  </Link>
                </ul>
              </div>
              <div className="flex justify-center lg:mt-0 md:mt-5 mt-5">
                <ul className="list-disc list-inside">
                  <div className="font-bold text-2xl whitespace-nowrap">
                    Our Products
                  </div>
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
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">Rigel Plus</li>
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
                      className={`font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      <li className="mt-3">Alpha Plus</li>
                    </div>
                  </Link>
                </ul>
              </div>
              <div className="flex justify-center lg:w-[300px] md:w-[250px] lg:mt-0 md:mt-5 mt-5 lg:ml-0 md:ml-0 ml-[80px]">
                <ul>
                  <div className="font-bold text-2xl whitespace-nowrap">
                    Contact Us
                  </div>
                  <div>
                    <div
                      className={`flex items-center gap-5 mt-5 font-bold cursor-pointer ${
                        isDarkMode
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                      onClick={openModal}
                    >
                      <li>
                        <FaPhoneAlt size={20} />
                      </li>
                      <li>+91-7385363401</li>
                    </div>

                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      contentLabel="Contact Options"
                      className="fixed inset-0 flex items-center justify-center p-4"
                      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                    >
                      <div
                        className={`flex gap-3 items-center p-5 rounded-lg shadow-lg text-center ${
                          isDarkMode
                            ? "bg-black bg-opacity-50"
                            : "bg-black bg-opacity-30"
                        }`}
                      >
                        <button
                          onClick={handleCall}
                          className="block w-full py-2.5 px-2.5 bg-green-500 text-white rounded-full hover:bg-green-600"
                        >
                          <FaPhoneAlt size={22} />
                        </button>
                        <button
                          onClick={handleText}
                          className="block w-full py-2 px-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                        >
                          <MdTextsms size={26} />
                        </button>
                        <button
                          onClick={handleWhatsApp}
                          className="block w-full py-1.5 px-1.5 bg-green-600 text-white rounded-full hover:bg-green-700"
                        >
                          <FaWhatsapp size={30} />
                        </button>
                        <button
                          onClick={closeModal}
                          className="block w-full py-1.5 px-1.5 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <IoIosCloseCircleOutline size={30} />
                        </button>
                      </div>
                    </Modal>
                  </div>
                  <a
                    href="mailto:bansoddivyanshu01@gmail.com"
                    className={`flex items-center gap-5 mt-5 font-bold cursor-pointer ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    }`}
                  >
                    <li>
                      <FaMailBulk size={20} />
                    </li>
                    <li className="break-all">bansoddivyanshu01@gmail.com</li>
                  </a>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Heoweb+Solution,+212,+1st+Floor,+Ring+Rd,+Chhatrapati+Square,+near+Kalpavruksha+Hospital,+Nagpur,+Maharashtra+440015"
                    className={`flex items-center gap-5 mt-5 lg:mb-0 md:mb-5 mb-5 font-bold cursor-pointer ${
                      isDarkMode
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-700 hover:text-black"
                    } break-words`}
                  >
                    <li>
                      <FaLocationDot size={20} />
                    </li>
                    <li className="break-all">
                      Heoweb Solution, 212, 1st Floor, Ring Rd, Chhatrapati
                      square, near Kalpavruksha Hospital, Nagpur, Maharashtra
                      440015
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`lg:flex md:flex text-center justify-around ${
            isDarkMode ? "bg-gray-900" : "bg-gray-400"
          }`}
        >
          <p
            className={`font-semibold text-sm py-2 ${
              isDarkMode
                ? "text-gray-400 hover:text-white duration-300"
                : "text-gray-200 hover:text-black duration-300"
            }`}
          >
            Copyright &copy; {new Date().getFullYear()} Solarguy All rights
            reserved
          </p>
          <p
            className={`font-semibold text-sm py-2 cursor-pointer ${
              isDarkMode
                ? "text-gray-400 hover:text-white duration-300"
                : "text-gray-200 hover:text-black duration-300"
            }`}
          >
            Terms & Condition | Privacy Policy
          </p>
          <a
            href="https://heoweb.com/"
            className={`font-semibold text-sm py-2 ${
              isDarkMode
                ? "text-gray-400 hover:text-white duration-300"
                : "text-gray-200 hover:text-black duration-300"
            }`}
          >
            Designed by: Heoweb Solutions
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

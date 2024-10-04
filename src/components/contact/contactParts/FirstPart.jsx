import React, { useEffect, useRef, useState } from "react";
import { ImOffice } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Form from "./Form";
import Map from "./Map";
import { MdTextsms } from "react-icons/md";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Specify the root element for accessibility

const FirstPart = ({ isDarkMode }) => {
  const [animateFirstPart, setAnimateFirstPart] = useState(false);
  const firstPartRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const thresholds = {
      lg: 0.3,
      md: 0,
      mobile: 0,
    };

    const observerFirstPart = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateFirstPart(true);
          observerFirstPart.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: thresholds[getDeviceType()] }
    );

    const currentFirstPartRef = firstPartRef.current;

    if (currentFirstPartRef) {
      observerFirstPart.observe(currentFirstPartRef);
    }

    return () => {
      if (currentFirstPartRef) {
        observerFirstPart.unobserve(currentFirstPartRef);
      }
    };
  }, []);

  const getDeviceType = () => {
    const breakpoints = {
      lg: 1024,
      md: 768,
      mobile: 0,
    };

    const screenWidth = window.innerWidth;
    if (screenWidth >= breakpoints.lg) {
      return "lg";
    } else if (screenWidth >= breakpoints.md) {
      return "md";
    } else {
      return "mobile";
    }
  };

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
      <div className="lg:flex lg:px-32 md:px-28 px-5 lg:gap-6 lg:-mt-20 md:-mt-[550px] -mt-[380px] items-center overflow-x-hidden">
        <div
          ref={firstPartRef}
          className={`lg:w-1/2 md:w-full w-full transform transition-transform duration-1000 ease-out delay-500 ${
            animateFirstPart
              ? "translate-x-0 opacity-100"
              : "lg:-translate-x-[566px] md:-translate-x-[590px] -translate-x-[300px] opacity-0"
          }`}
        >
          <div
            className={`font-bold lg:text-2xl md:text-2xl text-lg ${
              isDarkMode ? "text-green-600" : "text-blue-800"
            }`}
          >
            Contact Us
          </div>
          <div className="font-bold lg:text-3xl md:text-3xl text-lg lg:mt-3 md:mt-3 mt-2 whitespace-nowrap">
            We are open for all kind of QUERIES!!
          </div>
          <div className="lg:px-7 md:px-7 px-4">
            <div className="flex items-center lg:gap-8 md:gap-8 gap-6 lg:mt-5 md:mt-5 mt-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Heoweb+Solution,+212,+1st+Floor,+Ring+Rd,+Chhatrapati+Square,+near+Kalpavruksha+Hospital,+Nagpur,+Maharashtra+440015"
                className="bg-blue-800 hover:bg-blue-900 lg:px-3 md:px-3 px-2 lg:py-3 md:py-3 py-2"
              >
                <ImOffice size={25} className="text-white" />
              </a>
              <div>
                <h1 className="font-bold lg:text-xl md:text-xl text-lg">
                  Head Office
                </h1>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Heoweb+Solution,+212,+1st+Floor,+Ring+Rd,+Chhatrapati+Square,+near+Kalpavruksha+Hospital,+Nagpur,+Maharashtra+440015"
                  className={`lg:mt-3 md:mt-3 mt-2 font-semibold ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  Heoweb Solution, 212, 1st Floor, Ring Rd, Chhatrapati square,
                  <br className="lg:inline hidden" />
                  near Kalpavruksha Hospital, Nagpur, Maharashtra 440015
                </a>
              </div>
            </div>
            <div className="flex items-center lg:gap-8 md:gap-8 gap-6 lg:mt-5 md:mt-5 mt-3">
              <a
                href="mailto:bansoddivyanshu01@gmail.com"
                className="bg-blue-800 hover:bg-blue-900 lg:px-3 md:px-3 px-2 lg:py-3 md:py-3 py-2"
              >
                <MdMarkEmailUnread size={25} className="text-white" />
              </a>
              <div>
                <h1 className="font-bold lg:text-xl md:text-xl text-lg">
                  Email
                </h1>
                <a
                  href="mailto:bansoddivyanshu01@gmail.com"
                  className={`lg:mt-3 md:mt-3 mt-2 font-semibold ${
                    isDarkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  bansoddivyanshu01@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center lg:gap-8 md:gap-8 gap-6 lg:mt-5 md:mt-5 mt-3">
              <div
                onClick={openModal}
                className="bg-blue-800 hover:bg-blue-900 lg:px-3 md:px-3 px-2 lg:py-3 md:py-3 py-2 cursor-pointer"
              >
                <IoCallSharp size={25} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold lg:text-xl md:text-xl text-lg">
                  Contact Number
                </h1>
                <div onClick={openModal}>
                  <p
                    className={`lg:px-3 md:px-3 px-2 lg:py-3 md:py-3 py-2 lg:-ml-2.5 md:-ml-2.5 -ml-2 cursor-pointer font-semibold ${
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    +91-7385363401
                  </p>
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
            </div>
          </div>
        </div>
        <Form isDarkMode={isDarkMode} />
      </div>
      <Map />
    </>
  );
};

export default FirstPart;

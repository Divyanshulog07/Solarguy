import React, { useEffect, useRef, useState } from "react";
import { Error } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import { useForm } from "react-hook-form";

const Form = ({ isDarkMode }) => {
  const [animateFirstPart, setAnimateFirstPart] = useState(false);
  const firstPartRef = useRef(null);

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm({
    shouldFocusError: false,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const onSubmit = (data) => {
    const formData = { ...data };
    console.log(formData); // Log the formData object
    setSnackbarMessage("Form submitted successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    reset(); // Reset the form after submission
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const emailValidation = (email) => {
    if (!email) {
      return "Email is required";
    }
    const allowedDomains = [
      "gmail",
      "yahoo",
      "ymail",
      "outlook",
      "hotmail",
      "live",
      "icloud",
      "protonmail",
      "zoho",
      "aol",
      "yandex",
      "mail",
      "email",
      "usa",
      "techie",
      "gmx",
      "tutanota",
    ];

    const allowedExtensions = ["com", "net", "org", "in", "ru", "de", "co"];

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      const domain = email.split("@")[1].split(".")[0];
      const extension = email.split("@")[1].split(".")[1];
      if (!allowedDomains.includes(domain)) {
        return `Please enter a valid email address with one of the following domains: ${allowedDomains.join(
          ", "
        )}`;
      }
      if (!allowedExtensions.includes(extension)) {
        return `Email address must have one of the following extensions: ${allowedExtensions.join(
          ", "
        )}`;
      }
      return true;
    } else {
      return "Please enter a valid email address";
    }
  };

  const mobileValidation = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    if (!mobile) {
      return "Mobile number is required";
    }
    if (mobilePattern.test(mobile)) {
      return true;
    } else {
      return "Mobile number must be a 10-digit number";
    }
  };

  return (
    <>
      <div
        ref={firstPartRef}
        className={`flex justify-center items-center h-screen lg:-mt-12 md:-mt-56 mt-[66px] transform transition-transform duration-1000 ease-out delay-500 ${
          animateFirstPart
            ? "translate-x-0 opacity-100"
            : "lg:translate-x-[450px] md:translate-x-[590px] translate-x-[300px] opacity-0"
        }`}
      >
        <div
          className={`w-full rounded-xl pb-7 lg:mt-0 md:mt-10 mt-10 ${
            isDarkMode
              ? "shadow-lg shadow-gray-500 bg-gray-900"
              : " shadow-lg shadow-gray-700 bg-gray-100"
          }`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-5 px-5">
              <div className="relative">
                <label htmlFor="name" className="font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className={`rounded-md px-4 py-2 mt-2 w-full border outline-none focus:border-blue-700 focus:ring-4 placeholder:text-gray-500 ${
                    errors.name ? "border-red-600" : "border-gray-300"
                  } ${
                    isDarkMode
                      ? "bg-gray-400 text-black placeholder:text-gray-800 focus:placeholder:text-gray-700 focus:ring-blue-400"
                      : "bg-gray-200 placeholder:text-gray-500 focus:placeholder:text-gray-400 focus:ring-blue-200"
                  }`}
                  {...register("name", { required: "Name is required" })}
                  onFocus={() => {
                    if (errors.name) {
                      setFocus("name", { shouldSelect: true });
                    }
                  }}
                />
                {errors.name && (
                  <Error
                    className="absolute inset-y-0 right-0 flex items-center pr-2 mt-10 cursor-pointer text-red-600"
                    onClick={() => {
                      setSnackbarMessage("Name is required");
                      setSnackbarSeverity("error");
                      setSnackbarOpen(true);
                    }}
                  />
                )}
              </div>
              <div className="relative">
                <label htmlFor="email" className="font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className={`rounded-md px-4 py-2 mt-2 w-full border outline-none focus:border-blue-700 focus:ring-4 placeholder:text-gray-500 ${
                    errors.email ? "border-red-600" : "border-gray-300"
                  } ${
                    isDarkMode
                      ? "bg-gray-400 text-black placeholder:text-gray-800 focus:placeholder:text-gray-700 focus:ring-blue-400"
                      : "bg-gray-200 placeholder:text-gray-500 focus:placeholder:text-gray-400 focus:ring-blue-200"
                  }`}
                  {...register("email", { validate: emailValidation })}
                />
                {errors.email && (
                  <Error
                    className="absolute inset-y-0 right-0 flex items-center pr-2 mt-10 cursor-pointer text-red-600"
                    onClick={() => {
                      setSnackbarMessage(errors.email.message);
                      setSnackbarSeverity("error");
                      setSnackbarOpen(true);
                    }}
                  />
                )}
              </div>
              <div className="relative">
                <label htmlFor="number" className="font-semibold">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className={`rounded-md px-4 py-2 mt-2 w-full border outline-none focus:border-blue-700 focus:ring-4 placeholder:text-gray-500 ${
                    errors.number ? "border-red-600" : "border-gray-300"
                  } ${
                    isDarkMode
                      ? "bg-gray-400 text-black placeholder:text-gray-800 focus:placeholder:text-gray-700 focus:ring-blue-400"
                      : "bg-gray-200 placeholder:text-gray-500 focus:placeholder:text-gray-400 focus:ring-blue-200"
                  }`}
                  {...register("number", { validate: mobileValidation })}
                  onFocus={() => {
                    if (errors.number) {
                      setFocus("number", { shouldSelect: true });
                    }
                  }}
                />
                {errors.number && (
                  <Error
                    className="absolute inset-y-0 right-0 flex items-center pr-2 mt-10 cursor-pointer text-red-600"
                    onClick={() => {
                      setSnackbarMessage(errors.number.message);
                      setSnackbarSeverity("error");
                      setSnackbarOpen(true);
                    }}
                  />
                )}
              </div>
              <div className="relative">
                <label htmlFor="city" className="font-semibold">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="City"
                  className={`rounded-md px-4 py-2 mt-2 w-full border outline-none focus:border-blue-700 focus:ring-4 placeholder:text-gray-500 ${
                    errors.city ? "border-red-600" : "border-gray-300"
                  } ${
                    isDarkMode
                      ? "bg-gray-400 text-black placeholder:text-gray-800 focus:placeholder:text-gray-700 focus:ring-blue-400"
                      : "bg-gray-200 placeholder:text-gray-500 focus:placeholder:text-gray-400 focus:ring-blue-200"
                  }`}
                  {...register("city", { required: "City is required" })}
                  onFocus={() => {
                    if (errors.city) {
                      setFocus("city", { shouldSelect: true });
                    }
                  }}
                />
                {errors.city && (
                  <Error
                    className="absolute inset-y-0 right-0 flex items-center pr-2 mt-10 cursor-pointer text-red-600"
                    onClick={() => {
                      setSnackbarMessage("City is required");
                      setSnackbarSeverity("error");
                      setSnackbarOpen(true);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="font-bold lg:text-3xl md:text-2xl text-lg px-5 lg:mt-10 md:mt-9 mt-8">
              How can we help?
            </div>
            <div className="lg:text-base md:text-base text-sm lg:mt-4 md:mt-4 mt-3 px-5">
              Feel free to ask a question or simply leave a comment
            </div>
            <div className="mt-5 px-5">
              <label htmlFor="name" className="font-semibold">
                Message
              </label>
              <div className="mt-3">
                <textarea
                  placeholder="Text Message..."
                  className={`rounded-md py-1.5 px-3 lg:w-[530px] md:w-[515px] w-[260px] h-[150px] border outline-none focus:border-blue-700 focus:ring-4 ${
                    isDarkMode
                      ? "bg-gray-400 text-black placeholder:text-gray-800 focus:ring-blue-400"
                      : "bg-gray-200 placeholder:text-gray-500 focus:ring-blue-200"
                  }`}
                  {...register("message")}
                />
              </div>
            </div>
            <button
              type="submit"
              className={`bg-blue-700 text-white px-3 py-2 ml-5 rounded-lg font-semibold mt-6 ${
                isDarkMode
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant="filled" severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;

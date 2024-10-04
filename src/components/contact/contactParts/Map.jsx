import React from "react";

const Map = () => {
  return (
    <div className="overflow-hidden lg:mt-0 md:-mt-36 mt-28 relative">
      <div className="relative w-screen lg:h-[500px] md:h-[400px] h-[300px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.0437475668846!2d79.07089817510756!3d21.110821980559116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf0f9c2dc9ff%3A0x83b27638bf58ad37!2sHeoweb%20Solutions%20-%20Website%20Designing%20%26%20Development%20Company%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1721796929394!5m2!1sen!2sin"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;

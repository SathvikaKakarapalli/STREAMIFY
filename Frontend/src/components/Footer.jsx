import React from "react";

const Footer = () => {
  return (
    <div className="text-center p-3 bg-base-300 mt-1 text-xs sm:text-sm w-full">
      Design and Developed by{" "}
      <a
        href="https://piyushkhatri.vercel.app/"
        className="hover:underline text-primary hover:text-secondary"
      >
        Piyush Khatri
      </a>
    </div>
  );
};

export default Footer;

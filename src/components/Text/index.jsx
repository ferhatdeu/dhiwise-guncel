import React from "react";

const sizeClasses = {
  txtInterRegular16Gray500: "font-inter font-normal",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterRegular14Bluegray800: "font-inter font-normal",
  txtInterBold16: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14Bluegray900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

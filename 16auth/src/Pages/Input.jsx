import React, { forwardRef } from "react";

const Input = forwardRef(({  className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`border ${className}`}
      {...props}
    />
  );
});

export default Input;




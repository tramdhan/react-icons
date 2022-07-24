import * as React from "react";

const SvgLaptop = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -4.45 93.7 93.7"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 17"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 35"
        d="M70.6 2H22.3A13.359 13.359 0 0 0 9 15.3v45.3h74.8V15.3A13.209 13.209 0 0 0 70.6 2Z"
      />
      <path data-name="Line 13" d="M60.1 34.7 49.2 45.6" />
      <path data-name="Line 14" d="M73.1 30.4 62.2 41.3" />
      <path
        data-name="Path 36"
        d="M86.4 82.8H7.3A5.335 5.335 0 0 1 2 77.5v-.3a5.335 5.335 0 0 1 5.3-5.3h79.1a5.335 5.335 0 0 1 5.3 5.3v.3a5.335 5.335 0 0 1-5.3 5.3Z"
      />
      <path data-name="Line 15" d="M9.9 60.5 3.2 73.9" />
      <path data-name="Line 16" d="m90.3 73.3-7.6-13.1" />
    </g>
  </svg>
);

export default SvgLaptop;

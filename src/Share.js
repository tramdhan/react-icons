import * as React from "react";

const SvgShare = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -3.03 93.622 93.622"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 8"
      fill="none"
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 43"
        d="M33.252 67.8a15.685 15.685 0 1 1-13.5-13.5 15.705 15.705 0 0 1 13.5 13.5Z"
      />
      <path
        data-name="Path 44"
        d="M70.152 23.1a12.38 12.38 0 0 1-13.9 13.9 12.517 12.517 0 0 1-10.7-10.7 12.404 12.404 0 1 1 24.6-3.2Z"
        strokeLinecap="round"
      />
      <path
        data-name="Path 45"
        d="M91.452 68a11.163 11.163 0 1 1-9.1-9.1 10.93 10.93 0 0 1 9.1 9.1Z"
        strokeLinecap="round"
      />
      <path
        data-name="Line 20"
        strokeLinecap="round"
        d="m28.352 57.1 17.9-26.6"
      />
      <path
        data-name="Line 21"
        strokeLinecap="round"
        d="m75.452 58.7-10.3-23.5"
      />
      <path
        data-name="Path 46"
        d="M32.552 22.5S29.252 2 49.252 2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SvgShare;

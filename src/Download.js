import * as React from "react";

const SvgDownload = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -1.2 83.8 83.8"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 20"
      transform="translate(-470.6 -883.7)"
      stroke={props.color}
      strokeMiterlimit={10}
    >
      <path
        data-name="Path 57"
        d="M551.9 929v24.1a9.5 9.5 0 0 1-9.5 9.5h-59.8a9.5 9.5 0 0 1-9.5-9.5V929"
        fill="none"
        strokeLinecap="round"
        strokeWidth={5}
      />
      <path
        data-name="Path 58"
        d="m501.3 925.8 11.1 11 11.2-11.2"
        fill="none"
        strokeLinecap="round"
        strokeWidth={5}
      />
      <path
        data-name="Line 29"
        fill="none"
        strokeLinecap="round"
        strokeWidth={5}
        d="M512.5 911.6v25.2"
      />
      <circle
        data-name="Ellipse 1"
        cx={3.4}
        cy={3.4}
        r={3.4}
        transform="translate(509.1 896.4)"
        fill="#21409a"
      />
      <circle
        data-name="Ellipse 2"
        cx={3.4}
        cy={3.4}
        r={3.4}
        transform="translate(509.1 884.2)"
        fill="#21409a"
      />
    </g>
  </svg>
);

export default SvgDownload;

import * as React from "react";

const SvgPosition = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-15.55 0 90.1 90.1"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 24"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 18"
        d="M2 29.5c0 15.2 17.4 48.3 27.5 48.3 9.9 0 27.5-33.2 27.5-48.3a27.5 27.5 0 0 0-55 0Z"
      />
      <path
        data-name="Path 19"
        d="M41.6 26.8A12.115 12.115 0 0 1 28 40.4a12.3 12.3 0 0 1-10.5-10.5 12.115 12.115 0 0 1 13.6-13.6 12.41 12.41 0 0 1 10.5 10.5Z"
      />
      <path
        data-name="Path 20"
        d="M57 76.9c0 6.2-12.3 11.2-27.5 11.2S2 83.1 2 76.9c0-3.9 5-7.4 12.5-9.4"
      />
    </g>
  </svg>
);

export default SvgPosition;

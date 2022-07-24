import * as React from "react";

const SvgInterface = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -0.42 95.125 95.125"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 13"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 21"
        d="M57.325 10.175a33.339 33.339 0 1 1-44 0 33.367 33.367 0 0 1 44 0Z"
      />
      <path
        data-name="Path 22"
        d="M25.425 47.475a14.885 14.885 0 0 1 5.8-28.6"
      />
      <path
        data-name="Path 23"
        d="m69.125 63.075-5.3 5.3a5.191 5.191 0 0 1-7.3 0h0a5.191 5.191 0 0 1 0-7.3l5.3-5.3a5.191 5.191 0 0 1 7.3 0h0a5.191 5.191 0 0 1 0 7.3Z"
      />
      <path
        data-name="Path 24"
        d="M91.625 90.775h0a5.07 5.07 0 0 1-7.2 0l-17.3-17.3a5.07 5.07 0 0 1 0-7.2h0a5.07 5.07 0 0 1 7.2 0l17.3 17.3a5.07 5.07 0 0 1 0 7.2Z"
      />
      <path data-name="Line 5" d="M46.425 18.275h31.3" />
    </g>
  </svg>
);

export default SvgInterface;

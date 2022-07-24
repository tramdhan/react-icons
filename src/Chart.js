import * as React from "react";

const SvgChart = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-2.8 0 95 95"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 16"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 8"
        d="M80.2 93h-71A7.17 7.17 0 0 1 2 85.8h0a7.17 7.17 0 0 1 7.2-7.2h71a7.17 7.17 0 0 1 7.2 7.2h0a7.17 7.17 0 0 1-7.2 7.2Z"
      />
      <path
        data-name="Path 9"
        d="M14.7 2h-5A7.768 7.768 0 0 0 2 9.7v47.6A7.768 7.768 0 0 0 9.7 65h5a7.768 7.768 0 0 0 7.7-7.7V9.7A7.7 7.7 0 0 0 14.7 2Z"
      />
      <path
        data-name="Path 10"
        d="M49.8 33.6h-9.6a5.378 5.378 0 0 0-5.4 5.4v20.5a5.378 5.378 0 0 0 5.4 5.4h9.6a5.378 5.378 0 0 0 5.4-5.4V39a5.378 5.378 0 0 0-5.4-5.4Z"
      />
      <path
        data-name="Path 11"
        d="M80.9 19.8h-7.4a6.487 6.487 0 0 0-6.5 6.5v32.1a6.487 6.487 0 0 0 6.5 6.5h7.4a6.487 6.487 0 0 0 6.5-6.5V26.3a6.487 6.487 0 0 0-6.5-6.5Z"
      />
    </g>
  </svg>
);

export default SvgChart;

import * as React from "react";

const SvgHome = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -4.99 92.071 92.071"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 21"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={5}
    >
      <path
        data-name="Path 63"
        d="M75.936 43.5v25.9c0 5.7-3.4 10.2-7.5 10.2h-47.1c-4.1 0-7.5-4.6-7.5-10.2V43.5"
      />
      <path
        data-name="Path 64"
        d="m3.536 40 33.1-33.1s3.2-4.4 8.4-4.4 9.1 4.3 9.1 4.3l34.4 34.4"
      />
      <path
        data-name="Path 65"
        d="M50.036 68.4h-10.3a3.159 3.159 0 0 1-3.2-3.2v-14a3.159 3.159 0 0 1 3.2-3.2h10.3a3.159 3.159 0 0 1 3.2 3.2v14a3.159 3.159 0 0 1-3.2 3.2Z"
      />
    </g>
  </svg>
);

export default SvgHome;

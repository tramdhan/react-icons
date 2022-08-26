import * as React from "react";

const SvgFolder = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-0.35 0 93.5 93.5"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 3"
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 12"
        d="M77.6 18.1H15.2A13.252 13.252 0 0 0 2 31.3v47a13.252 13.252 0 0 0 13.2 13.2h62.4a13.252 13.252 0 0 0 13.2-13.2v-47a13.252 13.252 0 0 0-13.2-13.2Z"
      />
      <path
        data-name="Path 13"
        d="M2.1 46.1V23.2C2.1 11.5 11.2 2 22.3 2h18.8s3 0 3.5.6c1.2 1.3 1.1 6.6 1.1 6.6h35.1c6.2 1.4 10 4.7 10 23.3"
      />
    </g>
  </svg>
);

export default SvgFolder;

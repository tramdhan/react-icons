import * as React from "react";

const SvgImage = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 -10.4 90.4 90.4"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 19"
      transform="translate(-648.2 -895.5)"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 59"
        d="M724.6 963.1h-62.4a12.035 12.035 0 0 1-12-12v-41.6a12.035 12.035 0 0 1 12-12h62.4a12.035 12.035 0 0 1 12 12v41.6a12.035 12.035 0 0 1-12 12Z"
      />
      <path
        data-name="Path 60"
        d="m668.1 942.6 19-22 13 15.1 8-9.3 13.9 16.1h14.6"
      />
      <circle
        data-name="Ellipse 3"
        cx={6.3}
        cy={6.3}
        r={6.3}
        transform="translate(661.8 908.7)"
      />
    </g>
  </svg>
);

export default SvgImage;

import * as React from "react";

const SvgThumbsDown = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M5.998 19H12v5.974a2.026 2.026 0 0 0 3.608 1.266L23 17h-.001H23V7l-3-2H7.527c-.891 0-1.675.592-1.92 1.451l-2.49 8.725C2.57 17.092 4.007 19 5.998 19zM29 19h-6V5h6z"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle cx={26} cy={9} r={1} />
  </svg>
);

export default SvgThumbsDown;

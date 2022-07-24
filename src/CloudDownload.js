import * as React from "react";

const SvgCloudDownload = ({ title, titleId, ...props }) => (
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
      d="M24.972 12.288C24.608 7.657 20.723 4 16 4a8.937 8.937 0 0 0-8.627 6.451A8.003 8.003 0 0 0 2 18c0 4.411 3.589 8 8 8h13c3.86 0 7-3.14 7-7a6.97 6.97 0 0 0-5.028-6.712zm-4.265 5.419-4 4a.997.997 0 0 1-1.414 0l-4-4A1 1 0 0 1 12 16h2v-4a2 2 0 0 1 4 0v4h2a1.002 1.002 0 0 1 .707 1.707z"
      fill="none"
      stroke="newColor"
    />
  </svg>
);

export default SvgCloudDownload;

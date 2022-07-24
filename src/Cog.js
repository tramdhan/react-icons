import * as React from "react";

const SvgCog = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-0.35 0 82.7 82.7"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 6"
      fill="none"
      stroke="newColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 30"
        d="M52.9 39.8a11.952 11.952 0 0 1-13.4 13.4 12.092 12.092 0 0 1-10.3-10.3 11.952 11.952 0 0 1 13.4-13.4 12.092 12.092 0 0 1 10.3 10.3Z"
      />
      <path
        data-name="Path 31"
        d="M76.1 34.7h-8.5a29.324 29.324 0 0 0-2.5-6.4l6-6s3-3.3 0-6.3l-4.6-4.6s-3-2.7-5.7 0l-6.2 6.2a24.753 24.753 0 0 0-5.5-2.4h.1V6.4S49 2 44.8 2h-6.5s-4 .2-4 4v8.8a23.208 23.208 0 0 0-5.7 2.2l-6.2-6.2s-3.3-3-6.3 0l-4.6 4.6s-2.7 3 0 5.7l6.1 6.1a26.488 26.488 0 0 0-2.5 5.4H6.4S2 32.8 2 37v6.5s.2 4 4 4h8.4a24.337 24.337 0 0 0 2.5 6.5L11 59.9s-3 3.3 0 6.3l4.6 4.6s3 2.7 5.7 0l5.9-5.9a29 29 0 0 0 6.5 2.8v8.6s.2 4.4 4.4 4.4h6.5s4-.2 4-4v-9h-.1a30.79 30.79 0 0 0 5.3-2.1l5.8 5.8s3.3 3 6.3 0l4.6-4.6s2.7-3 0-5.7l-5.9-5.9a25.8 25.8 0 0 0 2.5-5.6h8.5s4.4-.2 4.4-4.4v-6.5s-.1-4-3.9-4Z"
      />
    </g>
  </svg>
);

export default SvgCog;

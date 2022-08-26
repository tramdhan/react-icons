import * as React from "react";

const SvgDatabase = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-10.76 0 103.5 103.5"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g data-name="Group 1">
      <path
        data-name="Path 1"
        d="M41.088 4c26 0 37 9.3 37 9.3v73.4c0 1.9-11.9 12.7-37 12.7-22.9 0-37-10.3-37-12.7V13.3s6.9-9.3 37-9.3m0-4c-31.2 0-39.3 9.9-40.2 11a4.069 4.069 0 0 0-.8 2.4v73.4c0 4.8 8.6 9.2 12.3 10.9a70.668 70.668 0 0 0 28.7 5.8c14.1 0 23.9-3.3 29.6-6 2.7-1.3 11.3-5.8 11.3-10.6V13.5a3.749 3.749 0 0 0-1.4-3c-.5-.6-12.4-10.5-39.5-10.5Z"
        fill={props.color}
      />
      <path
        data-name="Path 2"
        d="M78.788 37.1s-13.3 9.7-37.7 9.7c-24.5 0-38-9.7-38-9.7"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        data-name="Path 3"
        d="M78.688 60.7s-13.2 9.7-37.7 9.7-38.2-9.7-38.2-9.7"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        data-name="Path 4"
        d="M17.788 19a3.372 3.372 0 0 1 3.9 3.9 3.189 3.189 0 0 1-2.6 2.6 3.372 3.372 0 0 1-3.9-3.9 3.606 3.606 0 0 1 2.6-2.6Z"
        fill={props.color}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        data-name="Path 5"
        d="M17.788 51.9a3.372 3.372 0 0 1 3.9 3.9 3.189 3.189 0 0 1-2.6 2.6 3.372 3.372 0 0 1-3.9-3.9 3.313 3.313 0 0 1 2.6-2.6Z"
        fill={props.color}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        data-name="Path 6"
        d="M17.788 78.7a3.372 3.372 0 0 1 3.9 3.9 3.189 3.189 0 0 1-2.6 2.6 3.372 3.372 0 0 1-3.9-3.9 3.452 3.452 0 0 1 2.6-2.6Z"
        fill={props.color}
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        data-name="Path 7"
        d="M30.488 26.1c3.2.3 6.6.4 10.1.4 21 0 38.1-5.3 38.1-11.8s-17.1-11.8-38.1-11.8c-10.1 0-20.5 1.1-27.5 3.1"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={4}
      />
    </g>
  </svg>
);

export default SvgDatabase;

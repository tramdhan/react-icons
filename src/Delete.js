import * as React from "react";

const SvgDelete = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-5.1 0 85.5 85.5"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g data-name="Group 14">
      <path
        data-name="Path 40"
        d="M68.7 33.3H6.6A4.653 4.653 0 0 1 2 28.7v-9.2a4.653 4.653 0 0 1 4.6-4.6h62.1a4.653 4.653 0 0 1 4.6 4.6v9.2a4.653 4.653 0 0 1-4.6 4.6Z"
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={4}
      />
      <path
        data-name="Path 41"
        d="M64.5 36v41c-.7.5-3.2 1.9-10 3.1a108.881 108.881 0 0 1-17.2 1.5 92.907 92.907 0 0 1-16.8-1.5c-6.6-1.2-8.9-2.5-9.6-3V36h53.6m4-4H6.9v45.7c0 5.3 18.5 7.8 30.4 7.8s31.2-2.5 31.2-7.8V32Z"
        fill={props.color}
      />
      <path
        data-name="Line 17"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M25.6 51.6v11.9"
      />
      <path
        data-name="Line 18"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M37.8 48.1V67"
      />
      <path
        data-name="Line 19"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M49.8 51.6v11.9"
      />
      <path
        data-name="Path 42"
        d="M21.9 14.2S20.2 2 36.8 2s16.7 12.2 16.7 12.2"
        fill="none"
        stroke={props.color}
        strokeMiterlimit={10}
        strokeWidth={4}
      />
    </g>
  </svg>
);

export default SvgDelete;

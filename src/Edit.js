import * as React from "react";

const SvgEdit = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-2.56 0 89.725 89.725"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      data-name="Group 11"
      fill="none"
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={4}
    >
      <path
        data-name="Path 53"
        d="M45.8 14.625 11 49.425a3.858 3.858 0 0 0-1.1 2.2l-.8 10.1a2.488 2.488 0 0 0 2.8 2.8l9.8-.8a3.857 3.857 0 0 0 2.2-1.1l35-35a3.041 3.041 0 0 0 .3-4.3l-9.1-9.1a3.052 3.052 0 0 0-4.3.4Z"
      />
      <path
        data-name="Path 54"
        d="m59.3 22.025-7.8-7.8a3.684 3.684 0 0 1 0-5.3l5.8-5.8a3.684 3.684 0 0 1 5.3 0l7.8 7.8a3.684 3.684 0 0 1 0 5.3l-5.8 5.8a3.869 3.869 0 0 1-5.3 0Z"
        strokeLinecap="round"
      />
      <path
        data-name="Path 55"
        d="M78.3 87.725h-72a4.268 4.268 0 0 1-4.3-4.3v-3.3a4.268 4.268 0 0 1 4.3-4.3h72a4.268 4.268 0 0 1 4.3 4.3v3.3a4.268 4.268 0 0 1-4.3 4.3Z"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default SvgEdit;

import React, { FC, SVGProps } from "react";

const WindowsIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.75 17.8721V31.6758L15.5801 29.4443V17.8721H31.75ZM13.1592 17.8721V29.1162L1.25 27.4746V17.8721H13.1592ZM31.75 15.2832H15.5801V3.55469L31.75 1.32324V15.2832ZM13.1592 15.2832H1.25V5.52441L13.1592 3.88281V15.2832Z"
      fill="currentColor"
    />
  </svg>
);

export default WindowsIcon;

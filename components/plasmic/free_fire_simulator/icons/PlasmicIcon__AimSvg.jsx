// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AimSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 426.667 426.667"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M392.533 192C384 108.8 317.867 42.667 234.667 32V0H192v32C108.8 42.667 42.667 108.8 34.133 192H0v42.667h32c10.667 83.2 76.8 149.333 157.867 157.867v34.133h42.667v-34.133c83.2-10.667 149.333-76.8 157.867-157.867h36.267V192h-34.135zm-42.666 42.667c-8.533 59.733-55.467 106.667-115.2 115.2V320H192v29.867c-59.733-8.533-106.667-55.467-115.2-115.2h29.867V192H76.8C85.333 132.267 132.267 85.333 192 76.8v29.867h42.667V76.8c59.733 8.533 106.667 55.467 115.2 115.2H320v42.667h29.867z"
        }
        fill={"currentColor"}
        opacity={"1"}
        data-original={"#000000"}
      ></path>

      <circle
        cx={"213.333"}
        cy={"213.333"}
        r={"64"}
        fill={"currentColor"}
        opacity={"1"}
        data-original={"#000000"}
      ></circle>
    </svg>
  );
}

export default AimSvgIcon;
/* prettier-ignore-end */

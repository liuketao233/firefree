// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Question2Svg2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      xmlSpace={"preserve"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 0C114.509 0 0 114.496 0 256c0 141.489 114.496 256 256 256 141.491 0 256-114.496 256-256C512 114.509 397.504 0 256 0zm-7.575 375.819c-14.49 0-25.61-12.131-25.61-25.948 0-14.153 11.457-25.946 25.61-25.946 14.154 0 25.946 11.794 25.946 25.947 0 13.815-11.457 25.947-25.946 25.947zm38.414-131.083c-18.533 14.49-18.871 24.599-18.871 42.121 0 6.404-3.37 13.817-19.881 13.817-13.817 0-18.533-5.055-18.533-22.577 0-28.98 12.805-42.796 22.577-51.22 11.12-9.436 29.991-19.881 29.991-38.077 0-15.502-13.479-22.915-30.328-22.915-34.371 0-26.957 25.948-45.155 25.948-9.098 0-20.218-6.067-20.218-19.208 0-18.196 20.892-45.155 66.384-45.155 43.132 0 71.775 23.926 71.775 55.601s-28.643 54.589-37.741 61.665z"
        }
        fill={"currentColor"}
        opacity={"1"}
        data-original={"#000000"}
      ></path>
    </svg>
  );
}

export default Question2Svg2Icon;
/* prettier-ignore-end */

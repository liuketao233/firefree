// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function QuestionSvg2Icon(props) {
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

      <g data-name={"Layer 2"}>
        <g data-name={"Layer 1"}>
          <g data-name={"Question mark"}>
            <rect
              width={"512"}
              height={"512"}
              fill={"#2e2e2e"}
              rx={"256"}
              opacity={"1"}
              data-original={"#231f20"}
            ></rect>

            <path
              fill={"#fff"}
              d={
                "M167.67 196.113q0-16.782 10.776-34.007t31.446-28.532q20.672-11.3 48.228-11.306 25.611 0 45.225 9.452t30.3 25.705a63.061 63.061 0 0110.688 35.331q0 15.016-6.1 26.323a80.469 80.469 0 01-14.486 19.52q-8.39 8.217-30.119 27.648a122.942 122.942 0 00-9.628 9.628 39.065 39.065 0 00-5.387 7.6 36.932 36.932 0 00-2.738 6.89q-.974 3.446-2.916 12.1-3.358 18.375-21.021 18.372a21.482 21.482 0 01-15.459-6.006q-6.273-6-6.271-17.842 0-14.839 4.592-25.7a65.3 65.3 0 0112.19-19.089 279.09 279.09 0 0120.492-19.521q11.305-9.891 16.343-14.928a50.613 50.613 0 008.478-11.218 27.13 27.13 0 003.444-13.426 31.225 31.225 0 00-10.51-23.849q-10.514-9.712-27.117-9.716-19.434 0-28.618 9.8t-15.548 28.883q-6.007 19.975-22.788 19.975a22.394 22.394 0 01-16.695-6.978q-6.801-6.981-6.801-15.109zm86.211 193.619a27.794 27.794 0 01-18.814-6.978q-8.042-6.976-8.039-19.521a25.151 25.151 0 017.772-18.726 26.263 26.263 0 0119.081-7.6 25.946 25.946 0 0126.319 26.326q0 12.368-7.951 19.432a26.824 26.824 0 01-18.368 7.067z"
              }
              opacity={"1"}
              data-original={"#ffffff"}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default QuestionSvg2Icon;
/* prettier-ignore-end */

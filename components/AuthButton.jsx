import * as React from "react";
import { PlasmicAuthButton } from "./plasmic/free_fire_simulator/PlasmicAuthButton";

function AuthButton_(props, ref) {
  const { onClick, ...rest } = props; // 提取 onClick 和其他 props
  const { plasmicProps } = PlasmicAuthButton.useBehavior(props, ref);
  return <PlasmicAuthButton {...plasmicProps} onClick={onClick} />;
}

const AuthButton = React.forwardRef(AuthButton_);

export default Object.assign(AuthButton, { __plumeType: "button" });

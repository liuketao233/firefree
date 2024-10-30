// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: C3Ln22ZpqA1v
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import InfoArea from "../../InfoArea"; // plasmic-import: 6Fzwolj6rkvl/component
import FlipSelection from "../../FlipSelection"; // plasmic-import: ixjtBzCd3xbW/component
import AmountSelection from "../../AmountSelection"; // plasmic-import: 5nXKPJRaklYa/component
import OtherToolsMobile from "../../OtherToolsMobile"; // plasmic-import: HVb6eWdyYEJZ/component
import OtherToolsDesktop from "../../OtherToolsDesktop"; // plasmic-import: wvxmlV4jcUs7/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicGameBody.module.css"; // plasmic-import: C3Ln22ZpqA1v/css

createPlasmicElementProxy;

export const PlasmicGameBody__VariantProps = new Array();

export const PlasmicGameBody__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGameBody__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  // console.log(props,"PlasmicGameBody__RenderFunc")
  const $translator = usePlasmicTranslator?.();
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const doGame = overrides.root.props.doGame;
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });
  // console.log(overrides,"PlasmicGameBody__RenderFunc");
  const [choice, setChoice] = React.useState(3);
  const [amount, setAmount] = React.useState(100);

  // 回调函数：用于控制 Modal 的显示状态
  const handleChoice = (value) => {
    setChoice(value);
    // console.log(value, "handleChoice");
    
    setTimeout(doGame(choice,amount,'airdrop'),200)
  };
  const handleAmount = (value) => {
    setAmount(value);
    // console.log(value, "handleAmount");
  };
  const handleAmountMulti = (multi) => {
    let value = Math.round(amount*multi);
    let balance = overrides.balance;
    setAmount(value < 100?100:(value>balance?balance:value));
    // console.log(value, "handleAmountMulti");
  };

  
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"gameDivision"}
        data-plasmic-override={overrides.gameDivision}
        hasGap={true}
        className={classNames(projectcss.all, sty.gameDivision)}
      >
        <InfoArea
          data-plasmic-name={"infoArea"}
          data-plasmic-override={overrides.infoArea}
          className={classNames("__wab_instance", sty.infoArea)}
        />

        <FlipSelection
          overrides={{
            choiceBackground3:{
              props: {
                onClick: () => handleChoice(3),
              },
              
            },
            choiceBackground4:{
              props: {
                onClick: () => handleChoice(4),
              },
              
            },
            amount4:amount,
            amount2:amount
          }}
          data-plasmic-name={"flipSelection"}
          data-plasmic-override={overrides.flipSelection}
          // amount={[amount]}
          className={classNames("__wab_instance", sty.flipSelection)}
          scenario={["airdrop"]}
        />

        <AmountSelection
          overrides={{
            curentAmount:amount
          }}
          data-plasmic-name={"amountSelection"}
          data-plasmic-override={overrides.amountSelection}
          className={classNames("__wab_instance", sty.amountSelection)}
          amount={[amount]}
          onAmountChange={handleAmount}
          onAmountMulti={handleAmountMulti}
        />

        {(
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? false
            : true
        ) ? (
          <OtherToolsMobile
            data-plasmic-name={"otherToolsMobile"}
            data-plasmic-override={overrides.otherToolsMobile}
            className={classNames("__wab_instance", sty.otherToolsMobile)}
          />
        ) : null}
      </Stack__>
      <OtherToolsDesktop
        data-plasmic-name={"otherToolsDesktop"}
        data-plasmic-override={overrides.otherToolsDesktop}
        className={classNames("__wab_instance", sty.otherToolsDesktop)}
      />
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "gameDivision",
    "infoArea",
    "flipSelection",
    "amountSelection",
    "otherToolsMobile",
    "otherToolsDesktop"
  ],

  gameDivision: [
    "gameDivision",
    "infoArea",
    "flipSelection",
    "amountSelection",
    "otherToolsMobile"
  ],

  infoArea: ["infoArea"],
  flipSelection: ["flipSelection"],
  amountSelection: ["amountSelection"],
  otherToolsMobile: ["otherToolsMobile"],
  otherToolsDesktop: ["otherToolsDesktop"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicGameBody__ArgProps,
          internalVariantPropNames: PlasmicGameBody__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGameBody__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGameBody";
  } else {
    func.displayName = `PlasmicGameBody.${nodeName}`;
  }
  return func;
}

export const PlasmicGameBody = Object.assign(
  // Top-level PlasmicGameBody renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    gameDivision: makeNodeComponent("gameDivision"),
    infoArea: makeNodeComponent("infoArea"),
    flipSelection: makeNodeComponent("flipSelection"),
    amountSelection: makeNodeComponent("amountSelection"),
    otherToolsMobile: makeNodeComponent("otherToolsMobile"),
    otherToolsDesktop: makeNodeComponent("otherToolsDesktop"),
    // Metadata about props expected for PlasmicGameBody
    internalVariantProps: PlasmicGameBody__VariantProps,
    internalArgProps: PlasmicGameBody__ArgProps
  }
);

export default PlasmicGameBody;
/* prettier-ignore-end */

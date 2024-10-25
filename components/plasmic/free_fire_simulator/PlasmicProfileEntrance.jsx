// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: kD3fRv5nUYyl
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  set as $stateSet,
  useCurrentUser,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicProfileEntrance.module.css"; // plasmic-import: kD3fRv5nUYyl/css
import Layer2Icon from "./icons/PlasmicIcon__Layer2"; // plasmic-import: oV9dA2w2mJ_S/icon

createPlasmicElementProxy;

export const PlasmicProfileEntrance__VariantProps = new Array();

export const PlasmicProfileEntrance__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfileEntrance__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
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
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"profile"}
      data-plasmic-override={overrides.profile}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.profile
      )}
      onClick={async event => {
        console.log("onClick PlasmicProfileEntrance__RenderFunc");
        const $steps = {};
        $steps["profileModal"] = true
          ? (() => {
              const actionArgs = { operation: 0 };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;
                $stateSet(objRoot, variablePath, value);
                return value;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["profileModal"] != null &&
          typeof $steps["profileModal"] === "object" &&
          typeof $steps["profileModal"].then === "function"
        ) {
          $steps["profileModal"] = await $steps["profileModal"];
        }
      }}
    >
      <div
        data-plasmic-name={"profileBackground"}
        data-plasmic-override={overrides.profileBackground}
        className={classNames(projectcss.all, sty.profileBackground)}
      />

      <div
        data-plasmic-name={"profileIcon"}
        data-plasmic-override={overrides.profileIcon}
        className={classNames(projectcss.all, sty.profileIcon)}
      >
        <Layer2Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  profile: ["profile", "profileBackground", "profileIcon", "svg"],
  profileBackground: ["profileBackground"],
  profileIcon: ["profileIcon", "svg"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProfileEntrance__ArgProps,
          internalVariantPropNames: PlasmicProfileEntrance__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileEntrance__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profile") {
    func.displayName = "PlasmicProfileEntrance";
  } else {
    func.displayName = `PlasmicProfileEntrance.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileEntrance = Object.assign(
  // Top-level PlasmicProfileEntrance renders the root element
  makeNodeComponent("profile"),
  {
    // Helper components rendering sub-elements
    profileBackground: makeNodeComponent("profileBackground"),
    profileIcon: makeNodeComponent("profileIcon"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicProfileEntrance
    internalVariantProps: PlasmicProfileEntrance__VariantProps,
    internalArgProps: PlasmicProfileEntrance__ArgProps
  }
);

export default PlasmicProfileEntrance;
/* prettier-ignore-end */

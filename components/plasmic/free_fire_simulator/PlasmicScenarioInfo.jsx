// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: _P5d0a1oi0bS
import * as React from "react";
import { useRouter } from "next/router";
import {
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicScenarioInfo.module.css"; // plasmic-import: _P5d0a1oi0bS/css

createPlasmicElementProxy;

export const PlasmicScenarioInfo__VariantProps = new Array("differentScenario");

export const PlasmicScenarioInfo__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicScenarioInfo__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "differentScenario",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.differentScenario
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });
  return (
    <div
      data-plasmic-name={"scenarioInfo"}
      data-plasmic-override={overrides.scenarioInfo}
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
        sty.scenarioInfo,
        {
          [sty.scenarioInfodifferentScenario_airDrop]: hasVariant(
            $state,
            "differentScenario",
            "airDrop"
          ),
          [sty.scenarioInfodifferentScenario_vehicle]: hasVariant(
            $state,
            "differentScenario",
            "vehicle"
          )
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__c6Za)}>
        <div
          className={classNames(projectcss.all, sty.freeBox__dhAnA, {
            [sty.freeBoxdifferentScenario_vehicle__dhAnAkDxs]: hasVariant(
              $state,
              "differentScenario",
              "vehicle"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kO7CR,
              {
                [sty.textdifferentScenario_airDrop__kO7CRu2Sus]: hasVariant(
                  $state,
                  "differentScenario",
                  "airDrop"
                ),
                [sty.textdifferentScenario_firstAid__kO7CRXn58T]: hasVariant(
                  $state,
                  "differentScenario",
                  "firstAid"
                ),
                [sty.textdifferentScenario_toxic__kO7CRWvqTg]: hasVariant(
                  $state,
                  "differentScenario",
                  "toxic"
                ),
                [sty.textdifferentScenario_vehicle__kO7CRkDxs]: hasVariant(
                  $state,
                  "differentScenario",
                  "vehicle"
                )
              }
            )}
          >
            <Trans__>
              {hasVariant($state, "differentScenario", "toxic")
                ? "\u6bd2\u5708\u7f29\u51cf"
                : hasVariant($state, "differentScenario", "firstAid")
                ? "\u961f\u53cb\u53d7\u4f24"
                : hasVariant($state, "differentScenario", "vehicle")
                ? "\u53d1\u73b0\u8f7d\u5177"
                : hasVariant($state, "differentScenario", "airDrop")
                ? "\u7a7a\u6295\u7838\u8138"
                : "\u7a7a\u6295\u7838\u8138"}
            </Trans__>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cperp,
              {
                [sty.textdifferentScenario_airDrop__cperpu2Sus]: hasVariant(
                  $state,
                  "differentScenario",
                  "airDrop"
                ),
                [sty.textdifferentScenario_vehicle__cperpkDxs]: hasVariant(
                  $state,
                  "differentScenario",
                  "vehicle"
                )
              }
            )}
          >
            <Trans__>{"\u4f60\u7684\u9009\u62e9\u662f\u2026"}</Trans__>
          </div>
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  scenarioInfo: ["scenarioInfo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicScenarioInfo__ArgProps,
          internalVariantPropNames: PlasmicScenarioInfo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicScenarioInfo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "scenarioInfo") {
    func.displayName = "PlasmicScenarioInfo";
  } else {
    func.displayName = `PlasmicScenarioInfo.${nodeName}`;
  }
  return func;
}

export const PlasmicScenarioInfo = Object.assign(
  // Top-level PlasmicScenarioInfo renders the root element
  makeNodeComponent("scenarioInfo"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicScenarioInfo
    internalVariantProps: PlasmicScenarioInfo__VariantProps,
    internalArgProps: PlasmicScenarioInfo__ArgProps
  }
);

export default PlasmicScenarioInfo;
/* prettier-ignore-end */

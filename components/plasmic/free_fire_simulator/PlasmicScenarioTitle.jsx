// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: jAxjuzQC8iMd
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicScenarioTitle.module.css"; // plasmic-import: jAxjuzQC8iMd/css

createPlasmicElementProxy;

export const PlasmicScenarioTitle__VariantProps = new Array();

export const PlasmicScenarioTitle__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicScenarioTitle__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });
  return (
    <div
      data-plasmic-name={"senarioIcon"}
      data-plasmic-override={overrides.senarioIcon}
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
        sty.senarioIcon
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"_5Edcf0Fe644A465Dedbb93E938B289Be2"}
          data-plasmic-override={overrides._5Edcf0Fe644A465Dedbb93E938B289Be2}
          className={classNames(
            projectcss.all,
            sty._5Edcf0Fe644A465Dedbb93E938B289Be2
          )}
        />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  senarioIcon: ["senarioIcon", "freeBox", "_5Edcf0Fe644A465Dedbb93E938B289Be2"],
  freeBox: ["freeBox", "_5Edcf0Fe644A465Dedbb93E938B289Be2"],
  _5Edcf0Fe644A465Dedbb93E938B289Be2: ["_5Edcf0Fe644A465Dedbb93E938B289Be2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicScenarioTitle__ArgProps,
          internalVariantPropNames: PlasmicScenarioTitle__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicScenarioTitle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "senarioIcon") {
    func.displayName = "PlasmicScenarioTitle";
  } else {
    func.displayName = `PlasmicScenarioTitle.${nodeName}`;
  }
  return func;
}

export const PlasmicScenarioTitle = Object.assign(
  // Top-level PlasmicScenarioTitle renders the root element
  makeNodeComponent("senarioIcon"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    _5Edcf0Fe644A465Dedbb93E938B289Be2: makeNodeComponent(
      "_5Edcf0Fe644A465Dedbb93E938B289Be2"
    ),
    // Metadata about props expected for PlasmicScenarioTitle
    internalVariantProps: PlasmicScenarioTitle__VariantProps,
    internalArgProps: PlasmicScenarioTitle__ArgProps
  }
);

export default PlasmicScenarioTitle;
/* prettier-ignore-end */

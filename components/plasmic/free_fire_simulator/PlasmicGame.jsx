// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: 1atz-K43T13v
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import TopNavBar from "../../TopNavBar"; // plasmic-import: ABnpG58oqYch/component
import GameBody from "../../GameBody"; // plasmic-import: C3Ln22ZpqA1v/component
import ModalMask from "../../ModalMask"; // plasmic-import: c-kzTwxjNY33/component
import ProfileModal from "../../ProfileModal"; // plasmic-import: YFf5Ee9Vj6e7/component
import TopUp1stStepModal from "../../TopUp1stStepModal"; // plasmic-import: 3J-XRJL-oYU0/component
import TopUp2ndStepModal from "../../TopUp2ndStepModal"; // plasmic-import: BfWnrpCrfiGl/component
import Withdraw1stStepModal from "../../Withdraw1stStepModal"; // plasmic-import: dbMG3IAfZ2Xo/component
import Withdraw2ndStepModal from "../../Withdraw2ndStepModal"; // plasmic-import: HgNobPpn0sQA/component
import Withdraw3rdStepModal from "../../Withdraw3rdStepModal"; // plasmic-import: f_d7OmVST3AG/component
import AllRecordsModal from "../../AllRecordsModal"; // plasmic-import: GbYpmuusjDv8/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicGame.module.css"; // plasmic-import: 1atz-K43T13v/css

createPlasmicElementProxy;

export const PlasmicGame__VariantProps = new Array();

export const PlasmicGame__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicGame__RenderFunc(props) {
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
        path: "profileModal2",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "toggleModal",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
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
          sty.root
        )}
      >
        <div
          data-plasmic-name={"mainContainer"}
          data-plasmic-override={overrides.mainContainer}
          className={classNames(projectcss.all, sty.mainContainer)}
        >
          <TopNavBar
            data-plasmic-name={"topNavBar"}
            data-plasmic-override={overrides.topNavBar}
            className={classNames("__wab_instance", sty.topNavBar)}
          />

          <GameBody
            data-plasmic-name={"gameBody"}
            data-plasmic-override={overrides.gameBody}
            className={classNames("__wab_instance", sty.gameBody)}
          />
        </div>
        <ModalMask
          data-plasmic-name={"modalMask"}
          data-plasmic-override={overrides.modalMask}
          className={classNames("__wab_instance", sty.modalMask)}
        />

        <div
          data-plasmic-name={"allModals"}
          data-plasmic-override={overrides.allModals}
          className={classNames(projectcss.all, sty.allModals)}
        >
          <ProfileModal
            data-plasmic-name={"profileModal"}
            data-plasmic-override={overrides.profileModal}
            className={classNames("__wab_instance", sty.profileModal)}
          />

          <TopUp1stStepModal
            data-plasmic-name={"topUp1stStepModal"}
            data-plasmic-override={overrides.topUp1stStepModal}
            className={classNames("__wab_instance", sty.topUp1stStepModal)}
          />

          <TopUp2ndStepModal
            data-plasmic-name={"topUp2ndStepModal"}
            data-plasmic-override={overrides.topUp2ndStepModal}
            className={classNames("__wab_instance", sty.topUp2ndStepModal)}
          />

          <Withdraw1stStepModal
            data-plasmic-name={"withdraw1stStepModal"}
            data-plasmic-override={overrides.withdraw1stStepModal}
            className={classNames("__wab_instance", sty.withdraw1stStepModal)}
          />

          <Withdraw2ndStepModal
            data-plasmic-name={"withdraw2ndStepModal"}
            data-plasmic-override={overrides.withdraw2ndStepModal}
            className={classNames("__wab_instance", sty.withdraw2ndStepModal)}
          />

          <Withdraw3rdStepModal
            data-plasmic-name={"withdraw3rdStepModal"}
            data-plasmic-override={overrides.withdraw3rdStepModal}
            className={classNames("__wab_instance", sty.withdraw3rdStepModal)}
          />

          <AllRecordsModal
            data-plasmic-name={"allRecordsModal"}
            data-plasmic-override={overrides.allRecordsModal}
            className={classNames("__wab_instance", sty.allRecordsModal)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "mainContainer",
    "topNavBar",
    "gameBody",
    "modalMask",
    "allModals",
    "profileModal",
    "topUp1stStepModal",
    "topUp2ndStepModal",
    "withdraw1stStepModal",
    "withdraw2ndStepModal",
    "withdraw3rdStepModal",
    "allRecordsModal"
  ],

  mainContainer: ["mainContainer", "topNavBar", "gameBody"],
  topNavBar: ["topNavBar"],
  gameBody: ["gameBody"],
  modalMask: ["modalMask"],
  allModals: [
    "allModals",
    "profileModal",
    "topUp1stStepModal",
    "topUp2ndStepModal",
    "withdraw1stStepModal",
    "withdraw2ndStepModal",
    "withdraw3rdStepModal",
    "allRecordsModal"
  ],

  profileModal: ["profileModal"],
  topUp1stStepModal: ["topUp1stStepModal"],
  topUp2ndStepModal: ["topUp2ndStepModal"],
  withdraw1stStepModal: ["withdraw1stStepModal"],
  withdraw2ndStepModal: ["withdraw2ndStepModal"],
  withdraw3rdStepModal: ["withdraw3rdStepModal"],
  allRecordsModal: ["allRecordsModal"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicGame__ArgProps,
          internalVariantPropNames: PlasmicGame__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGame__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGame";
  } else {
    func.displayName = `PlasmicGame.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "ncwW2Qgif2pGwQDF81hXqa"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicGame = Object.assign(
  // Top-level PlasmicGame renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    mainContainer: makeNodeComponent("mainContainer"),
    topNavBar: makeNodeComponent("topNavBar"),
    gameBody: makeNodeComponent("gameBody"),
    modalMask: makeNodeComponent("modalMask"),
    allModals: makeNodeComponent("allModals"),
    profileModal: makeNodeComponent("profileModal"),
    topUp1stStepModal: makeNodeComponent("topUp1stStepModal"),
    topUp2ndStepModal: makeNodeComponent("topUp2ndStepModal"),
    withdraw1stStepModal: makeNodeComponent("withdraw1stStepModal"),
    withdraw2ndStepModal: makeNodeComponent("withdraw2ndStepModal"),
    withdraw3rdStepModal: makeNodeComponent("withdraw3rdStepModal"),
    allRecordsModal: makeNodeComponent("allRecordsModal"),
    // Metadata about props expected for PlasmicGame
    internalVariantProps: PlasmicGame__VariantProps,
    internalArgProps: PlasmicGame__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicGame;
/* prettier-ignore-end */

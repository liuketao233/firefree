// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: 5VHeEaXV_0Al
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant,
  useCurrentUser,
  usePlasmicTranslator
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import AuthButton from "../../AuthButton"; // plasmic-import: x4yE4ZG-E551/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import SignUpPromptDesktop from "../../SignUpPromptDesktop"; // plasmic-import: lfoX2K6g2IqZ/component
import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicAuth.module.css"; // plasmic-import: 5VHeEaXV_0Al/css

createPlasmicElementProxy;

export const PlasmicAuth__VariantProps = new Array();

export const PlasmicAuth__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuth__RenderFunc(props) {
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
  const popupCenter = (url, title) => {
    console.log(url, title, "onclick  google auth");
    const dualScreenLeft = window.screenLeft ?? window.screenX;
    const dualScreenTop = window.screenTop ?? window.screenY;

    const width =
      window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

    const height =
      window.innerHeight ??
      document.documentElement.clientHeight ??
      screen.height;

    const systemZoom = width / window.screen.availWidth;

    const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
    const top = (height - 550) / 2 / systemZoom + dualScreenTop;

    const newWindow = window.open(
      url,
      title,
      `width=${500 / systemZoom},height=${550 / systemZoom
      },top=${top},left=${left}`
    );

    newWindow?.focus();
  };
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__nerx4)}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/free_fire_simulator/images/image.png",
                fullWidth: 1125,
                fullHeight: 1316,
                aspectRatio: undefined
              }}
            />

            <h1
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1__tUc3B
              )}
            >
              <Trans__>
                {
                  "\u53c2\u4e0e\u6e38\u620f\n\u6709\u673a\u4f1a\u9886\u53d6\u6700\u9ad8\nR$ 10,000\u73b0\u91d1\u5927\u5956\uff01"
                }
              </Trans__>
            </h1>
            <div className={classNames(projectcss.all, sty.freeBox__dwDkh)}>
              <AuthButton onClick={() => popupCenter("/google-signin", "Sample Sign In")}
                data-plasmic-name={"authButton"}
                data-plasmic-override={overrides.authButton}
                className={classNames("__wab_instance", sty.authButton)}
                showStartIcon={true}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  <Trans__>
                    {"\u4f7f\u7528Google\u4e00\u952e\u767b\u5f55"}
                  </Trans__>
                </div>
              </AuthButton>
            </div>
          </Stack__>
          {/* <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
            code={
              '<iframe src="https://player.vimeo.com/video/1021208209?autoplay=1&muted=1&loop=1&background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; min-width: 100%; min-height: 100%; object-fit: cover; filter: brightness(50%); overflow: hidden;"> </iframe>'
            }
          /> */}

          {(
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? true
              : false
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__gvABl)}>
              <div className={classNames(projectcss.all, sty.freeBox__kxjUl)}>
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__t114Q
                  )}
                >
                  <Trans__>
                    {
                      "\u6587\u6848\u5360\u4f4d\u7b26\n\u6682\u65f6\u8fd8\u6ca1\u60f3\u597d\n\u9884\u8ba1\u662f3\u884c"
                    }
                  </Trans__>
                </h1>
              </div>
              <SignUpPromptDesktop
                data-plasmic-name={"signUpPromptDesktop"}
                data-plasmic-override={overrides.signUpPromptDesktop}
                className={classNames(
                  "__wab_instance",
                  sty.signUpPromptDesktop
                )}
              />
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "authButton",
    "text",
    "embedHtml",
    "signUpPromptDesktop"
  ],

  img: ["img"],
  authButton: ["authButton", "text"],
  text: ["text"],
  embedHtml: ["embedHtml"],
  signUpPromptDesktop: ["signUpPromptDesktop"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAuth__ArgProps,
          internalVariantPropNames: PlasmicAuth__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuth__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuth";
  } else {
    func.displayName = `PlasmicAuth.${nodeName}`;
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

export const PlasmicAuth = Object.assign(
  // Top-level PlasmicAuth renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    authButton: makeNodeComponent("authButton"),
    text: makeNodeComponent("text"),
    embedHtml: makeNodeComponent("embedHtml"),
    signUpPromptDesktop: makeNodeComponent("signUpPromptDesktop"),
    // Metadata about props expected for PlasmicAuth
    internalVariantProps: PlasmicAuth__VariantProps,
    internalArgProps: PlasmicAuth__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAuth;
/* prettier-ignore-end */

// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/free_fire_simulator/PlasmicGlobalContextsProvider";
import { PlasmicGame } from "../components/plasmic/free_fire_simulator/PlasmicGame";
import { PlasmicAuth } from "../components/plasmic/free_fire_simulator/PlasmicAuth";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

function Game() {
  const { data: session, status } = useSession();
  // Use PlasmicGame to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicGame are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicGame is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const handleButtonClick = () => {
    // console.log(url, title, "onclick  google auth");
    const url = "/google-signin";
    const title = "Sample Sign In";
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
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        {status === "authenticated" ? <PlasmicGame /> : <PlasmicAuth overrides={{
          onClickAuthButton:handleButtonClick
        }}/>}
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
  
}

export default Game;

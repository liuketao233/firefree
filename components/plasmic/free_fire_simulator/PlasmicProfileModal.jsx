// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: YFf5Ee9Vj6e7
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  Trans as Trans__,
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
import sty from "./PlasmicProfileModal.module.css"; // plasmic-import: YFf5Ee9Vj6e7/css
import Layer22Icon from "./icons/PlasmicIcon__Layer22"; // plasmic-import: SIu0NpOppXl6/icon
import Soldier11Icon from "./icons/PlasmicIcon__Soldier11"; // plasmic-import: nRitweSpgLPJ/icon
import Group17Icon from "./icons/PlasmicIcon__Group17"; // plasmic-import: FRCrkUO6g2z5/icon
import Group18Icon from "./icons/PlasmicIcon__Group18"; // plasmic-import: 5wXixT2uzoKb/icon
import Deposit11Icon from "./icons/PlasmicIcon__Deposit11"; // plasmic-import: X84fqKcG3R3N/icon
import Group19Icon from "./icons/PlasmicIcon__Group19"; // plasmic-import: udVqa2ilDwQd/icon
import IkonIcon from "./icons/PlasmicIcon__Ikon"; // plasmic-import: 2SmHzuoWEca5/icon
import Edit1Icon from "./icons/PlasmicIcon__Edit1"; // plasmic-import: OxtLLtnrCeBE/icon

createPlasmicElementProxy;

export const PlasmicProfileModal__VariantProps = new Array();

export const PlasmicProfileModal__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProfileModal__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  console.log(overrides,"PlasmicProfileModal__RenderFunc");
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
    <Stack__
      as={"div"}
      data-plasmic-name={"profileModal"}
      data-plasmic-override={overrides.profileModal}
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
        sty.profileModal
      )}
    >
      <div
        data-plasmic-name={"profileHeader"}
        data-plasmic-override={overrides.profileHeader}
        className={classNames(projectcss.all, sty.profileHeader)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__tmWwZ
          )}
        >
          <Trans__>{"My Account"}</Trans__>
        </div>
        <Layer22Icon
          data-plasmic-name={"closeModal"}
          data-plasmic-override={overrides.closeModal}
          className={classNames(projectcss.all, sty.closeModal)}
          role={"img"}
        />
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"accountInfo"}
        data-plasmic-override={overrides.accountInfo}
        hasGap={true}
        className={classNames(projectcss.all, sty.accountInfo)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__kPziz)}>
          <div
            data-plasmic-name={"avatarSectionMobile"}
            data-plasmic-override={overrides.avatarSectionMobile}
            className={classNames(projectcss.all, sty.avatarSectionMobile)}
          >
            <div
              data-plasmic-name={"avatar3"}
              data-plasmic-override={overrides.avatar3}
              className={classNames(projectcss.all, sty.avatar3)}
            >
              <PlasmicImg__
                data-plasmic-name={"copyIcon2"}
                data-plasmic-override={overrides.copyIcon2}
                alt={""}
                className={classNames(sty.copyIcon2)}
                displayHeight={"10px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"10px"}
                loading={"lazy"}
                src={{
                  src: overrides.accountInfo.data[0].image,
                  fullWidth: 10,
                  fullHeight: 10,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__v1XTy
                )}
              >
                <Trans__>{overrides.accountInfo.data[0].name}</Trans__>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__j3Pah
                )}
              >
                <Trans__>{"ID: "}{overrides.accountInfo.data[0]._id}</Trans__>
              </div>
              <div
                data-plasmic-name={"avatar4"}
                data-plasmic-override={overrides.avatar4}
                className={classNames(projectcss.all, sty.avatar4)}
              >
                <PlasmicImg__
                  data-plasmic-name={"avatarBackground2"}
                  data-plasmic-override={overrides.avatarBackground2}
                  alt={""}
                  className={classNames(sty.avatarBackground2)}
                  displayHeight={"60px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"60px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/free_fire_simulator/images/ellipse141.svg",
                    fullWidth: 60,
                    fullHeight: 60,
                    aspectRatio: 1
                  }}
                />

                <Soldier11Icon
                  data-plasmic-name={"avatarMobile2"}
                  data-plasmic-override={overrides.avatarMobile2}
                  className={classNames(projectcss.all, sty.avatarMobile2)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"walletSectionMobile"}
            data-plasmic-override={overrides.walletSectionMobile}
            className={classNames(projectcss.all, sty.walletSectionMobile)}
          >
            <div
              data-plasmic-name={"walletTitleMobile2"}
              data-plasmic-override={overrides.walletTitleMobile2}
              className={classNames(projectcss.all, sty.walletTitleMobile2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__g2Ym6
                )}
              >
                <Trans__>{"\u94b1\u5305"}</Trans__>
              </div>
            </div>
            <div
              data-plasmic-name={"gameBalanceLargeMobile2"}
              data-plasmic-override={overrides.gameBalanceLargeMobile2}
              className={classNames(
                projectcss.all,
                sty.gameBalanceLargeMobile2
              )}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rLlk
                )}
              >
                <Trans__>{overrides.accountInfo.data[0].balance | 0}</Trans__>
              </div>
              <div
                data-plasmic-name={"group2"}
                data-plasmic-override={overrides.group2}
                className={classNames(projectcss.all, sty.group2)}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__pqIe)}
                  displayHeight={"28.553px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"31.999px"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/free_fire_simulator/images/group16.svg",
                    fullWidth: 31.999,
                    fullHeight: 28.553,
                    aspectRatio: 1.103448
                  }}
                />

                <Group17Icon
                  className={classNames(projectcss.all, sty.svg__oGvd)}
                  role={"img"}
                />

                <Group17Icon
                  className={classNames(projectcss.all, sty.svg__nWup)}
                  role={"img"}
                />

                <Group18Icon
                  className={classNames(projectcss.all, sty.svg__cZvX5)}
                  role={"img"}
                />
              </div>
            </div>
            <div
              data-plasmic-name={"menuSets2"}
              data-plasmic-override={overrides.menuSets2}
              className={classNames(projectcss.all, sty.menuSets2)}
            >
              <div
                data-plasmic-name={"topUpMobile2"}
                data-plasmic-override={overrides.topUpMobile2}
                className={classNames(projectcss.all, sty.topUpMobile2)}
              >
                <div
                  data-plasmic-name={"rectangle4247"}
                  data-plasmic-override={overrides.rectangle4247}
                  className={classNames(projectcss.all, sty.rectangle4247)}
                />

                <div
                  className={classNames(projectcss.all, sty.freeBox___4AnqY)}
                >
                  <Deposit11Icon
                    className={classNames(projectcss.all, sty.svg__iyf6M)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mCto
                    )}
                  >
                    <Trans__>{"\u8d2d\u4e70\u94bb\u77f3"}</Trans__>
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"withdrawMobile2"}
                data-plasmic-override={overrides.withdrawMobile2}
                className={classNames(projectcss.all, sty.withdrawMobile2)}
              >
                <div
                  data-plasmic-name={"rectangle4248"}
                  data-plasmic-override={overrides.rectangle4248}
                  className={classNames(projectcss.all, sty.rectangle4248)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__wInIg)}>
                  <div
                    data-plasmic-name={"withdraw2"}
                    data-plasmic-override={overrides.withdraw2}
                    className={classNames(projectcss.all, sty.withdraw2)}
                  >
                    <Group19Icon
                      className={classNames(projectcss.all, sty.svg__lPTgo)}
                      role={"img"}
                    />
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__epfhU
                    )}
                  >
                    <Trans__>{"\u5151\u6362\u73b0\u91d1"}</Trans__>
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"historyRecords2"}
                data-plasmic-override={overrides.historyRecords2}
                className={classNames(projectcss.all, sty.historyRecords2)}
              >
                <div
                  data-plasmic-name={"rectangle4238"}
                  data-plasmic-override={overrides.rectangle4238}
                  className={classNames(projectcss.all, sty.rectangle4238)}
                />

                <div className={classNames(projectcss.all, sty.freeBox__pnNFk)}>
                  <div
                    data-plasmic-name={"history2"}
                    data-plasmic-override={overrides.history2}
                    className={classNames(projectcss.all, sty.history2)}
                  >
                    <IkonIcon
                      data-plasmic-name={"icon"}
                      data-plasmic-override={overrides.icon}
                      className={classNames(projectcss.all, sty.icon)}
                      role={"img"}
                    />
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xiPc
                    )}
                  >
                    <Trans__>{"\u5386\u53f2\u8bb0\u5f55"}</Trans__>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jpAF)}
        >
          <div
            data-plasmic-name={"infoTitle2"}
            data-plasmic-override={overrides.infoTitle2}
            className={classNames(projectcss.all, sty.infoTitle2)}
          >
            <div
              data-plasmic-name={"\u4e2a\u4eba\u4fe1\u606f2"}
              data-plasmic-override={overrides.个人信息2}
              className={classNames(projectcss.all, sty.个人信息2)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___2R62J
                )}
              >
                <Trans__>{"\u4e2a\u4eba\u4fe1\u606f"}</Trans__>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"emailAddressMobilie2"}
            data-plasmic-override={overrides.emailAddressMobilie2}
            className={classNames(projectcss.all, sty.emailAddressMobilie2)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__irAby)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__loQba
                )}
              >
                <Trans__>{"\u90ae\u7bb1\u5730\u5740"}</Trans__>
              </div>
            </div>
            <div
              data-plasmic-name={"rectangle4241"}
              data-plasmic-override={overrides.rectangle4241}
              className={classNames(projectcss.all, sty.rectangle4241)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___2H5AP)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uPzYa
                  )}
                >
                  <Trans__>{overrides.accountInfo.data[0].email}</Trans__>
                </div>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"firstNameMobile3"}
            data-plasmic-override={overrides.firstNameMobile3}
            className={classNames(projectcss.all, sty.firstNameMobile3)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__m16Ch)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pjo1H
                )}
              >
                <Trans__>{"\u540d\u79f0"}</Trans__>
              </div>
            </div>
            <div
              data-plasmic-name={"rectangle4249"}
              data-plasmic-override={overrides.rectangle4249}
              className={classNames(projectcss.all, sty.rectangle4249)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__inLBj)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__m2BkM
                  )}
                >
                  <Trans__>{overrides.accountInfo.data[0].name}</Trans__>
                </div>
                <Edit1Icon
                  className={classNames(projectcss.all, sty.svg__uZVfK)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"firstNameMobile4"}
            data-plasmic-override={overrides.firstNameMobile4}
            className={classNames(projectcss.all, sty.firstNameMobile4)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__qsGga)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aNyO4
                )}
              >
                <Trans__>{"\u59d3\u6c0f"}</Trans__>
              </div>
            </div>
            <div
              data-plasmic-name={"rectangle4250"}
              data-plasmic-override={overrides.rectangle4250}
              className={classNames(projectcss.all, sty.rectangle4250)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__uhGv6)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0DzHd
                  )}
                >
                  <Trans__>{"Chong"}</Trans__>
                </div>
                <Edit1Icon
                  className={classNames(projectcss.all, sty.svg__xB2Ux)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"genderMobile2"}
            data-plasmic-override={overrides.genderMobile2}
            className={classNames(projectcss.all, sty.genderMobile2)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__vibRc)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vmGq7
                )}
              >
                <Trans__>{"\u6027\u522b"}</Trans__>
              </div>
            </div>
            <div
              data-plasmic-name={"rectangle4251"}
              data-plasmic-override={overrides.rectangle4251}
              className={classNames(projectcss.all, sty.rectangle4251)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__lXuLd)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__oCo6O
                  )}
                >
                  <Trans__>{"\u7537\u6027"}</Trans__>
                </div>
                <Edit1Icon
                  className={classNames(projectcss.all, sty.svg__vroM)}
                  role={"img"}
                />
              </div>
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__o3XLq)} />
          <div
            data-plasmic-name={"logout"}
            data-plasmic-override={overrides.logout}
            className={classNames(projectcss.all, sty.logout)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__gecHq)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__yaLuY)}
                displayHeight={"16px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"16px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/free_fire_simulator/images/logout1.svg",
                  fullWidth: 16,
                  fullHeight: 16,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ie0N5
                )}
              >
                <Trans__>{"\u767b\u51fa\u8d26\u6237"}</Trans__>
              </div>
            </div>
          </div>
        </Stack__>
        <div
          data-plasmic-name={"logout2"}
          data-plasmic-override={overrides.logout2}
          className={classNames(projectcss.all, sty.logout2)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__mgqH4)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__eEgX5)}
              displayHeight={"16px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"16px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/free_fire_simulator/images/logout1.svg",
                fullWidth: 16,
                fullHeight: 16,
                aspectRatio: 1
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lf4U3
              )}
            >
              <Trans__>{"\u767b\u51fa\u8d26\u6237"}</Trans__>
            </div>
          </div>
        </div>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  profileModal: [
    "profileModal",
    "profileHeader",
    "closeModal",
    "accountInfo",
    "avatarSectionMobile",
    "avatar3",
    "copyIcon2",
    "avatar4",
    "avatarBackground2",
    "avatarMobile2",
    "walletSectionMobile",
    "walletTitleMobile2",
    "gameBalanceLargeMobile2",
    "group2",
    "menuSets2",
    "topUpMobile2",
    "rectangle4247",
    "withdrawMobile2",
    "rectangle4248",
    "withdraw2",
    "historyRecords2",
    "rectangle4238",
    "history2",
    "icon",
    "infoTitle2",
    "\u4e2a\u4eba\u4fe1\u606f2",
    "emailAddressMobilie2",
    "rectangle4241",
    "firstNameMobile3",
    "rectangle4249",
    "firstNameMobile4",
    "rectangle4250",
    "genderMobile2",
    "rectangle4251",
    "logout",
    "logout2"
  ],

  profileHeader: ["profileHeader", "closeModal"],
  closeModal: ["closeModal"],
  accountInfo: [
    "accountInfo",
    "avatarSectionMobile",
    "avatar3",
    "copyIcon2",
    "avatar4",
    "avatarBackground2",
    "avatarMobile2",
    "walletSectionMobile",
    "walletTitleMobile2",
    "gameBalanceLargeMobile2",
    "group2",
    "menuSets2",
    "topUpMobile2",
    "rectangle4247",
    "withdrawMobile2",
    "rectangle4248",
    "withdraw2",
    "historyRecords2",
    "rectangle4238",
    "history2",
    "icon",
    "infoTitle2",
    "\u4e2a\u4eba\u4fe1\u606f2",
    "emailAddressMobilie2",
    "rectangle4241",
    "firstNameMobile3",
    "rectangle4249",
    "firstNameMobile4",
    "rectangle4250",
    "genderMobile2",
    "rectangle4251",
    "logout",
    "logout2"
  ],

  avatarSectionMobile: [
    "avatarSectionMobile",
    "avatar3",
    "copyIcon2",
    "avatar4",
    "avatarBackground2",
    "avatarMobile2"
  ],

  avatar3: [
    "avatar3",
    "copyIcon2",
    "avatar4",
    "avatarBackground2",
    "avatarMobile2"
  ],

  copyIcon2: ["copyIcon2"],
  avatar4: ["avatar4", "avatarBackground2", "avatarMobile2"],
  avatarBackground2: ["avatarBackground2"],
  avatarMobile2: ["avatarMobile2"],
  walletSectionMobile: [
    "walletSectionMobile",
    "walletTitleMobile2",
    "gameBalanceLargeMobile2",
    "group2",
    "menuSets2",
    "topUpMobile2",
    "rectangle4247",
    "withdrawMobile2",
    "rectangle4248",
    "withdraw2",
    "historyRecords2",
    "rectangle4238",
    "history2",
    "icon"
  ],

  walletTitleMobile2: ["walletTitleMobile2"],
  gameBalanceLargeMobile2: ["gameBalanceLargeMobile2", "group2"],
  group2: ["group2"],
  menuSets2: [
    "menuSets2",
    "topUpMobile2",
    "rectangle4247",
    "withdrawMobile2",
    "rectangle4248",
    "withdraw2",
    "historyRecords2",
    "rectangle4238",
    "history2",
    "icon"
  ],

  topUpMobile2: ["topUpMobile2", "rectangle4247"],
  rectangle4247: ["rectangle4247"],
  withdrawMobile2: ["withdrawMobile2", "rectangle4248", "withdraw2"],
  rectangle4248: ["rectangle4248"],
  withdraw2: ["withdraw2"],
  historyRecords2: ["historyRecords2", "rectangle4238", "history2", "icon"],
  rectangle4238: ["rectangle4238"],
  history2: ["history2", "icon"],
  icon: ["icon"],
  infoTitle2: ["infoTitle2", "\u4e2a\u4eba\u4fe1\u606f2"],
  个人信息2: ["\u4e2a\u4eba\u4fe1\u606f2"],
  emailAddressMobilie2: ["emailAddressMobilie2", "rectangle4241"],
  rectangle4241: ["rectangle4241"],
  firstNameMobile3: ["firstNameMobile3", "rectangle4249"],
  rectangle4249: ["rectangle4249"],
  firstNameMobile4: ["firstNameMobile4", "rectangle4250"],
  rectangle4250: ["rectangle4250"],
  genderMobile2: ["genderMobile2", "rectangle4251"],
  rectangle4251: ["rectangle4251"],
  logout: ["logout"],
  logout2: ["logout2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProfileModal__ArgProps,
          internalVariantPropNames: PlasmicProfileModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profileModal") {
    func.displayName = "PlasmicProfileModal";
  } else {
    func.displayName = `PlasmicProfileModal.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileModal = Object.assign(
  // Top-level PlasmicProfileModal renders the root element
  makeNodeComponent("profileModal"),
  {
    // Helper components rendering sub-elements
    profileHeader: makeNodeComponent("profileHeader"),
    closeModal: makeNodeComponent("closeModal"),
    accountInfo: makeNodeComponent("accountInfo"),
    avatarSectionMobile: makeNodeComponent("avatarSectionMobile"),
    avatar3: makeNodeComponent("avatar3"),
    copyIcon2: makeNodeComponent("copyIcon2"),
    avatar4: makeNodeComponent("avatar4"),
    avatarBackground2: makeNodeComponent("avatarBackground2"),
    avatarMobile2: makeNodeComponent("avatarMobile2"),
    walletSectionMobile: makeNodeComponent("walletSectionMobile"),
    walletTitleMobile2: makeNodeComponent("walletTitleMobile2"),
    gameBalanceLargeMobile2: makeNodeComponent("gameBalanceLargeMobile2"),
    group2: makeNodeComponent("group2"),
    menuSets2: makeNodeComponent("menuSets2"),
    topUpMobile2: makeNodeComponent("topUpMobile2"),
    rectangle4247: makeNodeComponent("rectangle4247"),
    withdrawMobile2: makeNodeComponent("withdrawMobile2"),
    rectangle4248: makeNodeComponent("rectangle4248"),
    withdraw2: makeNodeComponent("withdraw2"),
    historyRecords2: makeNodeComponent("historyRecords2"),
    rectangle4238: makeNodeComponent("rectangle4238"),
    history2: makeNodeComponent("history2"),
    icon: makeNodeComponent("icon"),
    infoTitle2: makeNodeComponent("infoTitle2"),
    个人信息2: makeNodeComponent("\u4e2a\u4eba\u4fe1\u606f2"),
    emailAddressMobilie2: makeNodeComponent("emailAddressMobilie2"),
    rectangle4241: makeNodeComponent("rectangle4241"),
    firstNameMobile3: makeNodeComponent("firstNameMobile3"),
    rectangle4249: makeNodeComponent("rectangle4249"),
    firstNameMobile4: makeNodeComponent("firstNameMobile4"),
    rectangle4250: makeNodeComponent("rectangle4250"),
    genderMobile2: makeNodeComponent("genderMobile2"),
    rectangle4251: makeNodeComponent("rectangle4251"),
    logout: makeNodeComponent("logout"),
    logout2: makeNodeComponent("logout2"),
    // Metadata about props expected for PlasmicProfileModal
    internalVariantProps: PlasmicProfileModal__VariantProps,
    internalArgProps: PlasmicProfileModal__ArgProps
  }
);

export default PlasmicProfileModal;
/* prettier-ignore-end */

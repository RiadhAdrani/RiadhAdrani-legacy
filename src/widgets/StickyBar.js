import { Button, H1, I, P, Row } from "@riadh-adrani/recursive/components";
import { getState } from "@riadh-adrani/recursive/state";
import BurgerButton from "../elements/BurgerButton";
import MyLogo from "../elements/MyLogo";
import MyTitle from "../elements/MyTitle";
import SocialButton from "../elements/SocialButton";

export default () => {
     const [_, setShowDrawer] = getState("show-drawer");

     return Row({
          hooks: {
               onRef: () => "sticky-bar",
          },
          style: {
               className: "sticky-bar",
               normal: {
                    position: "sticky",
                    top: "0px",
                    height: "55px",
                    width: "100%",
                    background: "#1a1a1a",
               },
          },
          children: [
               Row({
                    children: [
                         BurgerButton(() => {
                              setShowDrawer(true);
                         }),
                         MyTitle(true),
                    ],
               }),
               Row({
                    style: {
                         className: "social-media-links",
                         scoped: true,
                         normal: {
                              alignItems: "center",
                              marginLeft: "auto",
                              marginRight: "20px",
                         },
                    },
                    children: [
                         SocialButton("fa-brands fa-github", "https://github.com/RiadhAdrani"),
                         SocialButton(
                              "fa-brands fa-youtube",
                              "https://www.youtube.com/c/AdraniRiadh"
                         ),
                         SocialButton("fa-brands fa-twitter", "https://twitter.com/adrani_riadh"),
                         SocialButton(
                              "fa-brands fa-linkedin",
                              "https://www.linkedin.com/in/riadh-adrani/"
                         ),
                         SocialButton(
                              "fa-brands fa-behance",
                              "https://www.behance.net/adraniriadh"
                         ),
                    ],
               }),
          ],
     });
};

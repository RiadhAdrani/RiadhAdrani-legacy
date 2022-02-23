import { Button, Column, Div, EmptyBox, Hr, P, Row } from "@riadh-adrani/recursive/components";
import { getState, setState } from "@riadh-adrani/recursive/state";
import DrawerNavButton from "../components/DrawerNavButton";
import BurgerButton from "../elements/BurgerButton";
import MyTitle from "../elements/MyTitle";

export default () => {
     const [showDrawer, setShowDrawer] = getState("show-drawer");

     return Row({
          style: {
               className: "drawer-back-layer",
               normal: {
                    position: "sticky",
                    inset: "0px",
                    width: "100%",
                    zIndex: showDrawer ? 1 : -3,
                    background: showDrawer ? "#00000077" : "#00000000",
                    transition: "0.2s",
               },
          },
          events: {
               onClick: () => {
                    setShowDrawer(false);
               },
          },
          children: [
               Div({
                    style: {
                         className: "drawer-overlay",
                         normal: {
                              position: "absolute",
                              height: "100vh",
                              width: "100%",
                              inset: "0px",
                              zIndex: showDrawer ? 1 : -3,
                              background: showDrawer ? "#00000077" : "#00000000",
                              transition: "0.2s",
                         },
                    },
               }),
               Column({
                    events: {
                         onClick: (e) => {
                              e.stopPropagation();
                         },
                    },
                    style: {
                         className: "drawer",
                         normal: {
                              position: "absolute",
                              height: "100vh",
                              left: "0px",
                              top: "0px",
                              background: "#1b1b1b",
                              borderRight: "1px solid #00000055",
                              width: "260px",
                              transform: showDrawer ? "translateX(0px)" : "translateX(-270px)",
                              transition: "0.4s",
                              zIndex: 2,
                         },
                    },
                    children: [
                         Row({ children: [BurgerButton(() => setShowDrawer(false)), MyTitle()] }),
                         EmptyBox({ height: "10px" }),
                         DrawerNavButton("Home", "/", "fa-solid fa-house"),
                         DrawerNavButton("Skills", "/skills", "fa-solid fa-laptop-code"),
                         DrawerNavButton("Projects", "/projects", "fa-solid fa-diagram-project"),
                         DrawerNavButton(
                              "Academic Background",
                              "/academic-background",
                              "fa-solid fa-graduation-cap"
                         ),
                         DrawerNavButton(
                              "Professional Career",
                              "/professional-career",
                              "fa-solid fa-briefcase"
                         ),
                         DrawerNavButton(
                              "Animated Backgrounds",
                              "/animated-backgrounds",
                              "fa-solid fa-play"
                         ),
                         Column({
                              style: {
                                   className: "bot",
                                   scoped: true,
                                   normal: {
                                        marginTop: "auto",
                                   },
                              },
                              children: DrawerNavButton("Edit", "/edit", "fa-solid fa-gear"),
                         }),
                    ],
               }),
          ],
     });
};

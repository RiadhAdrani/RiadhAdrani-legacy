import { Column, I, Link } from "@riadh-adrani/recursive/components";
import { goTo, renderRoute } from "@riadh-adrani/recursive/router";
import AnimatedBackgroundView from "../components/AnimatedBackgroundView";
import AnimatedBackgrounds from "../views/AnimatedBackgrounds";

export default () => {
     return Column({
          style: {
               className: "fixed-edit-anim-bg",
               normal: {
                    position: "fixed",
                    background: "#1e1e1eef",
                    inset: "0px",
               },
          },
          children: [
               renderRoute(),
               Column({
                    style: {
                         className: "sticky-edit-anim-layer",
                         normal: {
                              position: "sticky",
                              padding: "40px 20px",
                              textAlign: "center",
                              height: "100%",
                         },
                    },
                    children: [
                         I({
                              className: "fa-solid fa-circle-xmark",
                              style: {
                                   className: "edit-x",
                                   normal: {
                                        fontSize: "2em",
                                        position: "absolute",
                                        top: "40px",
                                        right: "40px",
                                        cursor: "pointer",
                                   },
                                   hover: {
                                        transform: "scale(1.3)",
                                   },
                              },
                              events: {
                                   onClick: () => {
                                        goTo("/edit");
                                   },
                              },
                         }),
                         I({
                              className: "fa-solid fa-circle-plus",
                              style: {
                                   className: "add-anim",
                                   normal: {
                                        fontSize: "2.5em",
                                        position: "fixed",
                                        bottom: "40px",
                                        right: "40px",
                                        cursor: "pointer",
                                   },
                                   hover: {
                                        transform: "scale(1.3)",
                                   },
                              },
                              events: {
                                   onClick: () => goTo("/edit/animated-backgrounds/add"),
                              },
                         }),
                         AnimatedBackgrounds(false, (item) =>
                              Link({
                                   style: {
                                        className: "animated-background-link",
                                        normal: {
                                             color: "white",
                                             textDecoration: "none",
                                        },
                                   },
                                   to: `/edit/animated-backgrounds/:${item.id};`,
                                   children: AnimatedBackgroundView(item),
                              })
                         ),
                    ],
               }),
          ],
     });
};

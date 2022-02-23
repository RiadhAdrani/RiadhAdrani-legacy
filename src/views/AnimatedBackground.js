import { Column, EmptyBox, H2, P, Row, Span } from "@riadh-adrani/recursive/components";
import { getParams } from "@riadh-adrani/recursive/router";
import { getState } from "@riadh-adrani/recursive/state";
import AbLink from "../elements/AbLink";
import CloseButton from "../elements/CloseButton";

export default () => {
     const bg = getState("user-data")[0].backgrounds.find((it) => it.id == getParams().id);

     return Column({
          style: {
               className: "overlay",
               scoped: true,
               normal: {
                    position: "fixed",
                    inset: "0px",
                    justifyContent: "center",
                    background: "#1e1e1efe",
               },
          },
          children: [
               CloseButton("/animated-backgrounds"),
               Column({
                    style: {
                         className: "anim-bckg",
                         scoped: true,
                         normal: {
                              textAlign: "center",
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              backgroundImage: `url(${bg.preview})`,
                              margin: "100px",
                              borderRadius: "10px",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:600px)",
                                   normal: {
                                        margin: "20px",
                                   },
                              },
                         ],
                    },
                    children: [
                         Column({
                              style: {
                                   className: "anim-bckg-inner",
                                   scoped: true,
                                   normal: {
                                        background: "#1e1e1ede",
                                        padding: "200px 30px",
                                        border: "1px solid #ffffff11",
                                        borderRadius: "10px",
                                   },
                                   mediaQueries: [
                                        {
                                             condition: "(max-width:600px)",
                                             normal: {
                                                  padding: "200px 10px",
                                             },
                                        },
                                   ],
                              },
                              children: [
                                   H2({
                                        text: bg.title,
                                        style: {
                                             className: "anbkgttl",
                                             normal: {
                                                  fontWeight: 500,
                                                  textTransform: "uppercase",
                                                  borderBottom: "1px solid #ffffff5c",
                                             },
                                        },
                                   }),
                                   EmptyBox({ height: "10px" }),
                                   P({
                                        style: {
                                             className: "anbkgtgs",
                                             normal: {
                                                  lineHeight: 2,
                                             },
                                        },
                                        text: bg.tags.split(" ").map((tag) =>
                                             Span({
                                                  text: `#${tag} `,
                                                  style: {
                                                       className: "anbkgstgs",
                                                       normal: {
                                                            background: "#ffffff",
                                                            color: "#1e1e1e",
                                                            borderRadius: "2.5px",
                                                            margin: "3px",
                                                            padding: "5px",
                                                       },
                                                  },
                                             })
                                        ),
                                   }),
                                   EmptyBox({ height: "10px" }),
                                   Row({
                                        style: {
                                             className: "anbkglks",
                                             normal: {
                                                  justifyContent: "center",
                                                  fontSize: "1.5em",
                                             },
                                        },
                                        children: [
                                             AbLink(bg.artwork, "fa-solid fa-images"),
                                             AbLink(bg.youtube, "fa-brands fa-youtube"),
                                             AbLink(bg.download, "fa-solid fa-download"),
                                        ],
                                   }),
                              ],
                         }),
                    ],
               }),
          ],
     });
};

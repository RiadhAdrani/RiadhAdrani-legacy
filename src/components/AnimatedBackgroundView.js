import { Column, EmptyBox, H2, H4, I, P, Row, Span } from "@riadh-adrani/recursive/components";
import AbLink from "../elements/AbLink";

export default (bg) =>
     Column({
          key: bg.id,
          style: {
               className: "bg-item",
               scoped: true,
               normal: {
                    textAlign: "left",
                    border: "1px solid #424242",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${bg.preview})`,
               },
          },
          children: [
               Column({
                    style: {
                         className: "bg-inner-item",
                         normal: {
                              background:
                                   "linear-gradient(90deg, rgba(30,30,30,1) 20%,rgba(30,30,30,0.9) 50%, rgba(30,30,30,0.2) 100%)",
                              padding: "40px",
                              fontSize: "1.5em",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:600px)",
                                   normal: {
                                        padding: "40px 20px",
                                        fontSize: "1.25em",
                                   },
                              },
                         ],
                    },
                    children: [
                         H2({
                              text: bg.title,
                              style: {
                                   className: "bg-title",
                                   normal: {
                                        fontWeight: 500,
                                        textTransform: "uppercase",
                                        fontSize: "1em",
                                   },
                              },
                         }),
                         Row({
                              children: [
                                   AbLink(bg.artwork, "fa-solid fa-images"),
                                   AbLink(bg.youtube, "fa-brands fa-youtube"),
                                   AbLink(bg.download, "fa-solid fa-download"),
                              ],
                         }),
                    ],
               }),
          ],
     });

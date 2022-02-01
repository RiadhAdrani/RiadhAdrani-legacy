import { Row, Column, H4, A, I, Span, P, Img } from "../../recursive-js/Recursive-Components.js";
import Shield from "./Shield.js";

export default (project) => {
     return Row({
          styleSheet: {
               className: `project-wrapper-${project.color}`,
               normal: {
                    border: "1px solid #ffffff22",
                    padding: "10px 15px",
                    marginBottom: "15px",
               },
               hover: {
                    background: `#${project.color}11`,
               },
               mediaQueries: [
                    {
                         condition: "(max-width:800px)",
                         normal: { flexDirection: "column", alignItems: "left" },
                    },
               ],
          },
          children: [
               Img({
                    src: project.logo,
                    styleSheet: {
                         className: `project-logo-icon-${project.color}`,
                         normal: {
                              borderRadius: "50%",
                              border: `2px solid #${project.color}`,
                              width: "80px",
                              height: "80px",
                              marginTop: "5px",
                              background: `#${project.color}22`,
                         },
                    },
               }),
               Column({
                    styleSheet: {
                         className: "project-infos",
                         normal: {
                              padding: "5px 15px 5px 20px",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:800px)",
                                   normal: { paddingLeft: "0px", paddingTop: "15px" },
                              },
                         ],
                    },
                    children: [
                         Row({
                              styleSheet: {
                                   className: `project-top-${project.color}`,
                                   normal: {
                                        color: `#${project.color}`,
                                   },
                              },
                              children: [
                                   H4({
                                        text: [
                                             A({
                                                  href: project.link,
                                                  target: "blank",
                                                  style: {
                                                       color: "inherit",
                                                       textDecoration: "none",
                                                  },
                                                  children: [
                                                       `${project.name} `,
                                                       Span({
                                                            text: `(${project.type}) `,
                                                            styleSheet: {
                                                                 className: "project-type",
                                                                 normal: {
                                                                      fontWeight: "300",
                                                                 },
                                                            },
                                                       }),
                                                       A({
                                                            href: project.link,
                                                            target: "blank",
                                                            style: { color: "inherit" },
                                                            children: [
                                                                 I({
                                                                      className: project.linkLogo,
                                                                 }),
                                                            ],
                                                       }),
                                                  ],
                                             }),
                                        ],
                                   }),
                              ],
                         }),
                         P({
                              text: project.description,
                              style: { textAlign: "justify" },
                         }),
                         Row({
                              styleSheet: {
                                   className: "used-techs",
                                   normal: { flexWrap: "wrap" },
                              },
                              children: project.techs.map((t) =>
                                   Shield(t.display, "for-the-badge", t.logo, project.color)
                              ),
                         }),
                    ],
               }),
          ],
     });
};

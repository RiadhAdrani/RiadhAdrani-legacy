import { Column, EmptyBox, H2, H4, P, Row, Span } from "@riadh-adrani/recursive/components";

export default (skill) =>
     Column({
          style: {
               className: "skill-item",
               scoped: true,
               normal: {
                    textAlign: "left",
                    border: "1px solid #424242",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${skill.background})`,
               },
          },
          children: [
               Column({
                    style: {
                         className: "skill-bg",
                         normal: {
                              background:
                                   "linear-gradient(90deg, rgba(30,30,30,1) 33%,rgba(30,30,30,0.9) 80%, rgba(30,30,30,0.6) 100%)",
                              padding: "30px",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:800px) and (min-width:601px)",
                                   normal: {
                                        padding: "20px 15px",
                                   },
                              },
                              {
                                   condition: "(max-width:600px)",
                                   normal: {
                                        padding: "20px 10px",
                                   },
                              },
                         ],
                    },
                    children: [
                         H2({
                              text: skill.title,
                              style: {
                                   className: "skill-title",
                                   normal: {
                                        fontWeight: 500,
                                        fontSize: "1.85em",
                                        textTransform: "uppercase",
                                   },
                              },
                         }),
                         H4({
                              text: skill.subTitle,
                              style: {
                                   className: "skill-sub-title",
                                   normal: {
                                        fontWeight: 300,
                                        fontSize: "1.5em",
                                   },
                              },
                         }),
                         EmptyBox({ height: "15px" }),
                         P({
                              text: skill.text,
                              style: {
                                   className: "skill-text",
                                   normal: {
                                        padding: "5px",
                                        lineHeight: 1.5,
                                   },
                              },
                         }),
                         EmptyBox({ height: "15px" }),
                         Row({
                              style: {
                                   className: "skill-text",
                                   normal: {
                                        flexWrap: "wrap",
                                   },
                              },
                              children: skill.technologies.map((item) =>
                                   Span({
                                        text: item,
                                        style: {
                                             className: "skill-span",
                                             normal: {
                                                  padding: "5px 15px",
                                                  marginRight: "5px",
                                                  marginTop: "7.5px",
                                                  border: "1px solid white",
                                                  borderRadius: "15px",
                                             },
                                             hover: {
                                                  background: "white",
                                                  color: "#1e1e1e",
                                                  cursor: "pointer",
                                             },
                                        },
                                   })
                              ),
                         }),
                    ],
               }),
          ],
     });

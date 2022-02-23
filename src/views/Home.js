import { Column, EmptyBox, H2, Link, P, Row } from "@riadh-adrani/recursive/components";
import MyLogo from "../elements/MyLogo";
import MainTitle from "../elements/MainTitle";

const explore = [
     { name: "Skills", to: "/skills" },
     { name: "Projects", to: "/projects" },
     { name: "Academic Background", to: "/academic-background" },
     { name: "Professional Career", to: "/professional-career" },
     { name: "Animated Backgrounds", to: "/animated-backgrounds" },
];

export default () => {
     return Column({
          className: "container",
          style: {
               className: "home-view",
               normal: {
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
               },
          },
          children: [
               MyLogo(200),
               EmptyBox({ height: "20px" }),
               MainTitle(),
               H2({
                    text: "Web developer | Android developer | Graphic Designer",
                    style: {
                         className: "home-sub-text",
                         normal: {
                              fontWeight: "300",
                              fontSize: "1.4em",
                              textTransform: "uppercase",
                         },
                    },
               }),
               EmptyBox({ height: "20px" }),
               P({
                    style: {
                         className: "home-description",
                         normal: {
                              lineHeight: "1.5",
                              letterSpacing: "1px",
                              borderTop: "1px solid #ffffff77",
                              borderBottom: "1px solid #ffffff77",
                              padding: "20px 0px",
                         },
                    },
                    text: `Hello there ! my name is Riadh Adrani (pronounced Riyadh Adrani), 
                    I graduated from 
                    the Higher Institute of Information Technologies and communications in Borj Cedria 
                    with the bachelor of "Embedded Systems" from the branch "Industrial Computing". 
                    I started my development journey back in 2019 by developping a small real time messaging android app
                    for a class project using Kotlin, and the rest is history.`,
               }),
               EmptyBox({ height: "20px" }),
               Row({
                    style: {
                         className: "explore-inline",
                         normal: {
                              flexWrap: "wrap",
                              alignItems: "center",
                              justifyContent: "center",
                         },
                    },
                    children: explore.map((item) =>
                         Link({
                              children: item.name,
                              to: item.to,
                              style: {
                                   className: "custom-button",
                                   normal: {
                                        background: "white",
                                        border: "none",
                                        padding: "5px 10px",
                                        fontWeight: 500,
                                        textTransform: "uppercase",
                                        textDecoration: "none",
                                        color: "#1e1e1e",
                                        cursor: "pointer",
                                        margin: "5px",
                                        borderRadius: "2.5px",
                                   },
                                   hover: {
                                        opacity: "0.7",
                                   },
                                   active: {
                                        transform: "scale(0.95)",
                                   },
                              },
                         })
                    ),
               }),
          ],
     });
};

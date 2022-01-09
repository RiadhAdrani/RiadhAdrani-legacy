import { Column } from "./recursive-js/Recursive-Components.js";
import AboutMe from "./src/components/AboutMe.js";
import Footer from "./src/components/Footer.js";
import Header from "./src/components/Header.js";
import Projects from "./src/components/Projects.js";
import Skills from "./src/components/Skills.js";

export default () =>
     Column({
          styleSheet: { className: "app-wrapper", normal: { color: "white" } },
          children: [
               Header(),
               Column({
                    styleSheet: {
                         className: "content-list",
                         normal: {
                              margin: "0px 100px",
                         },
                         mediaQueries: [
                              {
                                   condition: "(max-width:800px)",
                                   normal: {
                                        margin: "0px 10px",
                                   },
                              },
                         ],
                    },
                    children: [AboutMe(), Skills(), Projects(), Footer()],
               }),
          ],
     });

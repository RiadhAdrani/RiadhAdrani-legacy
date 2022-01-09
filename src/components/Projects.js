import { Column, P } from "../../recursive-js/Recursive-Components.js";
import ProjectList from "../data/ProjectList.js";
import Project from "./Project.js";
import Title from "./Title.js";

export default () => {
     return Column({
          styleSheet: {
               className: "skills-section",
               normal: {
                    justifyContent: "left",
                    padding: "30px 20px",
                    background: "#1e1e1eee",
                    border: "1px solid #ffffff77",
                    borderRadius: "5px",
                    backdropFilter: "invert(100)",
                    marginBottom: "20px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:600px)",
                         normal: {
                              padding: "20px 10px",
                         },
                    },
               ],
          },
          children: [
               Title("Projects", "fas fa-project-diagram"),
               P({
                    text: "Here's a list of projects that I made for personal use, friends and freelance:",
               }),
               Column({
                    styleSheet: {
                         className: "projects-list",
                         normal: {
                              marginTop: "15px",
                         },
                    },
                    children: ProjectList.map((p) => Project(p)),
               }),
          ],
     });
};

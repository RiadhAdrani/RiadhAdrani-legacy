import { Column, H4, Row } from "../../recursive-js/Recursive-Components.js";
import Shield from "./Shield.js";

export default (title, arrayOfSkills) => {
     return Column({
          styleSheet: {
               className: "skill-sub-section",
               normal: {
                    padding: "15px 10px 0px 10px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:600px)",
                         normal: {
                              padding: "5px",
                         },
                    },
               ],
          },
          children: [
               H4({
                    text: title,
                    style: {
                         padding: "15px 0px",
                         fontWeight: "500",
                    },
               }),
               Row({
                    styleSheet: {
                         className: "skill-list",
                         normal: {
                              padding: "5px",
                              flexWrap: "wrap",
                         },
                    },
                    children: arrayOfSkills.map((e) =>
                         Shield(e.name, "for-the-badge", e.logo, "5599ff")
                    ),
               }),
          ],
     });
};

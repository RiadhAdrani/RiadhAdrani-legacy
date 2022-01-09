import { Img } from "../../recursive-js/Recursive-Components.js";

export default (topic, style = "for-the-badge", logo, logoColor = "ffffff", color = "1e1e1e00") => {
     return Img({
          src: `https://img.shields.io/badge/${topic}-%2302569B.svg?style=${style}&logo=${logo}&logoColor=${logoColor}&color=%23${color}`,
          alt: topic,
          styleSheet: {
               className: `shield-icon-${logoColor}`,
               normal: {
                    margin: "3px",
                    border: "1px solid #ffffff11",
               },
               hover: {
                    background: "#1e1e1e",
               },
          },
     });
};

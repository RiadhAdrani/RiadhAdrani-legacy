import { A, I } from "../../recursive-js/Recursive-Components.js";

export default (fa, link) => {
     return A({
          href: link,
          target: "blank",
          styleSheet: {
               className: "icon-link",
               normal: { color: "inherit", fontSize: "20px", padding: "10px" },
          },
          children: I({ className: fa }),
     });
};

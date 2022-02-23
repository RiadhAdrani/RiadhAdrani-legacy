import { A, Button, I } from "@riadh-adrani/recursive/components";

export default (fontAwesome, link) => {
     return A({
          href: link,
          target: "blank",
          children: [
               I({
                    className: fontAwesome,
                    style: {
                         className: "social-buttons",
                         normal: {
                              fontSize: "1.25em",
                              color: "white",
                              padding: "5px",
                         },
                    },
               }),
          ],
     });
};

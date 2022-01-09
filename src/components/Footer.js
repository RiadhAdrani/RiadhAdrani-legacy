import { A, Column, I } from "../../recursive-js/Recursive-Components.js";

export default () =>
     Column({
          styleSheet: {
               className: "footer",
               normal: {
                    padding: "10px",
                    textAlign: "center",
                    marginBottom: "20px",
               },
          },
          children: [
               A({
                    href: "https://github.com/RiadhAdrani/recursive",
                    target: "blank",
                    style: {
                         color: "white",
                         textDecoration: "none",
                    },
                    children: ["Made with Recursive.Js ", I({ className: "fab fa-github" })],
               }),
          ],
     });

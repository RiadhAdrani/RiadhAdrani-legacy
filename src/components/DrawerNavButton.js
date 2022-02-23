import { EmptyBox, I, Link, P, Row, Span } from "@riadh-adrani/recursive/components";
import { getState } from "@riadh-adrani/recursive/state";

export default (text, to, fontAwesome) => {
     return Link({
          to,
          events: {
               onClick: () => {
                    getState("show-drawer")[1](false);
               },
          },
          style: {
               className: "drawer-nav-button",
               normal: {
                    color: "white",
                    textDecoration: "none",
                    marginBottom: "5px",
               },
               hover: { background: "#ffffff22" },
          },
          children: [
               Row({
                    style: {
                         className: "drawer-nav-button-content",
                         normal: { padding: "15px 20px" },
                    },
                    children: [
                         I({
                              className: fontAwesome,
                              style: {
                                   className: "drawer-nav-button-icon",
                                   normal: {
                                        width: "25px",
                                   },
                              },
                         }),
                         EmptyBox({ width: "20px" }),
                         Span({ text }),
                    ],
               }),
          ],
     });
};

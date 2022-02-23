import { I } from "@riadh-adrani/recursive/components";
import { goTo } from "@riadh-adrani/recursive/router";

export default (to) =>
     I({
          className: "fa-solid fa-circle-xmark",
          style: {
               className: "exist-x",
               normal: {
                    fontSize: "2em",
                    position: "absolute",
                    top: "40px",
                    right: "40px",
                    cursor: "pointer",
               },
               hover: {
                    transform: "scale(1.3)",
               },
          },
          events: {
               onClick: () => {
                    goTo(to);
               },
          },
     });

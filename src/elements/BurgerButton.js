import { Button, I } from "@riadh-adrani/recursive/components";

export default (onClick = () => {}) => {
     return Button({
          text: I({ className: "fa-solid fa-bars" }),
          style: {
               className: "sticky-bar-show-drawer-button",
               normal: {
                    margin: "auto 5px",
                    background: "none",
                    color: "inherit",
                    border: "none",
                    fontSize: "1.5em",
                    height: "55px",
                    marginLeft: "20px",
                    cursor: "pointer",
               },
          },
          events: { onClick },
     });
};

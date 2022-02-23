import { Button } from "@riadh-adrani/recursive/components";

export default (text, onClick) => {
     return Button({
          text,
          style: {
               className: "form-button",
               normal: {
                    padding: "10px 20px",
                    color: "#1e1e1e",
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "5px",
                    font: "inherit",
                    fontWeight: 500,
                    textTransform: "uppercase",
               },
          },
          events: { onClick },
     });
};

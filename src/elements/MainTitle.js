import { H1 } from "@riadh-adrani/recursive/components";

export default () => {
     return H1({
          text: "Riadh Adrani",
          style: {
               className: "main-title-riadh-adrani",
               normal: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "2em",
                    fontWeight: 500,
                    textTransform: "uppercase",
               },
          },
     });
};

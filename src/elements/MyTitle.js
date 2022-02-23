import { H1 } from "@riadh-adrani/recursive/components";

export default (hide) => {
     return H1({
          text: "Riadh Adrani",
          style: {
               className: `heading-title-riadh-adrani${hide ? "-hide" : ""}`,
               normal: { display: "flex", alignItems: "center", fontSize: "1.25em" },
               mediaQueries: [
                    hide ? { condition: "(max-width:600px)", normal: { display: "none" } } : {},
               ],
          },
     });
};

import { Column, P } from "../../recursive-js/Recursive-Components.js";
import Title from "./Title.js";

export default () =>
     Column({
          styleSheet: {
               className: "about-section",
               normal: {
                    justifyContent: "left",
                    padding: "30px 20px",
                    background: "#1e1e1eee",
                    border: "1px solid #ffffff77",
                    borderRadius: "5px",
                    backdropFilter: "invert(100)",
                    marginBottom: "20px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:600px)",
                         normal: {
                              padding: "20px 10px",
                         },
                    },
               ],
          },
          children: [
               Title("About Me", "fas fa-user"),
               P({
                    text: `Hello there ! my name is Riadh Adrani (pronounced Riyadh Adrani), 
              I graduated from the Higher Institute of Information Technologies and communications 
              in Borj Cedria with the bachelor of "Embedded Systems" from the branch "Industrial Computing". 
              As for now, I am a freelancer and open for any offer.`,
               }),
          ],
     });

import { Column, Img, Row, H1 } from "../../recursive-js/Recursive-Components.js";
import IconLink from "./IconLink.js";

export default () => {
     return Column({
          styleSheet: {
               className: "welcome-section",
               normal: {
                    alignItems: "center",
                    padding: "40px",
               },
          },
          children: [
               Img({
                    src: "https://avatars.githubusercontent.com/u/54232641?v=4",
                    width: "200",
                    height: "200",
                    styleSheet: {
                         className: "main-icon",
                         normal: {
                              borderRadius: "50%",
                              border: "solid 5px white",
                              marginBottom: "10px",
                         },
                         hover: {
                              borderColor: "#5599ff",
                              cursor: "pointer",
                         },
                    },
               }),
               Row({
                    children: [
                         IconLink("fab fa-github", "https://github.com/RiadhAdrani"),
                         IconLink(
                              "fab fa-linkedin",
                              "https://www.linkedin.com/in/riadh-adrani-7610781b0/"
                         ),
                         IconLink("fab fa-twitter", "https://twitter.com/adrani_riadh"),
                         IconLink("fab fa-youtube", "https://www.youtube.com/c/AdraniRiadh"),
                    ],
               }),
               H1({
                    text: "Hi, I'am Riadh Adrani, I develop Web and Android Apps.",
                    styleSheet: {
                         className: "hi",
                         normal: { textAlign: "center", padding: "20px 0px" },
                    },
               }),
          ],
     });
};

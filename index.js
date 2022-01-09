import App from "./App.js";
import { Render } from "./recursive-js/Recursive.js";
import { SetStyle } from "./recursive-js/Recursive-Style.js";

SetStyle({
     import: [
          "url(https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap)",
     ],
     selectors: {
          "body,html": {
               display: "flex",
               flexDirection: "column",
               flex: 1,
               height: "100%",
               width: "100%",
               margin: "0px",
               fontFamily: "Ubuntu",
               scrollBehavior: "smooth",
          },
          "app-view": {
               flex: 1,
               fontSize: "17px",
               backgroundSize: "cover",
               backgroundAttachment: "fixed",
               backgroundImage: "url(./src/assets/bg.jpg)",
          },
          "h1,h2,h3,h4,h5,h6,p": {
               margin: "0px",
          },
          p: {
               padding: "10px 0px",
               lineHeight: "1.5em",
          },
     },
});

Render(App);

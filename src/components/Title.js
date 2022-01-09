import { H2 } from "../../recursive-js/Recursive-Components.js";
import IconLink from "./IconLink.js";

export default (text, fa) =>
     H2({
          style: { color: "#5599ff" },
          text: [IconLink(fa), text],
     });

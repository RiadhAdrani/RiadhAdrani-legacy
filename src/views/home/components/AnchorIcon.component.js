import { A } from "@riadh-adrani/recursive-web/html";
import { Icon } from "../../../components/icons";

export default (href, icon, viewBox) => {
    return A({
        href,
        target: "_blank",
        children: Icon({ path: icon, viewBox, fill: "white", height: "30px", width: "30px" }),
    });
};

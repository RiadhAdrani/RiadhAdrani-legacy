import { Row } from "@riadh-adrani/recursive-web/html";
import AppBarLink from "./AppBar.Link";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { _main } from "../../style";
import icons from "../icons";

export default () => {
    return Row({
        style: {
            scoped: true,
            normal: {
                justifyContent: "center",
                backgroundColor: getVar(_main),
                color: "white",
                position: "sticky",
                top: "0px",
                boxShadow: ["1px", "1px", "5px", "0px", getVar(_main)],
                zIndex: 10,
            },
        },
        children: [
            Row({
                className: "container",
                style: { inline: { justifyContent: "center" } },
                children: [
                    AppBarLink("Home", "/", icons.Home),
                    AppBarLink("Projects", "/projects", icons.Items),
                    AppBarLink("Professional Carrer", "/pro", icons.Job),
                    AppBarLink("Academic Background", "/academy", icons.Components),
                    AppBarLink("Resume", "/resume", icons.Resume),
                ],
            }),
        ],
    });
};

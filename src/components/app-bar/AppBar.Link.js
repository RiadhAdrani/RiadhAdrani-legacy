import { Row, Span, Link } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { getRoute } from "../..";
import {
    _backgroundAccent,
    _backgroundVariant,
    _main,
    _mainAccent,
    _mainVariant,
    _text,
    _textAccent,
    _textVariant,
} from "../../style";
import { Icon } from "../icons";

export default (text, to, iconPath) => {
    const isSelected = getRoute() == to;

    return Link({
        children: Row({
            style: { inline: { alignItems: "center" } },
            children: [
                Icon({
                    viewBox: "0 0 24 24",
                    path: iconPath,
                    fill: "white",
                    height: "20px",
                    width: "20px",
                    style: {
                        scoped: true,
                        normal: { marginRight: "10px" },
                        mediaQueries: [
                            {
                                condition: "(max-width:1100px)",
                                normal: { marginRight: "0px" },
                            },
                        ],
                    },
                }),
                Span({
                    children: text,
                    style: {
                        scoped: true,
                        mediaQueries: [
                            {
                                condition: "(max-width:1100px)",
                                normal: { display: "none" },
                            },
                        ],
                    },
                }),
            ],
        }),
        href: to,
        style: {
            scoped: true,
            normal: {
                padding: ["15px", "10px"],
                margin: ["0px", "5px"],
                color: "inherit",
                textDecoration: "none",
                borderBottom: ["4px", "solid", isSelected ? getVar(_text) : "transparent"],
                transitionDuration: "200ms",
            },
            hover: {
                backgroundColor: getVar(_mainAccent),
            },
        },
    });
};

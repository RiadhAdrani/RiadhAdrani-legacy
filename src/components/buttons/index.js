import { Button, Link } from "@riadh-adrani/recursive-web/html";
import { _main, _mainAccent } from "../../style";

export const TextButton = (text, onClick = () => {}) => {
    return Button({
        children: text,
        className: "my-button",
        onClick,
        type: "button",

        style: {
            className: "text-button",
            scoped: true,
            normal: {
                padding: ["5px", "15px"],
                margin: "5px",
            },
        },
    });
};

export const LinkTextButton = (text, to) => {
    return Link({
        style: { inline: { textDecoration: "none" } },
        children: TextButton(text),
        href: to,
    });
};

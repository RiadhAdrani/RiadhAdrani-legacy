import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { setStyle } from ".";
import {
    _background,
    _backgroundAccent,
    _backgroundVariant,
    _main,
    _mainAccent,
    _mainVariant,
    _text,
    _textAccent,
    _textVariant,
} from "./style";

export default () => {
    function choose(light, dark) {
        return dark;
    }

    setStyle({
        imports: [
            "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        ],
        var: {
            [_main]: choose("", "#1e1e1e"),
            [_mainAccent]: choose("", "#101010"),
            [_mainVariant]: choose("", "#0a0a0a"),

            [_text]: choose("", "#ffffff"),
            [_textAccent]: choose("", "#777777"),
            [_textVariant]: choose("", "#555555"),

            [_background]: choose("", "#3e3e3e"),
            [_backgroundAccent]: choose("", "#5e5e5e"),
            [_backgroundVariant]: choose("", "#7e7e7e"),
        },
        selectors: {
            "*": {
                fontFamily: "'Cairo', sans-serif",
                lineHeight: "1.35em",
                color: getVar(_text),
            },
            body: {
                margin: "0px",
                minHeight: "100vh",
                display: "flex",
                overflowY: "scroll",
            },
            "h1,h2,h3,h4,h5,h6": {
                margin: "0px",
                padding: ["5px", "0px"],
            },
            h3: {
                fontWeight: 600,
            },
            p: {
                margin: "0px",
            },
            ".container": {
                justifySelf: "center",
                alignSelf: "center",
                width: "70%",
            },
            ".my-button": {
                backgroundColor: getVar(_main),
                border: ["1px", "solid", "transparent"],
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                backgroundColor: getVar(_main),
                boxShadow: ["0px", "0px", "3px", "0px", getVar(_main)],
            },
            ".my-button:hover": {
                boxShadow: ["0px", "0px", "3px", "0px", getVar(_textAccent)],
            },
            ".item-card": {
                padding: ["20px"],
                border: ["1px", "solid", getVar(_background)],
                borderRadius: "5px",
                backgroundColor: getVar(_main),
            },
        },
        mediaQueries: {
            "(max-width:1100px)": {
                ".container": {
                    width: "80%",
                },
            },
            "(max-width:900px)": {
                ".container": {
                    width: "90%",
                },
            },
            "(max-width:800px)": {
                ".container": {
                    width: "95%",
                },
            },
        },
    });
};

import {
    A,
    Column,
    Fragment,
    H2,
    H3,
    H4,
    Img,
    P,
    Row,
    Spacer,
    Span,
} from "@riadh-adrani/recursive-web/html";
import { attr, getVar, grayScale } from "@riadh-adrani/recursive-web/style/methods";
import icons, { Icon } from "../../../components/icons";
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
} from "../../../style";

export default (project) => {
    return Column({
        className: "item-card",
        style: {
            scoped: true,
            normal: {
                transitionDuration: "150ms",
            },
            hover: {
                backgroundColor: project.color + "22",
                borderColor: project.color + "77",
            },
        },
        children: [
            Img({
                title: project.name,
                src: project.logo,
                alt: project.name,
                loading: "lazy",
                style: { inline: { height: "40px", width: "fit-content" } },
            }),
            Spacer({ height: "10px" }),
            H2({
                children: [
                    Span({ children: project.name }),
                    Fragment({
                        children: project.links.map((item) =>
                            A({
                                style: {
                                    inline: {
                                        display: "inline-flex",
                                        alignItems: "center",
                                        margin: ["0", "5px"],
                                    },
                                },
                                href: item,
                                target: "_blank",
                                children: Icon({
                                    viewBox: "0 0 16 16",
                                    fill: "white",
                                    path: icons.TargetBlank,
                                    height: "15px",
                                    width: "15px",
                                }),
                            })
                        ),
                    }),
                ],
            }),
            Spacer({
                height: "10px",
                style: { inline: { borderBottom: ["1px", "solid", getVar(_textVariant)] } },
            }),
            Spacer({ height: "10px" }),
            H3({ children: project.type, style: { inline: { fontWeight: 200 } } }),
            H4({ children: project.fromTo, style: { inline: { fontWeight: 400 } } }),
            Spacer({
                height: "10px",
            }),
            P({ children: project.shortDescription, style: { inline: { minHeight: "3em" } } }),
            Spacer({ height: "10px" }),
            Row({
                style: {
                    inline: {
                        flexWrap: "wrap",
                        marginTop: "auto",
                    },
                },
                children: project.techs.map((tech) => {
                    return Column({
                        dataSet: {
                            title: tech.name,
                        },
                        style: {
                            scoped: true,
                            normal: {
                                justifyContent: "center",
                                alignItems: "center",
                                padding: ["10px"],
                                margin: ["5px"],
                                border: ["1px", "solid", getVar(_textVariant)],
                                borderRadius: "50%",
                                cursor: "help",
                                position: "relative",
                                filter: grayScale(1),
                                transitionDuration: "150ms",
                            },
                            hover: {
                                borderColor: getVar(_text),
                                filter: grayScale(0),
                            },
                            ["[data-title]:hover::after"]: {
                                content: attr("data-title"),
                                position: "absolute",
                                width: "max-content",
                                top: "120%",
                                left: "10px",
                                padding: ["5px", "10px"],
                                backgroundColor: getVar(_mainVariant),
                                border: ["1px", "solid", getVar(_main)],
                                borderRadius: "15px",
                            },
                        },
                        children: Img({
                            loading: "lazy",
                            src: tech.src,
                            title: tech.name,
                            alt: tech.name,
                            height: "15px",
                            width: "15px",
                        }),
                    });
                }),
            }),
        ],
    });
};

import { A, Column, H2, I, Img, P, Row, Span } from "@riadh-adrani/recursive/components";

export default (item) => {
    return Row({
        style: {
            className: `project-view`,
            normal: {
                textAlign: "left",
                padding: "20px 30px",
                border: `1px solid #ffffff22`,
                borderRadius: "5px",
                marginBottom: "20px",
            },
            mediaQueries: [
                {
                    condition: "(max-width:800px)",
                    normal: { flexDirection: "column", padding: "20px 15px" },
                },
            ],
        },
        children: [
            Img({
                src: item.logo,
                height: 90,
                width: 90,
                style: {
                    className: "project-view-img",
                    scoped: true,
                    normal: {
                        marginRight: "20px",
                        border: `3px solid ${item.color}`,
                        borderRadius: "50%",
                        marginLeft: "5px",
                    },
                },
            }),
            Column({
                children: [
                    H2({
                        style: {
                            className: "project-view-title",
                            scoped: true,
                            normal: {
                                color: item.color,
                            },
                        },
                        text: [
                            item.name,
                            Span({
                                style: {
                                    className: "project-type",
                                    normal: {
                                        fontWeight: 300,
                                    },
                                },
                                text: ` (${item.type}) `,
                            }),
                            A({
                                flags: { renderIf: item.projectLink != undefined },
                                href: item.projectLink,
                                style: { inline: { color: "inherit" } },
                                children: I({ className: "fa-brands fa-github" }),
                            }),
                            Span({ text: " " }),
                            A({
                                flags: { renderIf: item.demoLink != undefined },
                                href: item.demoLink,
                                style: { inline: { color: "inherit" } },
                                children: I({ className: "fa-solid fa-globe" }),
                            }),
                        ],
                    }),
                    P({
                        style: {
                            className: "project-description",
                            normal: {
                                padding: "5px",
                                lineHeight: 1.35,
                            },
                        },
                        text: item.description,
                    }),
                    Row({
                        style: {
                            className: "projects-techs",
                            normal: {
                                flexWrap: "wrap",
                            },
                        },
                        children: item.technologies.map((tech) =>
                            Span({
                                text: tech,
                                style: {
                                    className: `technology`,
                                    scoped: true,
                                    normal: {
                                        padding: "5px 15px",
                                        marginRight: "5px",
                                        marginTop: "7.5px",
                                        border: `1px solid ${item.color}`,
                                        color: item.color,
                                        borderRadius: "15px",
                                    },
                                    hover: {
                                        background: item.color,
                                        color: "black",
                                        cursor: "pointer",
                                    },
                                },
                            })
                        ),
                    }),
                ],
            }),
        ],
    });
};

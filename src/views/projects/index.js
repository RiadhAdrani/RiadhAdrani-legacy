import { Column, Div, H1, P, Row, Spacer, TextField } from "@riadh-adrani/recursive-web/html";
import { getVar, opacity, repeat } from "@riadh-adrani/recursive-web/style/methods";
import { setState } from "../..";
import BigTitleComponent from "../../components/text/BigTitle.component";
import allProjects from "../../data/projects";
import technologies from "../../data/technologies";
import { _main, _mainAccent, _text, _textAccent, _textVariant } from "../../style";
import ProjectComponent from "./components/Project.component";

export default () => {
    const [search, setSearch] = setState("project-search", "");
    const [techs, setTechs] = setState("project-tech", []);

    function isSelected(tech) {
        return techs.find((item) => item.name === tech.name) != null;
    }

    function filter() {
        return allProjects
            .filter((item) => {
                if (search.trim() == "") return true;

                if (item.name.toLowerCase().trim().includes(search.toLowerCase().trim())) {
                    return true;
                }

                return false;
            })
            .filter((item) => {
                if (techs.length == 0) return true;

                for (let tech of item.techs) {
                    if (isSelected(tech)) return true;
                }

                return false;
            });
    }

    return Column({
        children: [
            BigTitleComponent("Projects"),
            Spacer({ height: "20px" }),
            TextField({
                value: search,
                placeholder: "Enter keywords",
                onInput: (e) => setSearch(e.target.value),
                style: {
                    scoped: true,
                    normal: {
                        padding: ["10px", "15px"],
                        background: "transparent",
                        border: ["1px", "solid", getVar(_textAccent)],
                        borderRadius: "5px",
                    },
                },
            }),
            Spacer({ height: "20px" }),
            Row({
                style: { inline: { flexWrap: "wrap" } },
                children: technologies.map((item) =>
                    P({
                        children: item.name,
                        style: {
                            scoped: true,
                            normal: {
                                padding: ["5px", "15px"],
                                margin: "5px",
                                border: ["1px", "solid", getVar(_textVariant)],
                                borderRadius: "15px",
                                cursor: "pointer",
                                background: isSelected(item) ? getVar(_text) : "transparent",
                                color: isSelected(item) ? getVar(_main) : getVar(_text),
                            },
                            hover: {
                                filter: opacity(0.5),
                            },
                        },
                        onClick: () => {
                            if (isSelected(item)) {
                                setTechs(techs.filter((tech) => tech.name != item.name));
                            } else {
                                setTechs([...techs, item]);
                            }
                        },
                    })
                ),
            }),
            Spacer({ height: "30px" }),
            Div({
                style: {
                    scoped: true,
                    normal: {
                        display: "grid",
                        gridTemplateColumns: repeat(3, "1fr"),
                        gridColumnGap: "20px",
                        gridRowGap: "20px",
                    },
                    mediaQueries: [
                        {
                            condition: "(max-width:1200px)",
                            normal: { gridTemplateColumns: repeat(2, "1fr") },
                        },
                        {
                            condition: "(max-width:800px)",
                            normal: { gridTemplateColumns: repeat(1, "1fr") },
                        },
                    ],
                },
                children: filter().map((project) => {
                    return ProjectComponent(project);
                }),
            }),
        ],
    });
};

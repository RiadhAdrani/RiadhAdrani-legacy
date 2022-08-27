import { Column, H1, H2, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { LinkTextButton, TextButton } from "../../components/buttons";
import icons, { Icon } from "../../components/icons";
import AnchorIconComponent from "./components/AnchorIcon.component";
import SliderComponent from "./components/Slider.component";

export default () => {
    return Column({
        style: { scoped: true, normal: { height: "100%", justifyContent: "center" } },
        children: [
            Row({
                style: {
                    scoped: true,
                    normal: { alignItems: "center" },
                    mediaQueries: [
                        {
                            condition: "(max-width:800px)",
                            normal: { flexDirection: "column", textAlign: "center" },
                        },
                    ],
                },
                children: [
                    Column({
                        style: {
                            scoped: true,
                            normal: {
                                flex: 1.5,
                                padding: ["0px", "10px"],
                            },
                            mediaQueries: [
                                {
                                    condition: "(max-width:800px)",
                                    normal: { alignItems: "center" },
                                },
                            ],
                        },
                        children: [
                            H1({
                                children: "Riadh Adrani,",
                                style: { scoped: true, normal: { fontSize: "4em" } },
                            }),
                            H2({
                                children: "A self-made software developer based in Tunisia",
                                style: {
                                    scoped: true,
                                    normal: { fontSize: "2em", fontWeight: 300 },
                                },
                            }),
                            Spacer({ height: "15px" }),
                            Row({
                                style: {
                                    scoped: true,
                                    normal: { flexWrap: "wrap" },
                                    mediaQueries: [
                                        {
                                            condition: "(max-width:800px)",
                                            normal: { justifyContent: "center" },
                                        },
                                    ],
                                },
                                children: [
                                    AnchorIconComponent(
                                        "https://github.com/RiadhAdrani",
                                        icons.GitHub,
                                        "0 0 16 16"
                                    ),
                                    Spacer({ width: "10px" }),
                                    AnchorIconComponent(
                                        "https://www.linkedin.com/in/riadh-adrani/",
                                        icons.LinkedIn,
                                        "0 0 24 24"
                                    ),
                                    Spacer({ width: "10px" }),
                                    AnchorIconComponent(
                                        "https://twitter.com/adrani_riadh",
                                        icons.Twitter,
                                        "0 0 24 24"
                                    ),
                                ],
                            }),
                            Spacer({ height: "15px" }),
                            Row({
                                style: {
                                    scoped: true,
                                    normal: { flexWrap: "wrap" },
                                    mediaQueries: [
                                        {
                                            condition: "(max-width:800px)",
                                            normal: { justifyContent: "center" },
                                        },
                                    ],
                                },
                                children: [
                                    LinkTextButton("Projects", "/projects"),
                                    LinkTextButton("Professional Career", "/pro"),
                                    LinkTextButton("Academic Background", "/academy"),
                                    LinkTextButton("Resume", "/resume"),
                                ],
                            }),
                        ],
                    }),
                    SliderComponent(),
                ],
            }),
        ],
    });
};

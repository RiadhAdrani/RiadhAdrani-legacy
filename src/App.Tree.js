import { Column, Div, Row } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { renderRoute } from ".";
import AppStyle from "./App.Style";
import AppBarWidget from "./components/app-bar/AppBar.widget";
import { _background, _backgroundAccent, _main, _mainAccent } from "./style";

export default () => {
    AppStyle();

    return Column({
        style: {
            scoped: true,
            normal: {
                width: "100%",
                minHeight: "100vh",
            },
        },
        children: [
            AppBarWidget(),
            Column({
                style: {
                    scoped: true,
                    normal: {
                        flex: 1,
                        backgroundColor: getVar(_mainAccent),
                        alignItems: "center",
                        padding: ["20px", 0],
                    },
                },
                children: Column({
                    className: "container",
                    style: { inline: { height: "100%" } },
                    children: renderRoute(),
                }),
            }),
        ],
    });
};

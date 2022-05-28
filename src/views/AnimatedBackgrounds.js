import {
    Column,
    Div,
    EmptyBox,
    H1,
    Input,
    LazyColumn,
    Link,
} from "@riadh-adrani/recursive/components";
import { goTo, renderRoute } from "@riadh-adrani/recursive/router";
import { getState, setState, updateAfter } from "@riadh-adrani/recursive/state";
import AnimatedBackgroundView from "../components/AnimatedBackgroundView";

export default (sticky = true, ItemWrapper) => {
    const [count, setCount] = setState("bg-count", 5);
    const [search, setSearch] = setState("bg-search", "");

    function filter() {
        const list = getState("user-data")[0].backgrounds;

        if (!search.trim()) return list;
        const filtered = list.filter((item) =>
            item.title
                .toLocaleLowerCase()
                .includes(
                    search.trim().toLocaleLowerCase() ||
                        item.tags.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
                )
        );
        return filtered;
    }

    return Column({
        className: "container",
        style: {
            className: "animated-backgrounds-view",
            normal: { overflow: "auto", padding: "20px" },
            mediaQueries: [
                { condition: "(max-width:800px)", normal: {} },
                { condition: "(max-width:600px)", normal: { padding: "5px" } },
            ],
        },
        children: [
            renderRoute(),
            Column({
                style: {
                    className: "anim-bg-heading-section",
                    normal: {
                        // position: sticky ? "fixed" : "",
                        top: "55px",
                        padding: "40px 0px",
                        background: sticky ? "rgba(30,30,30,0.95)" : "transparent",
                    },
                },
                children: [
                    H1({ text: "Animated Backgrounds" }),
                    EmptyBox({ height: "20px" }),
                    Input({
                        value: search,
                        placeholder: "Foul Tranished... In search, of the Elden Ring !",
                        events: { onInput: (e) => setSearch(e.target.value) },
                        style: {
                            className: "bg-search-box",
                            normal: {
                                background: "#1e1e1e",
                                border: "1px solid #424242",
                                borderRadius: "5px",
                                padding: "10px 20px",
                                color: "inherit",
                                fontFamily: "inherit",
                                width: "50%",
                                alignSelf: "center",
                                transition: "0.3s",
                            },
                            focus: {
                                outline: "1px solid #1e7e1e",
                                borderColor: "transparent",
                                width: "80%",
                            },
                        },
                    }),
                ],
            }),
            LazyColumn({
                style: {
                    className: "list-wrapper",
                    normal: { marginTop: "" },
                },
                onObserved: () => {
                    if (filter().length > count) {
                        updateAfter(() => {
                            setCount(count + 5);
                        });
                    }
                },
                children: filter()
                    .slice(0, count)
                    .map((item) =>
                        ItemWrapper
                            ? ItemWrapper(item)
                            : Link({
                                  to: `/animated-backgrounds/:${item.id};`,
                                  children: AnimatedBackgroundView(item),
                                  style: {
                                      className: "anbgvr",
                                      normal: {
                                          cursor: "pointer",
                                          textDecoration: "none",
                                          color: "white",
                                      },
                                  },
                              })
                    ),
            }),
        ],
    });
};

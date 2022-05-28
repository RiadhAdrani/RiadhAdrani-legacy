import { Render, DevMode } from "@riadh-adrani/recursive";
import { BorderSpinner, Column, EmptyBox, P } from "@riadh-adrani/recursive/components";
import { renderRoute } from "@riadh-adrani/recursive/router";
import { setState } from "@riadh-adrani/recursive/state";
import { setStaticStyle } from "@riadh-adrani/recursive/style";

import router from "./router";
import { getBackgrounds } from "./service/Firebase";
import Drawer from "./widgets/Drawer";
import StickyBar from "./widgets/StickyBar";

// Enable disable dev logs
DevMode(false);

// Create a style Sheet
setStaticStyle({
    import: [
        `url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')`,
    ],
    selectors: {
        "body,html": {
            margin: "0px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
            background: "#1e1e1e",
            fontFamily: "Rubik",
            color: "white",
            lineHeight: 1.3,
        },
        p: {
            margin: "0px",
        },
        "h1,h2,h3,h4,h5,h6,p": {
            margin: "0px",
            padding: "5px",
        },
        ".container": {
            margin: "30px 100px",
        },
        ".timeline-view": {
            flex: 1,
            margin: "0px 70px",
        },
        "::-webkit-scrollbar": { width: "7.5px" },
        "::-webkit-scrollbar-track": { background: "#1e1e1e" },
        "::-webkit-scrollbar-thumb": { background: "#404040" },
        "::-webkit-scrollbar-thumb:hover": { background: "#0e0e0e" },
    },
    media: {
        "(max-width:800px)": {
            ".container": {
                margin: "30px 15px",
            },
            ".timeline-view": {
                margin: "0px 10px",
            },
        },
        "(max-width:600px)": {
            ".container": {
                margin: "30px 5px",
            },
        },
    },
});

router();

// Render your app
Render(() => {
    const [] = setState("show-drawer", false);

    const [data, setData] = setState("user-data", { loaded: false }, async () => {
        const res = await Promise.all([getBackgrounds()]);

        setData({
            loaded: true,
            backgrounds: res[0].docs.map((i) => {
                return { ...i.data(), id: i.id };
            }),
        });
    });

    const [] = setState("user", { auth: false });

    return Column({
        style: {
            className: "app-wrapper",
            normal: {
                minHeight: "100vh",
                width: "100%",
            },
        },
        children: data.loaded
            ? [
                  Drawer(),
                  StickyBar(),
                  Column({
                      style: {
                          className: "rr",
                          scoped: true,
                          normal: { flex: 1 },
                      },
                      children: renderRoute(),
                  }),
              ]
            : Column({
                  style: {
                      className: "loading-wrapper",
                      scoped: true,
                      normal: {
                          alignSelf: "center",
                          alignItems: "center",
                          margin: "auto 0px",
                      },
                  },
                  children: [
                      BorderSpinner({ color: "white" }),
                      EmptyBox({ height: "20px" }),
                      P({ text: "Loading Data..." }),
                  ],
              }),
    });
});

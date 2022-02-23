import { Column, EmptyBox, H1 } from "@riadh-adrani/recursive/components";
import { getRoute, goTo, renderRoute } from "@riadh-adrani/recursive/router";
import { getState } from "@riadh-adrani/recursive/state";
import EditButton from "../components/EditButton";

export default () => {
     const isAuth = getState("user")[0].auth;

     if (!isAuth && getRoute() !== "/edit/auth") {
          goTo("/edit/auth");
     }

     return Column({
          className: "container",
          children: [
               renderRoute(),
               !isAuth
                    ? ""
                    : Column({
                           children: [
                                H1({ text: "Dashboard" }),
                                EmptyBox({ height: "30px" }),
                                Column({
                                     children: [
                                          EditButton({
                                               title: "Animated Backgrounds",
                                               to: "/edit/animated-backgrounds",
                                               preview: "https://c4.wallpaperflare.com/wallpaper/1/398/339/elden-ring-landscape-game-art-video-game-art-video-games-hd-wallpaper-preview.jpg",
                                          }),
                                          EditButton({
                                               title: "About",
                                               to: "/edit",
                                               preview: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
                                          }),
                                          EditButton({
                                               title: "Skills",
                                               to: "/edit",
                                               preview: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
                                          }),
                                          EditButton({
                                               title: "Projects",
                                               to: "/edit",
                                               preview: "https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
                                          }),
                                          EditButton({
                                               title: "Academic Background",
                                               to: "/edit",
                                               preview: "https://images.unsplash.com/photo-1534702795526-bab4dfcad657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                                          }),
                                          EditButton({
                                               title: "Professional Career",
                                               to: "/edit",
                                               preview: "https://images.unsplash.com/photo-1557424169-2dfbc683a1c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                                          }),
                                     ],
                                }),
                           ],
                      }),
          ],
     });
};

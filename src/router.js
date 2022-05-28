import { createRouter, route, goTo } from "@riadh-adrani/recursive/router";
import { getState } from "@riadh-adrani/recursive/state";
import AcademicBackground from "./views/AcademicBackground";
import AnimatedBackground from "./views/AnimatedBackground";
import AnimatedBackgrounds from "./views/AnimatedBackgrounds";
import Edit from "./views/Edit";
import Home from "./views/Home";
import ProfessionalCareer from "./views/ProfessionalCareer";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import AddAnimatedBackground from "./widgets/AddAnimatedBackground";
import EditAnimatedBackground from "./widgets/EditAnimatedBackground";
import Login from "./widgets/Login";

export default () => {
    createRouter(
        route({
            name: "/",
            component: Home,
            subRoutes: [
                route({ name: "/skills", component: Skills }),
                route({ name: "/projects", component: Projects }),
                route({
                    name: "/academic-background",
                    component: AcademicBackground,
                }),
                route({
                    name: "/professional-career",
                    component: ProfessionalCareer,
                }),
                route({
                    name: "/animated-backgrounds",
                    component: AnimatedBackgrounds,
                    subRoutes: [
                        route({
                            name: "/:id;",
                            component: AnimatedBackground,
                            title: "Animated Background",
                        }),
                    ],
                }),
                route({
                    name: "/edit",
                    component: Edit,
                    subRoutes: [
                        route({ name: "/auth", component: Login }),
                        route({
                            name: "/animated-backgrounds",
                            component: EditAnimatedBackground,
                            subRoutes: [
                                route({
                                    name: "/add",
                                    component: AddAnimatedBackground,
                                }),
                                route({
                                    name: "/:id;",
                                    component: AddAnimatedBackground,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
        "RiadhAdrani",
        false
    );
};

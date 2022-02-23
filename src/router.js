import { createRoute, createRouter, goTo } from "@riadh-adrani/recursive/router";
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
          createRoute({
               name: "/",
               component: Home,
               subRoutes: [
                    createRoute({ name: "/skills", component: Skills }),
                    createRoute({ name: "/projects", component: Projects }),
                    createRoute({
                         name: "/academic-background",
                         component: AcademicBackground,
                    }),
                    createRoute({
                         name: "/professional-career",
                         component: ProfessionalCareer,
                    }),
                    createRoute({
                         name: "/animated-backgrounds",
                         component: AnimatedBackgrounds,
                         subRoutes: [
                              createRoute({
                                   name: "/:id;",
                                   component: AnimatedBackground,
                                   title: "Animated Background",
                              }),
                         ],
                    }),
                    createRoute({
                         name: "/edit",
                         component: Edit,
                         subRoutes: [
                              createRoute({ name: "/auth", component: Login }),
                              createRoute({
                                   name: "/animated-backgrounds",
                                   component: EditAnimatedBackground,
                                   subRoutes: [
                                        createRoute({
                                             name: "/add",
                                             component: AddAnimatedBackground,
                                        }),
                                        createRoute({
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

import { route } from ".";
import academic from "./views/academic";
import home from "./views/home";
import pro from "./views/pro";
import projects from "./views/projects";
import resume from "./views/resume";

export default route({
    path: "/",
    title: "Home | Riadh Adrani",
    component: home,
    routes: [
        route({ path: "projects", title: "Projects | Riadh Adrani", component: projects }),
        route({
            path: "pro",
            title: "Professional Career | Riadh Adrani",
            component: pro,
        }),
        route({
            path: "academy",
            title: "Academic Background | Riadh Adrani",
            component: academic,
        }),
        route({ path: "resume", title: "Resumé | Riadh Adrani", component: resume }),
    ],
});

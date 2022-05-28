import { Column } from "@riadh-adrani/recursive/components";
import ProjectView from "../components/ProjectView";
import Title from "../elements/Title";

const list = [
    {
        name: "Wroddit",
        type: "Web App",
        color: "#E9ECEF",
        logo: "https://riadhadrani.github.io/wroddit/imgs/wroddit-dark.ce2166f57a4607631a155b725ccc621a.png",
        description: `Wroddit is a "Reddit" clone developed using "Recursive.js". 
        The App allow the user to create an account, create communities, write posts within them, 
        add comments, and make replies nested up to a depth of 10. The Web App support dark mode.`,
        technologies: ["Javascript", "Recursive", "Firebase", "Font Awesome"],
        projectLink: "https://github.com/RiadhAdrani/wroddit",
        demoLink: "https://riadhadrani.github.io/wroddit/",
    },
    {
        name: "Dwidder",
        type: "Web App",
        color: "#1e9eae",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/dwidder/master/src/assets/icon.png",

        description: `Dwidder is a social network based on "Twitter". 
        The name is inspired from a Tunisian meal called "Dwida". 
        The App allow the user to create an account (😯), 
        create posts (text and image), 
        search for other users and check their profiles, 
        change the theme of the App (Light, Dark and Abyss) 
        and real time messaging using "Firebase Firestore"`,
        technologies: ["Javascript", "Recursive", "Firebase", "Font Awesome"],
        projectLink: "https://github.com/RiadhAdrani/dwidder",
        demoLink: "https://riadhadrani.github.io/dwidder/",
    },
    {
        name: "Color Noter",
        type: "Web App",
        color: "#8cacb9",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/color-noter-desktop/master/md/color-noter.png",
        description: `Color Noter is a color based note taking 
          app that offer the user the ability to write 
          and save his ideas and todos in an easy to use environment.`,
        technologies: ["Javascript", "Recursive", "Firebase"],
        projectLink: "https://github.com/RiadhAdrani/color-noter-web",
        demoLink: "https://riadhadrani.github.io/color-noter-web/",
    },
    {
        name: "Recursive",
        type: "Front End Framework",
        color: "#cf2026",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/recursive/master/logo.png",
        description: `Recursive is an ongoing project that allow developers to build a functional,
         component-based, Javascript only, beautiful and interactive Web applications.`,
        technologies: ["Javascript"],
        projectLink: "https://github.com/RiadhAdrani/recursive",
        demoLink: "https://riadhadrani.github.io/recursive-website/",
    },
    {
        name: "Color Noter",
        type: "Desktop App",
        color: "#8cacb9",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/color-noter-desktop/master/md/color-noter.png",
        description: `Color Noter is a color based note taking app 
        that offer the user the ability to write and save his ideas 
        and todos in an easy to use environment.`,
        technologies: ["Javascript", "Electron", "React", "Firebase"],
        projectLink: "https://github.com/RiadhAdrani/color-noter-desktop",
    },
    {
        name: "Question Submission",
        type: "Web App",
        color: "#ffde16",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/guess-app-questions-submission/master/src/assets/logo_solid.png",
        description: `In order to collect questions for an upcoming Android project, 
          I made this website in which the user can submit a question 
          that will be saved to Firebase's Firestore database.`,
        technologies: ["Javascript", "Vue", "Firebase"],
        projectLink: "https://github.com/RiadhAdrani/guess-app-questions-submission",
        demoLink: "https://riadhadrani.github.io/guess-app-questions-submission",
    },
    {
        name: "Azur City - Prototype",
        type: "Android App",
        color: "#01acc8",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/azur_app/master/app/src/main/res/drawable/ic_app_icon.jpg",
        description: `A prototype of a commercial app made for Azur City. 
        The App was presented as an End of studies projects.`,
        technologies: ["Kotlin", "Android"],
        projectLink: "https://github.com/RiadhAdrani/azur_app",
    },
    {
        name: "Werewolves of the Miller Hollow",
        type: "Android App",
        color: "#fbb03b",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/werewolves_of_the_millers_hollow/master/app/src/main/res/drawable/ww_app_icon.jpg",
        description: `This app aims to help the narrator of a Werewolves game avoid making error 
        by managing all the actions made by the players, and computing them according to the game rules.`,
        technologies: ["Kotlin", "Android"],
        projectLink: "https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow",
    },
    {
        name: "Color Noter",
        type: "Android App",
        color: "#8cacb9",
        logo: "https://raw.githubusercontent.com/RiadhAdrani/color-noter-desktop/master/md/color-noter.png",
        description: `Color Noter is a color based note taking app 
      that offer the user the ability to write and save his ideas 
      and todos in an easy to use environment.`,
        technologies: ["Java", "Android", "Firebase"],
        projectLink: "https://github.com/RiadhAdrani/color_note_plus",
    },
];

export default () => {
    return Column({
        className: "container",
        children: [Title("Projects"), ...list.map((item) => ProjectView(item))],
    });
};

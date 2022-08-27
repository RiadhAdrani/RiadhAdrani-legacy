import {
    android,
    electron,
    express,
    firebase,
    java,
    js,
    kotlin,
    nodejs,
    postgres,
    react,
    recursive,
    vue,
} from "./technologies";

const project = (
    name,
    type,
    logo,
    color,
    fromTo,
    links = [],
    shortDescription = "",
    fullDescription = [],
    techs = []
) => {
    return { name, type, logo, color, fromTo, links, shortDescription, fullDescription, techs };
};

export const recursiveFramework = project(
    "Recursive",
    "UI Framework",
    recursive.src,
    "#cf2026",
    "Since Spetember 2021",
    ["https://github.com/RiadhAdrani/recursive", "https://riadhadrani.github.io/recursive-docs/"],
    "Recursive is a Javascript framework to build beautiful component-based apps.",
    [
        "Recursive is an ongoing project that allow developers to build a functional, component-based,",
        " Javascript only, beautiful and interactive Web applications.",
    ],
    [js, nodejs]
);

export const wetube = project(
    "WeTube",
    "Web App",
    "https://raw.githubusercontent.com/RiadhAdrani/wetube-fe/master/wetube.png",
    "#00b0fa",
    "July 2022",
    ["https://github.com/RiadhAdrani/wetube-be", "https://github.com/RiadhAdrani/wetube-fe"],
    "A Youtube clone built with Recursive and Express.",
    [
        "Another clone added to the list of clones that I made using my own framework Recursive for the web,",
        "and as you guessed it, its a Youtube clone.",
    ],
    [recursive, js, express, postgres]
);

export const audify = project(
    "Audify",
    "Desktop App",
    "https://raw.githubusercontent.com/RiadhAdrani/audiphy/master/ss/audiphy.png",
    "#3083f6",
    "June 2022",
    ["https://github.com/RiadhAdrani/audiphy"],
    "A simple audio player for Windows.",
    "Audiphy is intended to be a Spotify clone, but turned out to be an audio player for Windows OS.",
    [js, electron, recursive]
);

export const wroddit = project(
    "Wroddit",
    "Web App",
    "https://riadhadrani.github.io/wroddit/imgs/wroddit-dark.ce2166f57a4607631a155b725ccc621a.png",
    "#E9ECEF",
    "May 2022",
    ["https://github.com/RiadhAdrani/wroddit"],
    "Reddit clone made using Recursive.js for front-end and Firebase as a database.",
    [],
    [js, recursive, firebase]
);

export const dwidder = project(
    "Dwidder",
    "Web App",
    "https://raw.githubusercontent.com/RiadhAdrani/dwidder/master/src/assets/icon.png",
    "#1e9eae",
    "February 2022",
    ["https://github.com/RiadhAdrani/dwidder"],
    "Making a mini social media website using Recursive.js",
    [
        "Dwidder is a twitter clone made to showcase the potential of Recursive.js",
        "The name came originally from a tunisian meal called Dwida as I was developping the app.",
    ],
    [js, recursive, firebase]
);

export const questionSubmissionVue = project(
    "Questions Submission",
    "Web App",
    "https://raw.githubusercontent.com/RiadhAdrani/guess-app-questions-submission/master/src/assets/logo_solid.png",
    "#ffde16",
    "July 2021",
    ["https://github.com/RiadhAdrani/guess-app-questions-submission"],
    "A website that allow users to submit their questions and answers for a possible game app.",
    "In order to collect questions for a guessing game app that I am planning to do in the future, I decided to create a website with Vue.js to solve the problem.",
    [js, vue, firebase]
);

export const azurApp = project(
    "Azur City App",
    "Android App",
    "https://raw.githubusercontent.com/RiadhAdrani/azur_app/master/app/src/main/res/drawable/ic_app_icon.jpg",
    "#01acc8",
    "February 2021 - May 2021",
    ["https://github.com/RiadhAdrani/azur_app"],
    "A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.",
    [],
    [android, kotlin]
);

export const werewolvesOfTheMillerHollow = project(
    "Werewolves of the Miller's Hollow",
    "Android App",
    "https://raw.githubusercontent.com/RiadhAdrani/werewolves_of_the_millers_hollow/master/app/src/main/res/drawable/ww_app_icon.jpg",
    "#fbb03b",
    "January 2021 - June 2021",
    ["https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow"],
    'Creating a guide for the game "Werewolves of The Millers Hollow" originally " Les loups garous de Thierclieux"',
    [],
    [android, kotlin]
);

export const colorNoter = project(
    "Color Noter",
    "Cross platform App",
    "https://raw.githubusercontent.com/RiadhAdrani/color-noter-desktop/master/md/color-noter.png",
    "#8cacb9",
    "September 2020 - September 2021",
    [
        "https://github.com/RiadhAdrani/color_note_plus",
        "https://github.com/RiadhAdrani/color-noter-desktop",
        "https://github.com/RiadhAdrani/color-noter-web",
    ],
    "Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.",
    [],
    [android, java, js, electron, react, recursive, firebase]
);

export const allProjects = [
    recursiveFramework,
    wetube,
    audify,
    wroddit,
    dwidder,
    questionSubmissionVue,
    azurApp,
    werewolvesOfTheMillerHollow,
    colorNoter,
];

export default allProjects;

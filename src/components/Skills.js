import { Column, P } from "../../recursive-js/Recursive-Components.js";
import SkillSubSection from "./SkillSubSection.js";
import Title from "./Title.js";

const env = [
     { name: "android", logo: "android" },
     { name: "react", logo: "react" },
     { name: "flutter", logo: "flutter" },
     { name: "xamarin", logo: "xamarin" },
     { name: "vuejs", logo: "vuedotjs" },
     { name: "electron", logo: "electron" },
     { name: "angular", logo: "angular" },
     { name: "unity", logo: "unity" },
     { name: "firebase", logo: "firebase" },
];
const lang = [
     { name: "kotlin", logo: "kotlin" },
     { name: "java", logo: "java" },
     { name: "javascript", logo: "javascript" },
     { name: "c%23", logo: "c-sharp" },
     { name: "typescript", logo: "typescript" },
     { name: "dart", logo: "dart" },
     { name: "c", logo: "c" },
     { name: "c++", logo: "c%2B%2B" },
     { name: "php", logo: "php" },
     { name: "css3", logo: "css3" },
     { name: "html5", logo: "html5" },
     { name: "markdown", logo: "markdown" },
     { name: "latex", logo: "latex" },
];
const ide = [
     { name: "Visual%20Studio%20Code", logo: "visual-studio-code" },
     { name: "Android%20Studio", logo: "android-studio" },
     { name: "Visual%20Studio", logo: "visual-studio" },
     { name: "IntelliJ%20IDEA", logo: "intellij-idea" },
];

const vc = [
     { name: "git", logo: "git" },
     { name: "github", logo: "github" },
];

const gd = [
     { name: "adobe%20after%20effects", logo: "adobe%20after%20effects" },
     { name: "adobe%20illustrator%20", logo: "adobeillustrator" },
     { name: "adobe%20photoshop", logo: "adobephotoshop" },
     { name: "adobe%20premiere%20pro", logo: "adobepremierepro" },
];

export default () =>
     Column({
          styleSheet: {
               className: "skills-section",
               normal: {
                    justifyContent: "left",
                    padding: "30px 20px",
                    background: "#1e1e1eee",
                    border: "1px solid #ffffff77",
                    borderRadius: "5px",
                    backdropFilter: "invert(100)",
                    marginBottom: "20px",
               },
               mediaQueries: [
                    {
                         condition: "(max-width:600px)",
                         normal: {
                              padding: "20px 10px",
                         },
                    },
               ],
          },
          children: [
               Title("Skills", "fas fa-laptop-code"),
               P({
                    text: `I am a fast learner and I love to create small projects to help me understand the secrets of the subject that
              I am learning, I made a fair amount of apps that could be found in my Github profile page. Here is a summary of what I learned so far:`,
               }),
               SkillSubSection("Environment & Frameworkds", env),
               SkillSubSection("Programming Languages & Markups", lang),
               SkillSubSection("IDEs & Editors", ide),
               SkillSubSection("Version Control", vc),
               SkillSubSection("Graphic Design", gd),
          ],
     });

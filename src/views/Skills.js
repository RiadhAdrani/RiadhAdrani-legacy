import { Column, H2, H4, P, Row, Span } from "@riadh-adrani/recursive/components";
import SkillView from "../components/SkillView";
import Title from "../elements/Title";

const list = [
     {
          title: "Web Development",
          subTitle: "Building beautiful web Apps",
          text: `I started learning the web in Mars 2021 
        by taking the freeCodeCamp courses and dived deeper into React. 
        I watched a documentary about Vue.js and decided to learn it too, 
        it was a good experience. Meanwhile, 
        I worked as a Web Designer, which improved my skills further.
        After Vue.js, I tried to learn Angular, 
        I understood the structure of the framework, 
        but I think, and still think, that it is overengineered.
        And with that, I decided to make my own Front End framework which I called "Recursive"`,
          background: "https://wallpaperaccess.com/full/4635743.jpg",
          technologies: [
               "Javascript",
               "Typescript",
               "Dart",
               "React",
               "Vue",
               "Angular",
               "Svelte",
               "Flutter",
               "Recursive",
               "Bootstrap",
          ],
     },
     {
          title: "Mobile Development",
          subTitle: "Android > iOS",
          text: `Android Development was actually my "First Love" which started all of this! 
          My first App was a Messenger clone made for a class project using "Kotlin" and "Firebase".
          In addition to that, 
          I created a note-taking app called "Color Noter" using "Java" and then I forgot about that language.
          I also made more apps, for friends and customers, as Freelance.`,
          background: "https://wallpapercave.com/wp/wp9517064.jpg",
          technologies: ["Java", "Kotlin", "Dart", "C#", "Native", "Flutter", "Xamarin"],
     },
     {
          title: "Desktop Development",
          subTitle: "Electron for the win",
          text: `Front End development is easy, very easy (at least for me), 
          and I found it hard to get into the ".NET" universe (I don't have a Mac),
          and then I stumbled upon "Electron.js" : 
          which basically load a web page in a chromium instance and that's very genius! 
          And it works for all major platforms too!
          So, you use what you learned in web to develop Desktop apps.
          Hey wait! I am a hobbyist game developer too...`,
          background: "https://wallpaper.dog/large/13690.png",
          technologies: ["Javascript", "C#", "Electron", "Unity"],
     },
     {
          title: "Graphic Designer",
          subTitle: "Adobe got them all",
          text: `I had a youtube channel in which I posted "Extended Remixes" 
          for "Epic-Neo-classical-Orchestral" music (google Two Steps From Hell). 
          I created animated backgrounds too using After Effects and Photoshop. 
          I refined my skills during the pandemic in which a lot of courses became free, 
          and that was not a waste of time as I got my first job as a Web Designer.`,
          background: "https://wallpapercave.com/wp/wp3985137.jpg",
          technologies: [
               "Adobe Photoshop",
               "Adobe Illustrator",
               "Adobe After Effects",
               "Adobe Premiere Pro",
          ],
     },
];

export default () => {
     return Column({
          className: "container",
          children: [Title("Skills"), ...list.map((skill) => SkillView(skill))],
     });
};

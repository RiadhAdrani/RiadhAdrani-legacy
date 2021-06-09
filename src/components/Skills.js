import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import Selector from "../abstracted-components/attributes/Selector";
import Container from "../abstracted-components/components/Container";
import TextView from "../abstracted-components/components/TextView";

const Skill = (title, description, technologies) => {
     return Container({
          minWidth: "400px",
          width: "40%",
          marginHorizontal: "center",
          backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.75),
          border: Border.newAll("2px", "solid", "white"),
          flexDirection: "column",
          justifyContent: "row",
          padding: "2%",
          margin: "2%",
          textAlign: "center",
          textColor: "white",
          transitionDuration: "0.25s",
          hover: Selector.new({
               backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.95),
               textColor: Colors.RoyalBlue,
          }),
          children: [
               TextView({
                    text: title,
                    textAlign: "center",
                    color: "inherit",
                    padding: "4%",
                    size: "2em",
               }),
               TextView({
                    text: description,
                    textAlign: "center",
                    color: "inherit",
                    padding: "4%",
                    size: "1.1em",
               }),
          ],
     });
};

const Skills = () => {
     return Container({
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          children: [
               Skill(
                    "Android Development",
                    "I am an epic android developer, making multiple apps for personal and professional purposes, you can count on me to make the prettiest and most elegant UI with a solid UX and a strong architecture."
               ),
               Skill(
                    "Web Development",
                    "This portfolio website is built using a package that is currently under development by none other than me."
               ),
               Skill(
                    "Graphic Design",
                    "Currently a web designer, I work a lot with softwares like Adobe Photoshop, Illustrator. I have a YouTube channel in which I post extended remixes of neo-classical and orchestral music, and for that, I use Adobe Premiere Pro and After Effects."
               ),
               Skill(
                    "Game Design",
                    "A hobbyist game developer. I make small games that I share with family members and friends, not so serious!"
               ),
          ],
     });
};

export default Skills;

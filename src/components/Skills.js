import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import Selector from "../abstracted-components/attributes/Selector";
import Container from "../abstracted-components/components/Container";
import TextView from "../abstracted-components/components/TextView";
import ImageView from "../abstracted-components/components/ImageView";
import Icons from "../img/Icons";
import BackgroundBlendMode from "../abstracted-components/attributes/BackgroundBlendMode";
import BackgroundSize from "../abstracted-components/attributes/BackgroundSize";
import FontFamily from "../abstracted-components/attributes/FontFamily";
import Animation from "../abstracted-components/attributes/Animation";

const technology = (name, logo) => {
     return Container({
          border: Border.newAll("1px", "solid", "white"),
          flexDirection: "column",
          textColor: "inherit",
          marginVertical: "20px",
          padding: "5px",
          width: "20%",
          minWidth: "100px",
          transitionDuration: "0.25s",
          animations: `@keyframes fadeIn {
               0%{
                    opacity:0%;
               }
               100%{
                    opacity:100%;
               }
          }`,
          animation: Animation.new("fadeIn", "2s", 0, "0s", "1"),
          hover: Selector.new({
               backgroundColor: "white",
               textColor: "black",
               backgroundImage: `url(${logo}nope)`,
               backgroundBlendMode: BackgroundBlendMode.ColorDodge,
               backgroundPosition: "center-center",
               backgroundSize: BackgroundSize.Cover,
          }),
          children: [
               ImageView({ image: logo, alignSelf: "center", padding: "20px", maxHeight: "40px" }),
               TextView({
                    text: name,
                    color: "inherit",
                    alignSelf: "center",
                    size: "1.1em",
                    padding: "5px",
                    textAlign: "center",
               }),
          ],
     });
};

const Technologies = (techs) => {
     return Container({
          flexDirection: "row",
          justifyContent: "space-evenly",
          textColor: "inherit",
          flexWrap: "wrap",
          children: [...techs],
     });
};

const Skill = (title, description, technologies) => {
     return Container({
          minWidth: "300px",
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
                    fontFamily: FontFamily.Verdana,
                    color: "inherit",
                    padding: "4%",
                    size: "2em",
               }),
               TextView({
                    text: description,
                    textAlign: "center",
                    flexGrow: "1",
                    color: "inherit",
                    padding: "4%",
                    size: "1.1em",
               }),
               Technologies([technologies]),
          ],
     });
};

const Skills = () => {
     return Container({
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          children: [
               TextView({
                    text: "Skills",
                    size: "3em",
                    textAlign: "center",
                    padding: "2%",
                    width: "100%",
               }),
               Skill(
                    "Android Development",
                    "I am an epic android developer, making multiple apps for personal and professional purposes, you can count on me to make the prettiest and most elegant UI with a solid UX and a strong architecture.",
                    [
                         technology("Android Studio", Icons.AndroidStudio),
                         technology("Flutter", Icons.Flutter),
                         technology("Kotlin", Icons.Kotlin),
                         technology("Java", Icons.Java),
                    ]
               ),
               Skill(
                    "Web Development",
                    "This portfolio website is built using a package that is currently under development by none other than me.",
                    [
                         technology("React Js", Icons.ReactJs),
                         technology("Flutter", Icons.Flutter),
                         technology("JavaScript", Icons.JavaScript),
                    ]
               ),
               Skill(
                    "Graphic Design",
                    "Currently a web designer, I work a lot with softwares like Adobe Photoshop, Illustrator. I have a YouTube channel in which I post extended remixes of neo-classical and orchestral music, and for that, I use Adobe Premiere Pro and After Effects.",
                    [
                         technology("Photoshop", Icons.Photoshop),
                         technology("After Effects", Icons.AfterEffects),
                         technology("Illustrator", Icons.Illustrator),
                         technology("Premiere Pro", Icons.PremierePro),
                    ]
               ),
               Skill(
                    "Game Design",
                    "A hobbyist game developer. I make small games that I share with family members and friends, not so serious!",
                    [technology("C#", Icons.Csharp)]
               ),
          ],
     });
};

export default Skills;

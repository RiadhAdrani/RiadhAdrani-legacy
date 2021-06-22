import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import Filter from "../abstracted-components/attributes/Filter";
import Selector from "../abstracted-components/attributes/Selector";
import Transform from "../abstracted-components/attributes/Transform";
import Container from "../abstracted-components/components/Container";
import ImageView from "../abstracted-components/components/ImageView";
import TextView from "../abstracted-components/components/TextView";
import FontAwesomeIcons from "../abstracted-components/icons/FontAwesomeIcons";
import Icons from "../img/Icons";

const Icon = (logo) =>
     ImageView({
          image: logo,
          alignSelf: "center",
          padding: "5px",
          width: "30px",
     });

const Project = ({ title, image, description, technologies, link }) => {
     return Container({
          border: Border.newAll("4px", "solid", "white"),
          padding: "10px",
          paddingVertical: "20px",
          backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.75),
          marginHorizontal: "5%",
          marginVertical: "1%",
          transitionDuration: "0.33s",
          hover: Selector.new({ backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.9) }),
          children: [
               ImageView({
                    image: image,
                    width: "125px",
                    height: "125px",
                    alignSelf: "center",
                    borderRadius: "50%",
                    marginHorizontal: "1%",
                    border: Border.newAll("4px", "solid", "white"),
               }),
               Container({
                    flexDirection: "column",
                    alignSelf: "center",
                    width: "100%",
                    marginHorizontal: "1%",
                    children: [
                         Container({
                              flexWrap: "wrap",
                              children: [
                                   TextView({
                                        text: title,
                                        size: "2em",
                                        padding: "0.5%",
                                   }),
                                   ImageView({
                                        image: FontAwesomeIcons.ExternalLinkAlt,
                                        width: "30px",
                                        filter: Filter.newInvert(100),
                                        marginHorizontal: "10px",
                                        cursor: "pointer",
                                        transitionDuration: "1s",
                                        onClick: () => {
                                             window.open(link, "_blank");
                                        },
                                        hover: Selector.new({
                                             transform: Transform.newRotate(360),
                                             width: "40px",
                                        }),
                                   }),
                                   Container({
                                        flexWrap: "wrap",
                                        children: [technologies],
                                   }),
                              ],
                         }),
                         TextView({
                              lineHeight: 1.5,
                              text: description,
                              padding: "0.5%",
                         }),
                    ],
               }),
          ],
     });
};

const Projects = () => {
     return Container({
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [
               Project({
                    title: "Dark Lord - Youtube Channel",
                    link: "https://www.youtube.com/c/DarkLordMusic/",
                    image: "https://yt3.ggpht.com/ytc/AAUvwnh6aTq5EAYJyMFgNZLlXOIN7BauzQdaSXqM4hDqVA=s176-c-k-c0x00ffffff-no-rj",
                    technologies: [
                         Icon(Icons.YouTube),
                         Icon(Icons.PremierePro),
                         Icon(Icons.AfterEffects),
                         Icon(Icons.Photoshop),
                    ],
                    description:
                         "Dark Lord is a music oriented youtube channel. I created the channel in the 16th of September 2016, and despite having a rough start in the first year, the channel grew through the years to reach more than 20.000 subscribers and more than 15.000.000 views, which is really incredible. Its main purpose is to provide well-crafted extended version of Epic Trailer Music. Our Extended Music is not a loop, we try to remix different parts to create a longer and musically accepted listening experience.  ",
               }),
               Project({
                    title: "Color Noter - Android App",
                    link: "https://github.com/RiadhAdrani/color_note_plus",
                    image: Icons.ColorNoter,
                    technologies: [Icon(Icons.AndroidStudio), Icon(Icons.Java)],
                    description:
                         "Color Noter is a note-note taking mobile App for Android OS allowing its user to write and save notes on the fly. The App offers two types of notes : Text Note and Check List Note. Cloud saving is a feature, however, Online storage is just 1GB provided by Google's Firebase.",
               }),
               Project({
                    title: "Werewolf of the Millers Hollow : Narrator Guide - Android App",
                    link: "https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow",
                    image: Icons.Werewolves,
                    technologies: [Icon(Icons.AndroidStudio), Icon(Icons.Kotlin)],
                    description: `Werewolf of the Millers Hollow : Narrator Guide is an app based on the popular role game and originally french "Les Loups garou de Thiercilieux". The App is for Android OS, written in Kotlin and currently support up to 10 roles (Guardian, Servant, Werewolf, Infect Father of Wolves, Sorcerer, Seer, Barber, Knight, Captain and the Simple Villager) and a bigger number of actual players, it helps the narrator to make a perfect job managing the game. The Application also contains documentation about the different roles in the game and their abilities.`,
               }),
               Project({
                    title: "Abstracted Components - Package for React.Js",
                    link: "https://github.com/RiadhAdrani/abstracted-components",
                    image: Icons.ReactJs,
                    technologies: [Icon(Icons.ReactJs), Icon(Icons.JavaScript)],
                    description: `Abstracted Components (abstracted-components) is an upcoming node.js package based on "styled-components" adding an abstracting layer and easing the creation of components.`,
               }),
          ],
     });
};

export default Projects;

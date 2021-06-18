import Border from "../abstracted-components/attributes/Border";
import Filter from "../abstracted-components/attributes/Filter";
import Selector from "../abstracted-components/attributes/Selector";
import Transform from "../abstracted-components/attributes/Transform";
import Container from "../abstracted-components/components/Container";
import ImageView from "../abstracted-components/components/ImageView";
import TextView from "../abstracted-components/components/TextView";
import FontAwesomeIcons from "../abstracted-components/icons/FontAwesomeIcons";

const Project = ({ title, image, description, technologies, link }) => {
     return Container({
          border: Border.newAll("4px", "solid", "white"),
          padding: "10px",
          margin: "2%",
          children: [
               ImageView({
                    image: image,
                    width: "33%",
                    minWidth: "100px",
                    alignSelf: "center",
                    borderRadius: "50%",
                    marginHorizontal: "1%",
               }),
               Container({
                    flexDirection: "column",
                    alignSelf: "center",
                    marginHorizontal: "1%",
                    children: [
                         Container({
                              children: [
                                   TextView({
                                        text: title,
                                        size: "2.5em",
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
                    title: "Dark Lord",
                    link: "https://www.youtube.com/c/DarkLordMusic/",
                    image: "https://yt3.ggpht.com/ytc/AAUvwnh6aTq5EAYJyMFgNZLlXOIN7BauzQdaSXqM4hDqVA=s176-c-k-c0x00ffffff-no-rj",
                    description:
                         "Dark Lord is a music oriented youtube channel. I created the channel in the 16th of September 2016, and despite having a rough start in the first year, the channel grew through the years to reach more than 20.000 subscribers and more than 15.000.000 views, which is really incredible. Its main purpose is to provide well-crafted extended version of Epic Trailer Music. Our Extended Music is not a loop, we try to remix different parts to create a longer and musically accepted listening experience.  ",
               }),
          ],
     });
};

export default Projects;

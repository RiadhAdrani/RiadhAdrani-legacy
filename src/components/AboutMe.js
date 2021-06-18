import AlignItems from "../abstracted-components/attributes/AlignItems";
import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import FontFamily from "../abstracted-components/attributes/FontFamily";
import Selector from "../abstracted-components/attributes/Selector";
import Container from "../abstracted-components/components/Container";
import ImageView from "../abstracted-components/components/ImageView";
import TextView from "../abstracted-components/components/TextView";
import Icons from "../img/Icons";

const Icon = (logo, onClick) =>
     ImageView({
          image: logo,
          alignSelf: "center",
          padding: "20px",
          maxHeight: "40px",
          onClick: () => {
               onClick();
          },
          cursor: onClick ? "pointer" : "",
     });

const Section = (title, companyOrSchool, period, description, technologies) => {
     return Container({
          flexDirection: "column",
          fontFamily: FontFamily.Verdana,
          margin: "1%",
          padding: "2%",
          backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.75),
          border: Border.newAll("4px", "solid", "white"),
          transitionDuration: "0.3s",
          hover: Selector.new({
               textColor: Colors.RoyalBlue,
               backgroundColor: "white",
               borderColor: Colors.RoyalBlue,
          }),
          children: [
               TextView({
                    text: title,
                    size: "2em",
                    fontFamily: "inherit",
                    textAlign: "left",
                    padding: "0.5%",
               }),
               TextView({
                    text: companyOrSchool,
                    size: "1.5em",
                    letterSpacing: "2px",
                    fontFamily: "inherit",
                    textAlign: "left",
                    padding: "0.5%",
               }),
               TextView({
                    text: period,
                    size: "1.25em",
                    letterSpacing: "2px",
                    fontFamily: "inherit",
                    textAlign: "left",
                    padding: "0.5%",
               }),
               TextView({
                    text: description,
                    fontFamily: "inherit",
                    textAlign: "left",
                    padding: "0.5%",
               }),
               Container({
                    flexDirection: "row",
                    alignItems: AlignItems.FlexStart,
                    flexWrap: "wrap",
                    children: [technologies],
               }),
          ],
     });
};

const AboutMe = () => {
     return Container({
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [
               TextView({ text: "About Me", size: "3em", textAlign: "center", padding: "2%" }),
               Section(
                    "Web Designer",
                    "Triweb",
                    "Since May 2021",
                    "My job consists of designing the graphical charter of the website and integrating it using a private CMS used by the company.",
                    [
                         Icon(Icons.Photoshop),
                         Icon(Icons.Illustrator),
                         Icon(Icons.Html),
                         Icon(Icons.Css),
                         Icon(Icons.Bootstrap),
                    ]
               ),
               Section(
                    "Dark Lord",
                    "Youtube",
                    "Since September 2016",
                    "Content consists of Extended Remixes (Using Adobe Premiere Pro and Audition) of Neo-classical/Trailer/Epic music coupled with an animated background (Using After Effects). When I emerged into the endless world of the internet, I had a dream to become a content creator on YouTube. I started the journey in 2016, and after almost 5 years (in the time of writing this lines : June 2021) I can confortably say that I lived up to my dream, with more than 20K subscribers, more than 17 Million views! I learned a lot from this experience: The necessity of the continuous learning and skills improvement, the consistency and the sense of responsbility.",
                    [
                         Icon(Icons.YouTube, () => {
                              window.open("https://www.youtube.com/c/DarkLordMusic/", "_blank");
                         }),
                         Icon(Icons.PremierePro),
                         Icon(Icons.AfterEffects),
                         Icon(Icons.Photoshop),
                    ]
               ),
               Section(
                    "Freelancer",
                    "Self-Employed",
                    "June 2020 - April 2021",
                    "Mostly in the Graphic Design Universe, I worked on many (small) projects for customers and friends.",
                    [
                         Icon(Icons.PremierePro),
                         Icon(Icons.AfterEffects),
                         Icon(Icons.Photoshop),
                         Icon(Icons.Illustrator),
                         Icon(Icons.AndroidStudio),
                         Icon(Icons.Kotlin),
                         Icon(Icons.Java),
                    ]
               ),
               Section(
                    "Applied Bachelor of Industrial Computing (Embedded Systems)",
                    "Higher Institute of Information Technology and Communication (ISTIC) Borj Cédria",
                    "September 2027 - July 2020",
                    "",
                    [
                         Icon(Icons.C),
                         Icon(Icons.Cpp),
                         Icon(Icons.Php),
                         Icon(Icons.AndroidStudio),
                         Icon(Icons.Kotlin),
                         Icon(Icons.Html),
                         Icon(Icons.Css),
                    ]
               ),
          ],
     });
};

export default AboutMe;

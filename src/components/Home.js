import TextShadow from "../abstracted-components/attributes/TextShadow";
import Selector from "../abstracted-components/attributes/Selector";
import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import Container from "../abstracted-components/components/Container";
import TextView from "../abstracted-components/components/TextView";
import ImageView from "../abstracted-components/components/ImageView";
import TextDecoration from "../abstracted-components/attributes/TextDecoration";
import FontAwesomeIcons from "../abstracted-components/icons/FontAwesomeIcons";
import Filter from "../abstracted-components/attributes/Filter";
import img from "../img/cover1.jpg";
import { Link } from "react-router-dom";
import FontFamily from "../abstracted-components/attributes/FontFamily";

const Linker = ({ to, children }) => (
     <Link
          style={{
               textDecoration: "none",
               display: "flex",
               flexDirection: "column",
               padding: "4%",
          }}
          to={to}
     >
          {children}
     </Link>
);

const Section = ({ title = "new section", icon = img, page, invert = false }) => {
     return Container({
          textColor: "inherit",
          textAlign: "center",
          flexGrow: 1,
          minWidth: "200px",
          maxWidth: "25%",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "10px",
          margin: "1%",
          backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.75),
          border: Border.newAll("2px", "solid", "white"),
          transitionDuration: "0.25s",
          hover: Selector.new({
               backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.9),
               borderColor: Colors.RoyalBlue,
          }),
          cursor: "pointer",
          children: [
               Linker({
                    to: page,
                    children: [
                         ImageView({
                              image: icon,
                              height: "50px",
                              width: "50px",
                              cursor: "inherit",
                              filter: Filter.newInvert(invert ? 100 : 0),
                              alignSelf: "center",
                              margin: "1%",
                              marginBottom: "4%",
                         }),
                         TextView({
                              text: title,
                              size: "1.5em",
                              alignSelf: "center",
                              color: "white",
                              textDecoration: TextDecoration.newUnderline("transparent", "solud"),
                              margin: "1%",
                              textAlign: "center",
                         }),
                    ],
               }),
          ],
     });
};

const Home = () => {
     return Container({
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [
               TextView({
                    text: "Hi, I'm Riadh. I am a Web Designer, an Android Developer and a hobbiyst Game Maker.",
                    color: "white",
                    padding: "2%",
                    size: "2.5em",
                    fontFamily: FontFamily.Tahoma,
                    textAlign: "center",
                    paddingHorizontal: "5%",
                    textShadow: TextShadow.new({
                         hOffset: "1px",
                         vOffset: "1px",
                         blur: "5px",
                         color: Colors.Grey,
                    }),
               }),
               Container({
                    flexWrap: "wrap",
                    textColor: "inherit",
                    justifyContent: "center",
                    padding: "2%",
                    children: [
                         Section({
                              title: "About Me",
                              icon: FontAwesomeIcons.History,
                              page: "./about-me",
                              invert: true,
                         }),
                         Section({
                              title: "My Skills",
                              icon: FontAwesomeIcons.CheckCircle,
                              page: "./skills",
                              invert: true,
                         }),
                         Section({
                              title: "Projects",
                              icon: FontAwesomeIcons.ProjectDiagram,
                              page: "./projects",
                              invert: true,
                         }),
                         Section({
                              title: "Animated Backgrounds",
                              icon: FontAwesomeIcons.PhotoVideo,
                              page: "./animatedBackgrounds",
                              invert: true,
                         }),
                    ],
               }),
          ],
     });
};

export default Home;

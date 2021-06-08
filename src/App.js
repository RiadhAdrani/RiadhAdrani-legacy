import BackgroundSize from "./abstracted-components/attributes/BackgroundSize";
import Selector from "./abstracted-components/attributes/Selector";
import Border from "./abstracted-components/attributes/Border";
import TextShadow from "./abstracted-components/attributes/TextShadow";
import Colors from "./abstracted-components/attributes/Colors";
import Container from "./abstracted-components/components/Container";
import TextView from "./abstracted-components/components/TextView";
import ImageView from "./abstracted-components/components/ImageView";
import "./App.css";
import img from "./img/cover1.jpg";
import iconCircular from "./img/icon_circular.ico";
import BorderRadius from "./abstracted-components/attributes/BorderRadius";
import meIcon from "./img/me.svg";
import skillsIcon from "./img/skills.svg";
import projectsIcon from "./img/projects.svg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Section = ({ title = "new section", icon = img, page }) => {
     return Container({
          textColor: "inherit",
          textAlign: "center",
          flexGrow: 1,
          minWidth: "200px",
          justifyContent: "center",
          flexDirection: "column",
          padding: "1%",
          paddingVertical: "3%",
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
               ImageView({
                    image: icon,
                    height: "50px",
                    width: "50px",
                    cursor: "inherit",
                    alignSelf: "center",
                    margin: "1%",
                    marginBottom: "4%",
               }),
               TextView({
                    text: title,
                    size: "1.5em",
                    alignSelf: "center",
                    textDecoration: "initial",
                    margin: "1%",
                    textAlign: "center",
               }),
          ],
     });
};

const Home = () => {
     return [
          ImageView({
               image: iconCircular,
               width: "15%",
               minWidth: "100px",
               alignSelf: "center",
               marginVertical: "2%",
               border: Border.newAll("5px", "solid", "white"),
               borderRadius: BorderRadius.newAll("50%"),
               transitionDuration: "0.25s",
               hover: Selector.new({
                    borderColor: Colors.RoyalBlue,
               }),
          }),
          TextView({
               text: "Hi, I'm Riadh. I am a Web Designer, an Android Developer and a hobbiyst Game Maker.",
               color: "white",
               padding: "2%",
               size: "2.5em",
               textAlign: "center",
               textShadow: TextShadow.new({
                    hOffset: "1px",
                    vOffset: "1px",
                    blur: "5px",
                    color: Colors.Grey,
               }),
               paddingHorizontal: "5%",
          }),
          Container({
               flexWrap: "wrap",
               textColor: "inherit",
               justifyContent: "center",
               padding: "2%",
               children: [
                    Section({ title: "About Me", icon: meIcon, page: "./about-me" }),
                    Section({ title: "My Skills", icon: skillsIcon }),
                    Section({ title: "Projects", icon: projectsIcon }),
               ],
          }),
          TextView({
               text: "Powered by abstracted-components",
               alignSelf: "center",
               fontStyle: "italic",
               padding: "2%",
               cursor: "pointer",
               transitionDuration: "0.5s",
               onClick: () => {
                    window.open("https://github.com/RiadhAdrani/abstracted-components", "_blank");
               },
               hover: Selector.new({
                    textColor: Colors.RoyalBlue,
               }),
          }),
     ];
};

const Page = (content) => {
     return Container({
          width: "100%",
          minHeight: "100vh",
          textColor: "white",
          backgroundImage: `url(${img})`,
          backgroundSize: BackgroundSize.Cover,
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [content],
     });
};

const App = () => {
     return (
          <Router>
               {Page(
                    <Switch>
                         <Route exact path="/">
                              {Home()}
                         </Route>
                         <Route exact path="/about-me">
                              {"Hello World"}
                         </Route>
                    </Switch>
               )}
          </Router>
     );
};

export default App;

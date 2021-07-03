import Container from "./abstracted-components/components/Container";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Selector from "./abstracted-components/attributes/Selector";
import TextView from "./abstracted-components/components/TextView";
import Colors from "./abstracted-components/attributes/Colors";
import iconCircular from "./img/icon_circular.ico";
import ImageView from "./abstracted-components/components/ImageView";
import Border from "./abstracted-components/attributes/Border";
import AboutMe from "./components/AboutMe";
import FontAwesomeIcons from "./abstracted-components/icons/FontAwesomeIcons";
import JustifyContent from "./abstracted-components/attributes/JustifyContent";
import Filter from "./abstracted-components/attributes/Filter";
import Projects from "./components/Projects";
import AnimatedBackgrounds from "./components/AnimatedBackgrounds";
import FontFamily from "./abstracted-components/attributes/FontFamily";
import "./App.css";

const Page = (content) => {
     return Container({
          width: "100%",
          minHeight: "100vh",
          textColor: "white",
          id: "app",
          className: "global-style",
          fontFamily: FontFamily.Helvetica,
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [content],
     });
};

const Linker = ({ to, children }) => (
     <Link
          style={{
               all: "unset",
               display: "flex",
               alignSelf: "center",
               marginTop: "2%",
               marginBottom: "2%",
               flexDirection: "column",
               width: "fit-content",
          }}
          to={to}
     >
          {children}
     </Link>
);

const Icon = ({ icon, dimensions = "30px", url }) => {
     return ImageView({
          image: icon,
          width: dimensions,
          height: dimensions,
          padding: "10px",
          filter: Filter.newInvert(100),
          cursor: "pointer",
          transitionDuration: "0.33s",
          marginHorizontal: "5px",
          onClick: () => {
               window.open(url, "_blank");
          },
          hover: Selector.new({
               filter: "none",
               backgroundColor: "white",
               borderRadius: "25%",
          }),
     });
};

const App = () => {
     return (
          <Router id="Hello">
               {Page([
                    Linker({
                         to: "/",
                         children: ImageView({
                              image: iconCircular,
                              minWidth: "70px",
                              maxWidth: "200px",
                              width: "100%",
                              alignSelf: "center",
                              cursor: "pointer",
                              marginVertical: "2%",
                              border: Border.newAll("5px", "solid", "white"),
                              borderRadius: "50%",
                              transitionDuration: "0.25s",
                              hover: Selector.new({
                                   borderColor: Colors.RoyalBlue,
                              }),
                         }),
                    }),

                    Container({
                         justifyContent: JustifyContent.Center,
                         children: [
                              Icon({
                                   icon: FontAwesomeIcons.Github,
                                   url: "https://github.com/RiadhAdrani",
                              }),
                              Icon({
                                   icon: FontAwesomeIcons.Behance,
                                   url: "https://www.behance.net/adraniriadh",
                              }),
                              Icon({
                                   icon: FontAwesomeIcons.Twitter,
                                   url: "https://twitter.com/adrani_riadh",
                              }),
                              Icon({
                                   icon: FontAwesomeIcons.LinkedinIn,
                                   url: "https://www.linkedin.com/in/riadh-adrani-7610781b0/",
                              }),
                              Icon({
                                   icon: FontAwesomeIcons.Youtube,
                                   url: "https://www.youtube.com/channel/UC33qa38p2oRIBfuMW8fRvgA",
                              }),
                         ],
                    }),
                    <Switch>
                         <Route exact path="/">
                              {Home()}
                         </Route>
                         <Route exact path="/skills">
                              {Skills()}
                         </Route>
                         <Route exact path="/about-me">
                              {AboutMe()}
                         </Route>
                         <Route exact path="/projects">
                              {Projects()}
                         </Route>
                         <Route exact path="/animatedBackgrounds">
                              {AnimatedBackgrounds()}
                         </Route>
                    </Switch>,
                    TextView({
                         text: "Powered by abstracted-components",
                         alignSelf: "center",
                         fontStyle: "italic",
                         padding: "15px",
                         margin: "1%",
                         cursor: "pointer",
                         borderRadius: "15px",
                         fontFamily: FontFamily.Helvetica,
                         transitionDuration: "0.5s",
                         debugLogCSS: "true",
                         onClick: () => {
                              window.open(
                                   "https://github.com/RiadhAdrani/abstracted-components",
                                   "_blank"
                              );
                         },
                         hover: Selector.new({
                              textColor: Colors.Black,
                              backgroundColor: "white",
                         }),
                    }),
               ])}
          </Router>
     );
};

export default App;

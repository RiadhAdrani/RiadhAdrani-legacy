import BackgroundSize from "./abstracted-components/attributes/BackgroundSize";
import Container from "./abstracted-components/components/Container";
import img from "./img/cover1.jpg";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Selector from "./abstracted-components/attributes/Selector";
import TextView from "./abstracted-components/components/TextView";
import Colors from "./abstracted-components/attributes/Colors";
import iconCircular from "./img/icon_circular.ico";
import ImageView from "./abstracted-components/components/ImageView";
import Border from "./abstracted-components/attributes/Border";
import BackgroundAttachment from "./abstracted-components/attributes/BackgroundAttachment";
import BackgroundRepeat from "./abstracted-components/attributes/BackgroundRepeat";
import AboutMe from "./components/AboutMe";
import FontAwesomeIcons from "./abstracted-components/icons/FontAwesomeIcons";
import JustifyContent from "./abstracted-components/attributes/JustifyContent";
import Filter from "./abstracted-components/attributes/Filter";
import Projects from "./components/Projects";

const Page = (content) => {
     return Container({
          width: "100%",
          minHeight: "100vh",
          textColor: "white",
          id: "app",
          backgroundImage: `url(${img})`,
          backgroundSize: BackgroundSize.Cover,
          backgroundAttachment: BackgroundAttachment.Fixed,
          backgroundRepeat: BackgroundRepeat.NoRepeat,
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [content],
     });
};

const Linker = ({ to, children }) => (
     <Link
          style={{ all: "unset", display: "flex", flexDirection: "column", padding: "0%" }}
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
                              width: "15%",
                              minWidth: "100px",
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
                    </Switch>,
                    TextView({
                         text: "Powered by abstracted-components",
                         alignSelf: "center",
                         fontStyle: "italic",
                         padding: "2%",
                         cursor: "pointer",
                         transitionDuration: "0.5s",
                         onClick: () => {
                              window.open(
                                   "https://github.com/RiadhAdrani/abstracted-components",
                                   "_blank"
                              );
                         },
                         hover: Selector.new({
                              textColor: Colors.RoyalBlue,
                         }),
                    }),
               ])}
          </Router>
     );
};

export default App;

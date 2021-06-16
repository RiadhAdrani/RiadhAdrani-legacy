import BackgroundSize from "./abstracted-components/attributes/BackgroundSize";
import Container from "./abstracted-components/components/Container";
import img from "./img/cover1.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

const Page = (content) => {
     return Container({
          width: "100%",
          minHeight: "100vh",
          textColor: "white",
          backgroundImage: `url(${img})`,
          backgroundSize: BackgroundSize.Cover,
          backgroundAttachement: BackgroundAttachment.Fixed,
          backgroundRepeat: BackgroundRepeat.NoRepeat,
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [content],
     });
};

const App = () => {
     return (
          <Router id="Hello">
               {Page([
                    ImageView({
                         image: iconCircular,
                         width: "15%",
                         minWidth: "100px",
                         alignSelf: "center",
                         marginVertical: "2%",
                         border: Border.newAll("5px", "solid", "white"),
                         borderRadius: "50%",
                         transitionDuration: "0.25s",
                         hover: Selector.new({
                              borderColor: Colors.RoyalBlue,
                         }),
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

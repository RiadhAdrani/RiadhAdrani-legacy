import BackgroundSize from "./abstracted-components/attributes/BackgroundSize";
import Container from "./abstracted-components/components/Container";
import "./App.css";
import img from "./img/cover1.jpg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Selector from "./abstracted-components/attributes/Selector";
import TextView from "./abstracted-components/components/TextView";
import Colors from "./abstracted-components/attributes/Colors";

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
               {Page([
                    <Switch>
                         <Route exact path="/">
                              {Home()}
                         </Route>
                         <Route exact path="/skills">
                              {Skills()}
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

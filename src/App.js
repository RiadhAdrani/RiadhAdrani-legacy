import BackgroundSize from "./abstracted-components/attributes/BackgroundSize";
import Selector from "./abstracted-components/attributes/Selector";
import TextDecoration from "./abstracted-components/attributes/TextDecoration";
import Border from "./abstracted-components/attributes/Border";
import Colors from "./abstracted-components/attributes/Colors";
import Container from "./abstracted-components/components/Container";
import TextView from "./abstracted-components/components/TextView";
import ImageView from "./abstracted-components/components/ImageView";
import "./App.css";
import img from "./img/cover1.jpg";

const Section = ({ title = "new section", icon = img }) => {
     return Container({
          textColor: "inherit",
          textAlign: "center",
          flexGrow: 1,
          minWidth: "200px",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2%",
          margin: "1%",
          backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.75),
          border: Border.newAll("2px", "solid", "white"),
          transitionDuration: "0.25s",
          hover: Selector.new({
               backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.9),
               borderColor: Colors.RoyalBlue,
               textColor: Colors.RoyalBlue,
          }),
          cursor: "pointer",
          onClick: () => {},
          children: [
               ImageView({
                    image: icon,
                    height: "50px",
                    width: "50px",
                    alignSelf: "center",
                    margin: "2%",
               }),
               TextView({
                    text: title,
                    size: "1.5em",
                    alignSelf: "center",
                    margin: "2%",
                    textAlign: "center",
               }),
          ],
     });
};

const App = () => {
     return Container({
          width: "100%",
          minHeight: "100vh",
          textColor: "white",
          backgroundImage: `url(${img})`,
          backgroundSize: BackgroundSize.Cover,
          flexDirection: "column",
          justifyContent: "space-evenly",
          children: [
               TextView({
                    text: "Hi, I'm Riadh. I am a Web Designer, an Android Developer and a hobbiyst Game Maker.",
                    color: "white",
                    padding: "2%",
                    size: "2.5em",
                    textAlign: "center",
                    paddingHorizontal: "5%",
               }),
               Container({
                    flexWrap: "wrap",
                    textColor: "inherit",
                    justifyContent: "center",
                    padding: "10%",
                    flexGrow: 1,
                    children: [
                         Section({ title: "About Me" }),
                         Section({ title: "My Skills" }),
                         Section({ title: "Projects" }),
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
                         window.open(
                              "https://github.com/RiadhAdrani/abstracted-components",
                              "_blank"
                         );
                    },
                    hover: Selector.new({
                         textColor: Colors.RoyalBlue,
                    }),
               }),
          ],
     });
};

export default App;

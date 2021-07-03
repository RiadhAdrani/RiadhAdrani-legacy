import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import Overflow from "../abstracted-components/attributes/Overflow";
import Selector from "../abstracted-components/attributes/Selector";
import Container from "../abstracted-components/components/Container";
import TextView from "../abstracted-components/components/TextView";
import FilterableList from "./FilterableList/FilterableList";

const AnimatedBackgrounds = () => {
     return Container({
          flexDirection: "column",
          marginTop: "15px",
          alignContent: "center",
          overflow: Overflow.Hidden,
          children: [
               TextView({
                    text: "Animated Backgrounds",
                    textAlign: "center",
                    size: "2.5em",
                    marginVertical: "15px",
               }),
               TextView({
                    text: "Browse my catalog of animated backgrounds, free to use with the condition of mentionning my youtube channel somewhere in your project/video :",
                    textAlign: "center",
                    size: "1.2em",
                    marginVertical: "5px",
               }),
               TextView({
                    text: `Copy Channel URL`,
                    textAlign: "center",
                    size: "0.9em",
                    marginVertical: "5px",
                    padding: "10px",
                    paddingHorizontal: "20px",
                    borderRadius: "15px",
                    transitionDuration: "0.25s",
                    marginTop: "15px",
                    marginHorizontal: "auto",
                    border: Border.newAll("2px", "solid", "white"),
                    cursor: "pointer",
                    hover: Selector.new({ backgroundColor: Colors.SlateGrey }),
                    active: Selector.new({
                         backgroundColor: Colors.LightYellow,
                         textColor: "black",
                    }),
                    onClick: () => {
                         navigator.clipboard.writeText("shorturl.at/yOU37");
                         alert("Copied to clipboard !");
                    },
               }),
               <FilterableList />,
          ],
     });
};

export default AnimatedBackgrounds;

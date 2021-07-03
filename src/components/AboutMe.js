import Border from "../abstracted-components/attributes/Border";
import Colors from "../abstracted-components/attributes/Colors";
import FontFamily from "../abstracted-components/attributes/FontFamily";
import Container from "../abstracted-components/components/Container";
import TextView from "../abstracted-components/components/TextView";

const text = `Hello! Thank you for visiting my portfolio! I am Riadh Adrani (Pronounced Riyath Adrani), I am 23 years old, I live in the Ariana province in Tunisia. I am currently a Web Designer in Triweb: my job consists of making graphical charter and integrate them using a private CMS made by the company, called Webtool. I enjoy learning new stuff, in face I learned Graphic Design, Web dev, Android dev and I am now learning Game dev without the need to pay any penny! Of course thanks to the respective huge communities which offers a large variety of content and learning material. Check out my projects for more details, and don't forget to have a look at my GitHub account. Thank you again!`;

const AboutMe = () => {
     return Container({
          flexDirection: "column",
          children: [
               TextView({
                    text: text,
                    fontFamily: FontFamily.Verdana,
                    marginHorizontal: "4%",
                    size: "1.2em",
                    marginVertical: "10px",
                    lineHeight: 1.5,
                    border: Border.newAll("3px", "solid", "white"),
                    padding: "30px",
                    borderRadius: "10px",
                    backgroundColor: Colors.newFromRGBA(30, 30, 30, 0.75),
               }),
          ],
     });
};

export default AboutMe;

import { Button, Column, H3, Img, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar, linearGradient } from "@riadh-adrani/recursive-web/style/methods";
import { _main, _mainAccent, _textAccent } from "../../../style";
import { getRef, getState, setEffect, setState } from "../../..";
import icons, { Icon } from "../../../components/icons";
import technologies from "../../../data/technologies";

function slideToIndex(index) {
  const sliderElement = getRef("slider");

  sliderElement.scroll({
    left: index * 300,
    behavior: "smooth",
  });
}

export default () => {
  const [slider] = setState("slider", {
    index: 0,
    items: technologies,
    direction: 1,
  });

  setEffect("set-slider-timer", [slider], () => {
    const timeout = setTimeout(() => {
      const [slider, setSlider] = getState("slider");

      if (slider.items.length < 2) return;

      if (slider.direction > 0) {
        if (slider.index == slider.items.length - 1) {
          slider.direction = -1;
          slider.index = slider.items.length - 2;
        } else {
          slider.index = slider.index + 1;
        }
      } else {
        if (slider.index == 0) {
          slider.direction = 1;
          slider.index = 1;
        } else {
          slider.index = slider.index - 1;
        }
      }

      slideToIndex(slider.index);
      setSlider(slider);
    }, 2500);

    return () => clearTimeout(timeout);
  });

  return Row({
    style: {
      scoped: true,
      normal: {
        height: "300px",
        width: "300px",
        minHeight: "300px",
        minWidth: "300px",
        position: "relative",
        overflow: "hidden",
      },
    },
    children: [
      SliderArrows(),
      SliderArrows(false),
      Row({
        hooks: { onRef: () => "slider" },
        style: {
          scoped: true,
          normal: {
            height: "300px",
            width: "300px",
            position: "relative",
            overflow: "hidden",
          },
        },
        children: slider.items.map((item) => SliderItem(item)),
      }),
    ],
  });
};

function SliderItem(item) {
  return Column({
    style: {
      scoped: true,
      normal: {
        minHeight: "100%",
        minWidth: "100%",
        padding: ["20px"],
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    },
    children: [
      Img({
        width: 120,
        height: 120,
        src: item.src,
        style: {
          inline: {
            filter: item.invert ? "invert(1)" : "",
          },
        },
      }),
      Spacer({ height: "10px" }),
      H3({ children: item.name }),
    ],
  });
}

function SliderArrows(left = true) {
  return Column({
    style: {
      scoped: true,
      normal: {
        height: "100%",
        justifyContent: "center",
        position: "absolute",
        left: left ? "0px" : "auto",
        right: left ? "auto" : "0px",
        background: linearGradient(
          left ? "90deg" : "-90deg",
          [getVar(_mainAccent), "50%"],
          ["transparent", "100%"]
        ),
        zIndex: 10,
      },
    },
    children: Button({
      className: "my-button",
      type: "button",
      title: left ? "Left" : "Right",
      children: [
        Icon({
          viewBox: "0 0 16 16",
          path: left ? icons.LeftArrow : icons.RightArrow,
          fill: "white",
        }),
      ],
      style: {
        scoped: "true",
        normal: {
          borderRadius: "50%",
          height: "30px",
          width: "30px",
          zIndex: 10,
        },
      },
      onClick: () => {
        const [slider, setSlider] = getState("slider");

        if (slider.items.length < 2) return;

        if (left) {
          if (slider.index == 0) {
            return;
          } else {
            slider.index = slider.index - 1;
            slider.direction = -1;
          }
        } else {
          if (slider.index == slider.items.length - 1) {
            return;
          } else {
            slider.index = slider.index + 1;
            slider.direction = 1;
          }
        }

        slideToIndex(slider.index);
        setSlider(slider);
      },
    }),
  });
}

import ImageView from "../abstracted-components/components/ImageView";

const Icon = ({ logo, onClick, maxHeight, padding, margin, alignSelf, onClick }) =>
     ImageView({
          image: logo,
          alignSelf: alignSelf,
          padding: padding,
          margin: margin,
          maxHeight: maxHeight,
          onClick: () => {
               onClick();
          },
          cursor: onClick ? "pointer" : "",
     });

export default Icon;

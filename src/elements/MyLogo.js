import { Img } from "@riadh-adrani/recursive/components";

export default (dimensions) => {
     return Img({
          src: "https://avatars.githubusercontent.com/u/54232641?v=4",
          alt: "riadh adrani",
          height: dimensions,
          width: dimensions,
          style: {
               className: "my-logo",
               normal: {
                    borderRadius: "50%",
               },
          },
     });
};

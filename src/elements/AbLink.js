import { A, I } from "@riadh-adrani/recursive/components";

export default (link, fontAwesome) => {
     return A({
          href: link,
          target: "blank",
          style: {
               className: "animated-background-link",
               normal: {
                    padding: "5px",
                    color: "white",
               },
          },
          events: {
               onClick: (e) => {
                    e.stopPropagation();
               },
          },
          children: I({ className: fontAwesome }),
     });
};

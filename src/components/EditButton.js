import { Column, H2, Link } from "@riadh-adrani/recursive/components";

export default (editable) =>
     Link({
          to: editable.to,
          style: {
               className: "editable-item",
               scoped: true,
               normal: {
                    textAlign: "left",
                    border: "1px solid #424242",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    color: "white",
                    textDecoration: "none",
                    backgroundImage: `url(${editable.preview})`,
               },
          },
          children: [
               Column({
                    style: {
                         className: "editable-bg",
                         normal: {
                              background:
                                   "linear-gradient(90deg, rgba(30,30,30,1) 20%,rgba(30,30,30,0.9) 50%, rgba(30,30,30,0.2) 100%)",
                              padding: "40px",
                         },
                    },
                    children: [
                         H2({
                              text: editable.title,
                              style: {
                                   className: "editable-title",
                                   normal: {
                                        fontWeight: 500,
                                        fontSize: "1.5em",
                                   },
                              },
                         }),
                    ],
               }),
          ],
     });

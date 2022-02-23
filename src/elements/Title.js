import { H1 } from "@riadh-adrani/recursive/components";

export default (title) =>
     H1({
          text: title,
          style: {
               className: "title",
               scoped: true,
               normal: { marginBottom: "30px" },
          },
     });

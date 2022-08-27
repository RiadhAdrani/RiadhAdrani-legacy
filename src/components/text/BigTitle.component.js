import { H1 } from "@riadh-adrani/recursive-web/html";

export default (text) => {
    return H1({
        children: text,
        style: { inline: { fontSize: "3em", textAlign: "center" } },
    });
};

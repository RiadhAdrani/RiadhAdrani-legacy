import { Column, Embed, P, Object, Spacer, A } from "@riadh-adrani/recursive-web/html";
import BigTitleComponent from "../../components/text/BigTitle.component";

import cv from "../../assets/cv.pdf";
import { TextButton } from "../../components/buttons";

export default () => {
    return Column({
        children: [
            BigTitleComponent("Resumé"),
            Spacer({ height: "30px" }),
            Column({
                style: { inline: { alignItems: "center" } },
                children: [A({ children: TextButton("Download Resumé"), href: cv })],
            }),
        ],
    });
};

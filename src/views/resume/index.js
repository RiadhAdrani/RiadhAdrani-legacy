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
                children: [
                    P({ children: "The Resumé should start downloading automatically..." }),
                    Spacer({ height: "10px" }),
                    A({ children: TextButton("Download Manually"), href: cv }),
                    Object({
                        children: Embed({ src: cv, type: "application/pdf" }),
                        data: cv,
                        type: "application/pdf",
                    }),
                ],
            }),
        ],
    });
};

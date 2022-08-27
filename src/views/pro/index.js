import { Column, H2, H4, Hr, P, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import BigTitleComponent from "../../components/text/BigTitle.component";
import all from "../../data/pro";
import {
    _background,
    _backgroundAccent,
    _backgroundVariant,
    _main,
    _mainAccent,
    _mainVariant,
    _textVariant,
} from "../../style";

export default () => {
    return Column({
        children: [
            BigTitleComponent("Professional Career"),
            Spacer({ height: "30px" }),
            Column({
                children: all.map((item) => {
                    return Column({
                        className: "item-card",
                        style: {
                            scoped: true,
                            normal: {
                                marginBottom: "10px",
                            },
                        },
                        children: [
                            H2({ children: item.title }),
                            Spacer({
                                height: "10px",
                                style: {
                                    inline: {
                                        borderBottom: ["1px", "solid", getVar(_textVariant)],
                                    },
                                },
                            }),
                            Spacer({ height: "10px" }),
                            H4({ children: item.location, style: { inline: { fontWeight: 200 } } }),
                            H4({ children: item.duration }),
                            Spacer({ height: "10px" }),
                            P({ children: item.description }),
                        ],
                    });
                }),
            }),
        ],
    });
};

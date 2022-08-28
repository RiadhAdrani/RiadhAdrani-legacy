import {
    Column,
    Fragment,
    H2,
    H4,
    P,
    Spacer,
    VerticalLine,
} from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import BigTitleComponent from "../../components/text/BigTitle.component";
import all from "../../data/academic";
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
            BigTitleComponent("Academic Background"),
            Spacer({ height: "50px" }),
            Column({
                children: all.map((item, index) => {
                    return Fragment({
                        children: [
                            Column({
                                className: "item-card",
                                style: {
                                    scoped: true,
                                    normal: {
                                        textAlign: "center",
                                    },
                                },
                                children: [
                                    H2({ children: item.education }),
                                    Spacer({
                                        height: "10px",
                                        style: {
                                            inline: {
                                                borderBottom: [
                                                    "1px",
                                                    "solid",
                                                    getVar(_textVariant),
                                                ],
                                            },
                                        },
                                    }),
                                    Spacer({ height: "10px" }),
                                    H4({
                                        children: item.school,
                                        style: { inline: { fontWeight: 200 } },
                                    }),
                                    H4({ children: item.duration }),
                                ],
                            }),
                            VerticalLine({
                                flags: { renderIf: index != all.length - 1 },
                                height: "100px",
                                color: getVar(_textVariant),
                                thickness: "2.5px",
                                style: {
                                    inline: { alignSelf: "center" },
                                },
                            }),
                        ],
                    });
                }),
            }),
        ],
    });
};

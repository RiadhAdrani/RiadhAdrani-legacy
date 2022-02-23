import { Column, Div, H2, H4, P, Row, Span } from "@riadh-adrani/recursive/components";

export default (item) => {
     return Row({
          style: {
               className: "timeline-item",
               normal: {
                    alignItems: "center",
                    marginLeft: "-11px",
                    textAlign: "left",
                    marginBottom: "20px",
               },
          },
          children: [
               Div({
                    style: {
                         className: "timeline-caret",
                         normal: {
                              minHeight: "15px",
                              minWidth: "15px",
                              maxHeight: "15px",
                              maxWidth: "15px",
                              borderRadius: "50%",
                              backgroundColor: "white",
                              border: "3px solid #1e1e1e",
                         },
                    },
               }),
               Column({
                    style: {
                         className: "timeline-info-wrapper",
                         normal: {
                              marginLeft: "20px",
                              flex: 1,
                              padding: "20px",
                              border: "1px solid #ffffff22",
                              borderRadius: "10px",
                         },
                    },
                    children: [
                         H2({ text: item.title }),
                         H4({
                              text: [item.university, Span({ text: ` • ${item.period}` })],
                              style: {
                                   className: "timeline-item-period",
                                   normal: { fontWeight: 300 },
                              },
                         }),
                         item.description
                              ? P({
                                     text: item.description,
                                     style: {
                                          className: "timeline-item-description",
                                          normal: { lineHeight: 1.5 },
                                     },
                                })
                              : "",
                    ],
               }),
          ],
     });
};

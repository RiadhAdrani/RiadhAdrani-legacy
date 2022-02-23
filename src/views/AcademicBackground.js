import { Column, H1 } from "@riadh-adrani/recursive/components";
import TimelineItem from "../components/TimelineItem";

const list = [
     {
          title: "Applied Bachelor of Industrial Computing: Embedded Systems",
          period: "2017-2020",
          university:
               "Higher Institute of Information's Technologies and Communication, Borj Cedria",
     },
     {
          title: "Bachelor of Mathematics",
          period: "2013-2017",
          university: "Lycée El-Wafa, Ariana",
     },
];

export default () => {
     return Column({
          className: "timeline-view",
          children: [
               Column({
                    style: {
                         className: "timeline-wrapper",
                         normal: {
                              borderLeft: "1px solid white",
                              padding: "30px 0px",
                              flex: 1,
                         },
                    },
                    children: [
                         H1({
                              text: "Academic Background",
                              style: {
                                   className: "timeline-title",
                                   normal: { marginBottom: "30px" },
                              },
                         }),
                         ...list.map((item) => TimelineItem(item)),
                    ],
               }),
          ],
     });
};

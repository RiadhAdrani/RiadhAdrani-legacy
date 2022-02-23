import { Column, H1 } from "@riadh-adrani/recursive/components";
import TimelineItem from "../components/TimelineItem";

const list = [
     {
          title: "Software Development Freelancer",
          period: "since December 2021",
          university: "Self-employed",
          description: `Creating Mobile and Web Apps for customers 
          using various technologies like 
          "Xamarin", "Native Android", "React" ...`,
     },
     {
          title: "Web Designer",
          period: "May 2021 - December 2021",
          university: "Triweb",
          description: `My job consisted of designing (Using Adobe Photoshop and Illustrator) 
          the graphical charter of turnkey websites and integrating them 
          with the help of a custom CMS made for Tri-Web.`,
     },
     {
          title: "Graphic Design Freelancer",
          period: "July 2020 - June 2021",
          university: "Self-employed",
          description:
               "I made several logos, brochures and graphical charter for friends and customers.",
     },
     {
          title: "Intern",
          period: "January 2020 - July 2020",
          university: "Brain Academy Tunisia",
          description: `We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. 
          Using our skills was not enough, 
          so it was imminent for us to learn and get used to many other programming languages, 
          software and even new operating systems. 
          The project was defended the 19th of July 2020 and got "Very Good" as honor.`,
     },
     {
          title: "Summer intern",
          period: "May 2019 - June 2019",
          university: "Boudjebel VACPA",
          description: `This was the opportunity to dive into the professional environment. 
          I was fortunate to acquire some insight within a world-class factory, 
          Boudjebel VACPA is in fact the lead producer of "Deglet Nour" (Nour dates) 
          and many other products around the world.
          Project: Controlling a light line remotely via an Android App`,
     },
     {
          title: "Youtuber",
          period: "September 2016 - September 2021",
          university: "Youtube",
          description: `I created "Extended Remixes" of Neoclassical, New-Age.
        I use Adobe Premiere Pro to make these tracks last longer.
        I enjoyed creating animated background to come with the music, 
        so it creates a cinematic feeling. 
        These animated background are created using Adobe Photoshop and Adobe After Effects.
        Note: The channel is demonetized, I gain $0. I just enjoy the process of creating the videos.`,
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
                              text: "Professional Career",
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

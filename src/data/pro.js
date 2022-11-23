const experience = ({ title, location, duration, description }) => {
  return { title, location, duration, description };
};

export const hsTech = experience({
  title: "Fullstack developer",
  location: "HSTECH",
  duration: "since October 2022",
  description: `Full stack developer @ HSTECH`,
});

export const intern = experience({
  title: "Intern",
  location: "Brain Academy Tunisia",
  duration: "January 2020 - July 2020",
  description: `We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair.
    Using our skills was not enough, 
    so it was imminent for us to learn and get used to many other programming languages, 
    software and even new operating systems. 
    The project was defended the 19th of July 2020 and got "Very Good" as honor.`,
});

export const webDesigner = experience({
  title: "Web Designer",
  location: "TriWeb, Tunisia",
  duration: "May 2021 - December 2021",
  description: `My job consisted of designing (Using Adobe Photoshop and Illustrator) 
    the graphical charter of turnkey websites and integrating 
    them with the help of a custom CMS made for Tri-Web.`,
});

export const freelancer = experience({
  title: "Freelancer",
  location: "Self-employed",
  duration: "Since November 2021",
  description: `Creating Mobile and Web Apps for customers 
    using various technologies like "Xamarin", 
    "Native Android", "React" ...`,
});

export const all = [hsTech, freelancer, webDesigner, intern];

export default all;

const school = ({ education, school, duration }) => {
    return { education, school, duration };
};

export const istic = school({
    education: "Applied Bachelor of Industrial Computing: Embedded Systems",
    school: "Higher Institute of Information's Technologies and Communication, Borj Cedria",
    duration: "September 2017 - July 2020",
});

export const lycee = school({
    education: "Bachelor of Mathematics",
    school: "Lycée El-Wafa, Ariana",
    duration: "September 2013 - June 2017",
});

export const all = [istic, lycee];

export default all;

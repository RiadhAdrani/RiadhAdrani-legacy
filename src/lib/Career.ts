import Assets from './Assets';
import { Technologies, type Technology } from './Technologies';

export enum EmploymentType {
  FullTime = 'Full-time',
  PartTime = 'Part-time',
  SelfEmployed = 'Self-employed',
  Freelance = 'Freelance',
  Contract = 'Contract',
  Internship = 'Internship'
}

export interface Experience {
  title: string;
  employmentType: EmploymentType;
  company: {
    name: string;
    logo: string;
  };
  location: string;
  period: {
    from: Date;
    to?: Date;
  };
  industry: string;
  description: string;
  skills: Array<Technology>;
}

export const JobExperiences: Record<string, Experience> = {
  HSTECH: {
    title: 'Fullstack Developer',
    company: {
      name: 'HSTECH',
      logo: Assets.HsTech
    },
    description: '',
    employmentType: EmploymentType.FullTime,
    industry: 'Software Development',
    location: 'Remote, Tunisia',
    period: { from: new Date(2022, 9, 3) },
    skills: [
      Technologies.Deno,
      Technologies.TypeScript,
      Technologies.NodeJs,
      Technologies.Svelte,
      Technologies.Quasar,
      Technologies.VueJs,
      Technologies.Nuxt,
      Technologies.Sass,
      Technologies.Tailwind,
      Technologies.Redis,
      Technologies.MongoDB,
    ]
  },
  Freelancer: {
    title: 'Software Development Freelancer',
    company: {
      name: 'Self-employed',
      logo: Assets.Unknown
    },
    description:
      'Creating Mobile and Web Apps for customers using various technologies like "Xamarin", "Native Android", "React" ...',
    employmentType: EmploymentType.Freelance,
    industry: 'Software Development',
    location: 'Tunisia',
    period: { from: new Date(2021, 10, 1), to: new Date(2022, 5, 16) },
    skills: [
      Technologies.JavaScript,
      Technologies.NodeJs,
      Technologies.ReactJs,
      Technologies.Android,
      Technologies.Kotlin,
      Technologies.Firebase,
      Technologies.Xamarin,
      Technologies.Csharp
    ]
  },
  TriWeb: {
    title: 'Web Designer',
    company: {
      name: 'TriWeb',
      logo: Assets.TriWeb
    },
    description:
      'My job consisted of designing (Using Adobe Photoshop and Illustrator) the graphical charter of turnkey websites and integrating them with the help of a custom CMS made for TriWeb.',
    employmentType: EmploymentType.FullTime,
    industry: 'UI Design',
    location: 'Tunis, Tunisia',
    period: { from: new Date(2021, 4, 1), to: new Date(2021, 11, 12) },
    skills: [
      Technologies.HTML,
      Technologies.CSS,
      Technologies.JavaScript,
      Technologies.Photoshop,
      Technologies.Illustrator
    ]
  },
  GraphicDesignFreelancer: {
    title: 'Graphic Designer',
    company: {
      name: 'Self-employed',
      logo: Assets.Unknown
    },
    description:
      'Designing graphics for small startups and companies, Creating logos, posters ... etc',
    employmentType: EmploymentType.Freelance,
    industry: 'Graphic Design',
    location: 'Tunisia',
    period: { from: new Date(2020, 5, 1), to: new Date(2021, 11, 12) },
    skills: [
      Technologies.Photoshop,
      Technologies.AfterEffects,
      Technologies.Illustrator,
      Technologies.Premiere
    ]
  },
  Intern: {
    title: 'Intern',
    company: {
      name: 'Brain Academy Tunisia',
      logo: Assets.BrainAcademy
    },
    description:
      'We developed the prototype of "SMARTchair" which is an EEG controlled wheelchair. Using our skills was not enough, so it was imminent for us to learn and get used to many other programming languages, software and even new operating systems. The project was defended the 19th of July 2020 and got "Very Good" as honor.',
    employmentType: EmploymentType.Internship,
    industry: 'Robotics',
    location: 'Ben Arous, Tunisia',
    period: { from: new Date(2020, 0, 1), to: new Date(2020, 6, 19) },
    skills: [Technologies.Python]
  }
};

export const JobExperiencesList: Array<Experience> = Object.keys(JobExperiences).map(
  (job) => JobExperiences[job]
);

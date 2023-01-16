import Assets from './Assets';
import { Technologies, type Technology } from './Technologies';

export interface ProjectLink {
	label?: string;
	to: string;
}

export interface Project {
	color: string;
	logo: string;
	name: string;
	type: string;
	period: {
		from: Date;
		to?: Date;
	};
	description: string;
	technologies: Array<Technology>;
	links: Array<ProjectLink>;
}

export const Projects: Record<string, Project> = {
	Werewolves: {
		color: '#fbb03b',
		name: 'Werewolves',
		logo: Assets.Werewolves1,
		description:
			'An app to manage your game of Loup garous de thiercelieu also known as The Werewolves of Millers Hollow.',
		period: { from: new Date(2022, 6, 23) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves' }],
		technologies: [Technologies.Dart, Technologies.Flutter],
		type: 'Mobile App'
	},
	Recursive: {
		color: '#cf2026',
		name: 'Recursive',
		logo: Assets.Recursive,
		description:
			'Recursive is an ongoing project that allow developers to build a functional, component-based, Javascript only, beautiful and interactive Web applications.',
		period: { from: new Date(2021, 8, 1), to: new Date(2022, 11, 26) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/recursive' },
			{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/recursive' }
		],
		technologies: [Technologies.JavaScript, Technologies.NodeJs],
		type: 'UI Framework'
	},
	UtilityJs: {
		color: '#5cad47',
		name: 'Utility Js',
		logo: Assets.NodeJs,
		description: 'My JavaScript utility functions and types.',
		period: { from: new Date(2022, 8, 1) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/utility-js' },
			{ label: 'NPM', to: 'https://www.npmjs.com/package/@riadh-adrani/utility-js' }
		],
		technologies: [Technologies.TypeScript, Technologies.NodeJs],
		type: 'JavaScript library'
	},
	SolidGitHub: {
		color: '#518ac8',
		name: 'Solid GitHub',
		logo: Assets.SolidJs,
		description:
			'Web app that retrieves repositories from GitHub and displaying them with the ability to save them which will be persisted in the local storage.',
		period: { from: new Date(2022, 10, 1), to: new Date(2022, 10, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/solid-github' }],
		technologies: [Technologies.TypeScript, Technologies.NodeJs, Technologies.SolidJs],
		type: 'Web App'
	},
	Trollo: {
		name: 'Trollo',
		type: 'Web App',
		logo: Assets.Trello,
		color: '#065ad4',
		period: { from: new Date(2022, 10, 1), to: new Date(2022, 10, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/trollo' }],
		description:
			'Trollo is a Trello clone, intended to showcase recursive and recursive-web compatibility with Typescript as of version 0.8.0.',
		technologies: [Technologies.TypeScript, Technologies.NodeJs, Technologies.Recursive]
	},
	Gradio: {
		name: 'Gradio',
		type: 'Web App',
		logo: Assets.Gradio,
		color: '#52bffa',
		period: { from: new Date(2022, 9, 1), to: new Date(2022, 9, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/gradio' }],
		description: 'A web application used to create and generate gradient background for css usage.',
		technologies: [
			Technologies.TypeScript,
			Technologies.NodeJs,
			Technologies.Quasar,
			Technologies.VueJs,
			Technologies.Sass
		]
	},
	CardBaker: {
		name: 'Card Baker',
		type: 'Web App',
		logo: Assets.CardBaker,
		color: '#52bffa',
		period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/card-baker' }],
		description: 'Create "Yu-Gi-Oh" styled game cards.',
		technologies: [Technologies.JavaScript, Technologies.NodeJs, Technologies.Recursive]
	},
	RandomNamePicker: {
		name: 'Random Name Picker',
		type: 'Android App',
		logo: Assets.RandomNamePicker,
		color: '#64c6c5',
		period: { from: new Date(2022, 7, 1), to: new Date(2022, 7, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/random-name-picker' }],
		description:
			'An android application used to create lists for random name picking. Lists and user preferences are saved',
		technologies: [Technologies.Android, Technologies.Kotlin]
	},
	WeTube: {
		name: 'WeTube',
		type: 'Web App',
		logo: Assets.WeTube,
		color: '#00b0fa',
		period: { from: new Date(2022, 6, 1), to: new Date(2022, 6, 10) },
		links: [
			{ label: 'GitHub (Backend)', to: 'https://github.com/RiadhAdrani/wetube-be' },
			{ label: 'GitHub (Frontend)', to: 'https://github.com/RiadhAdrani/wetube-fe' }
		],
		description:
			'Another clone added to the list of clones that I made using my own framework Recursive for the web, and as you guessed it, its a Youtube clone.',
		technologies: [
			Technologies.JavaScript,
			Technologies.NodeJs,
			Technologies.Recursive,
			Technologies.ExpressJs,
			Technologies.PostgreSQL
		]
	},
	Audiphy: {
		name: 'Audiphy',
		type: 'Desktop App',
		logo: Assets.Audiphy,
		color: '#3083f6',
		period: { from: new Date(2022, 5, 1), to: new Date(2022, 6, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/audiphy' }],
		description:
			'A simple audio player for Windows. Audiphy is intended to be a Spotify clone, but turned out to be an audio player for Windows OS.',
		technologies: [
			Technologies.JavaScript,
			Technologies.NodeJs,
			Technologies.Recursive,
			Technologies.Electron
		]
	},
	Wroddit: {
		name: 'Wroddit',
		type: 'Web App',
		logo: Assets.Wroddit,
		color: '#E9ECEF',
		period: { from: new Date(2022, 4, 1), to: new Date(2022, 4, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/wroddit' }],
		description: 'Reddit clone made using Recursive.js for front-end and Firebase as a database.',
		technologies: [
			Technologies.JavaScript,
			Technologies.NodeJs,
			Technologies.Recursive,
			Technologies.Firebase
		]
	},
	Dwidder: {
		name: 'Dwidder',
		type: 'Web App',
		logo: Assets.Dwidder,
		color: '#1e9eae',
		period: { from: new Date(2022, 2, 1), to: new Date(2022, 3, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/dwidde' }],
		description:
			'Dwidder is a twitter clone made to showcase the potential of Recursive.js. The name came originally from a tunisian meal called Dwida as I was developping the app.',
		technologies: [
			Technologies.JavaScript,
			Technologies.NodeJs,
			Technologies.Recursive,
			Technologies.Firebase
		]
	},
	QuestionSubmission: {
		name: 'Question Submission',
		type: 'Web App',
		logo: Assets.QuestionSubmission,
		color: '#ffde16',
		period: { from: new Date(2021, 6, 1), to: new Date(2021, 7, 10) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/guess-app-questions-submission' }
		],
		description:
			'A website that allow users to submit their questions and answers for a possible game app.',
		technologies: [
			Technologies.JavaScript,
			Technologies.NodeJs,
			Technologies.VueJs,
			Technologies.Firebase
		]
	},
	AzurCity: {
		name: 'Azur City',
		type: 'Android App',
		logo: Assets.Azur,
		color: '#01acc8',
		period: { from: new Date(2021, 1, 1), to: new Date(2021, 4, 10) },
		links: [{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/azur_app' }],
		description:
			'A prototype of a commercial app made for Azur City. The App was presented as an End of studies projects.',
		technologies: [Technologies.Android, Technologies.Kotlin]
	},
	WerewolvesOfTheMillerHollows: {
		name: 'Werewolves',
		type: 'Android App',
		logo: Assets.Werewolves1,
		color: '#fbb03b',
		period: { from: new Date(2021, 0, 1), to: new Date(2021, 5, 10) },
		links: [
			{ label: 'GitHub', to: 'https://github.com/RiadhAdrani/werewolves_of_the_millers_hollow' }
		],
		description:
			'Creating a guide for the game "Werewolves of The Millers Hollow" originally "Les loups garous de Thierclieux".',
		technologies: [Technologies.Android, Technologies.Kotlin]
	},
	ColorNoter: {
		name: 'Color Noter',
		type: 'Cross platform App',
		logo: Assets.ColorNoter,
		color: '#8cacb9',
		period: { from: new Date(2020, 8, 1), to: new Date(2020, 9, 10) },
		links: [
			{ label: 'GitHub (Android)', to: 'https://github.com/RiadhAdrani/color_note_plus' },
			{ label: 'GitHub (Desktop)', to: 'https://github.com/RiadhAdrani/color_noter-desktop' },
			{ label: 'GitHub (Web)', to: 'https://github.com/RiadhAdrani/color_noter-web' }
		],
		description:
			'Color Noter is a color based note taking app that offer the user the ability to write and save his ideas and todos in an easy to use environment.',
		technologies: [
			Technologies.Android,
			Technologies.Java,
			Technologies.Electron,
			Technologies.NodeJs,
			Technologies.ReactJs,
			Technologies.Recursive,
			Technologies.Firebase
		]
	}
};

export const ProjectsList: Array<Project> = Object.keys(Projects).map(
	(project) => Projects[project]
);

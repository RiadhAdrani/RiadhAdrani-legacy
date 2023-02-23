import Assets from './Assets';

export interface Technology {
  name: string;
  logo: string;
  inverted?: boolean;
}

export const Technologies = {
  JavaScript: { logo: Assets.JavaScript, name: 'JavaScript' },
  TypeScript: { logo: Assets.TypeScript, name: 'TypeScript' },
  Dart: { logo: Assets.Dart, name: 'Dart' },
  Kotlin: { logo: Assets.Kotlin, name: 'Kotlin' },
  Java: { logo: Assets.Java, name: 'Java' },
  Python: { logo: Assets.Python, name: 'Python' },
  Csharp: { logo: Assets.Csharp, name: 'C#' },
  NodeJs: { logo: Assets.NodeJs, name: 'Node Js' },
  Deno: { logo: Assets.Deno, name: 'Deno', inverted: true },
  VueJs: { logo: Assets.VueJs, name: 'Vue Js' },
  ReactJs: { logo: Assets.ReactJs, name: 'React Js' },
  Svelte: { logo: Assets.Svelte, name: 'Svelte' },
  Angular: { logo: Assets.Angular, name: 'Angular' },
  Flutter: { logo: Assets.Flutter, name: 'Flutter' },
  Xamarin: { logo: Assets.Xamarin, name: 'Xamarin' },
  Electron: { logo: Assets.Electron, name: 'Electron' },
  Recursive: { logo: Assets.Recursive, name: 'Recursive' },
  SolidJs: { logo: Assets.SolidJs, name: 'Solid Js' },
  Quasar: { logo: Assets.Quasar, name: 'Quasar' },
  Nuxt: { logo: Assets.Nuxt, name: 'Nuxt' },
  Android: { logo: Assets.Android, name: 'Android' },
  ExpressJs: { logo: Assets.ExpressJs, name: 'Express Js' },
  Fastify: { logo: Assets.Fastify, name: 'Fastify', inverted: true },
  NestJs: { logo: Assets.NestJs, name: 'Nest Js' },
  AdonisJs: { logo: Assets.AdonisJs, name: 'Adonis Js' },
  PostgreSQL: { logo: Assets.PostgreSQL, name: 'PostgreSQL' },
  Firebase: { logo: Assets.Firebase, name: 'Firebase' },
  Redis: { logo: Assets.Redis, name: 'Redis' },
  MongoDB: { logo: Assets.MongoDB, name: 'MongoDB' },
  Sass: { logo: Assets.Sass, name: 'Sass' },
  Tailwind: { logo: Assets.Tailwind, name: 'Tailwind' },
  CSS: { logo: Assets.CSS, name: 'CSS' },
  HTML: { logo: Assets.HTML, name: 'HTML' },
  Photoshop: { logo: Assets.Photoshop, name: 'Adobe Photoshop' },
  Illustrator: { logo: Assets.Illustrator, name: 'Adobe Illustrator' },
  AfterEffects: { logo: Assets.AfterEffects, name: 'Adobe After Effects' },
  Premiere: { logo: Assets.Premiere, name: 'Adobe Premiere Pro' }
};

export const TechnologiesList = Object.keys(Technologies).map(
  (tech) => (Technologies as Record<string, Technology>)[tech]
);

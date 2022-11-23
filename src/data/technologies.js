import jsLogo from "../assets/logos/js.png";
import recursiveLogo from "../assets/logos/recursive.png";
import nodeLogo from "../assets/logos/node.png";
import reactLogo from "../assets/logos/react.svg";
import vueLogo from "../assets/logos/vue.png";
import angularLogo from "../assets/logos/angular.png";
import androidLogo from "../assets/logos/android.png";
import dartLogo from "../assets/logos/dart.png";
import electronLogo from "../assets/logos/electron.png";
import kotlinLogo from "../assets/logos/kotlin.png";
import tsLogo from "../assets/logos/ts.png";
import nestLogo from "../assets/logos/nest.svg";
import expressLogo from "../assets/logos/express.png";
import postgresLogo from "../assets/logos/postgres.png";
import firebaseLogo from "../assets/logos/firebase.png";
import javaLogo from "../assets/logos/java.png";
import flutterLogo from "../assets/logos/flutter.svg";
import svelteLogo from "../assets/logos/svelte.png";
import adonisjsLogo from "../assets/logos/adonisjs.png";
import sassLogo from "../assets/logos/sass.png";
import denoLogo from "../assets/logos/deno.png";
import solidLogo from "../assets/logos/solidjs.svg";
import quasarLogo from "../assets/logos/quasar.svg";
import fastifyLogo from "../assets/logos/fastify.svg";

import { shuffle } from "../utils";

const tech = (name, src, invert = false) => {
  return { name, src, invert };
};

export const js = tech("JavaScript", jsLogo);
export const recursive = tech("Recursive Js", recursiveLogo);
export const nodejs = tech("Node Js", nodeLogo);
export const react = tech("React", reactLogo);
export const vue = tech("Vue Js", vueLogo);
export const angular = tech("Angular", angularLogo);
export const android = tech("Android", androidLogo);
export const dart = tech("Dart", dartLogo);
export const electron = tech("Electron Js", electronLogo);
export const kotlin = tech("Kotlin", kotlinLogo);
export const ts = tech("TypeScript", tsLogo);
export const nest = tech("Nest Js", nestLogo);
export const express = tech("Express Js", expressLogo);
export const postgres = tech("PostgreSQL", postgresLogo);
export const firebase = tech("Firebase", firebaseLogo);
export const java = tech("Java", javaLogo);
export const flutter = tech("Flutter", flutterLogo);
export const svelte = tech("Svelte", svelteLogo);
export const adonisjs = tech("Adonis Js", adonisjsLogo);
export const sass = tech("Sass", sassLogo);
export const deno = tech("Deno", denoLogo, true);
export const solidjs = tech("Solid Js", solidLogo);
export const quasar = tech("Quasar", quasarLogo);
export const fastify = tech("Fastify", fastifyLogo, true);

export const technologies = [
  js,
  ts,
  dart,
  kotlin,
  java,

  nodejs,
  deno,

  recursive,
  react,
  vue,
  angular,
  svelte,
  solidjs,

  flutter,
  quasar,

  android,

  express,
  fastify,
  nest,
  adonisjs,

  postgres,
  firebase,

  electron,

  sass,
];

export function shuffledTechnologies() {
  return shuffle(technologies);
}

export default technologies;

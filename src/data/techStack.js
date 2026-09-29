// To add a technology: import its icon from "simple-icons" (search names at
// https://simpleicons.org, the export is `si` + the icon slug, e.g. siMeteor)
// and add it to a group below. Pass a label only if the default title is
// not what you want to show.
import {
  siCss,
  siExpress,
  siFramer,
  siGit,
  siGithub,
  siGreensock,
  siHtml5,
  siI18next,
  siJavascript,
  siMeteor,
  siMongodb,
  siMongoose,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siReactquery,
  siRedux,
  siSass,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const tech = (icon, label = icon.title) => ({ icon, label });

export const techStack = [
  {
    title: "Frontend",
    items: [
      tech(siHtml5),
      tech(siCss),
      tech(siJavascript),
      tech(siTypescript),
      tech(siReact),
      tech(siNextdotjs),
      tech(siReactquery),
      tech(siFramer),
      tech(siGreensock, "GSAP"),
      tech(siRedux),
      tech(siSass),
      tech(siTailwindcss),
    ],
  },
  {
    title: "Backend",
    items: [
      tech(siNodedotjs),
      tech(siExpress),
      tech(siMeteor),
      tech(siMongodb),
      tech(siMongoose),
      tech(siMysql),
      tech(siPostgresql),
      tech(siPrisma),
      tech(siPostman),
    ],
  },
  {
    title: "Other",
    items: [tech(siGit), tech(siGithub), tech(siI18next)],
  },
];

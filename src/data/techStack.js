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
  siMui,
  siMongodb,
  siMariadb,
  siMongoose,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siReactquery,
  siRedux,
  siSwagger,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

const tech = (icon, label = icon.title) => ({ icon, label });

// Jotai is not in Simple Icons. Its mascot is a ghost, so this is a stand-in
// ghost mark (Tabler "ghost-2", MIT). Swap `path` for an official logo if you
// prefer; same shape as a Simple Icons entry (24x24 viewBox).
const siJotai = {
  title: "Jotai",
  hex: "000000",
  path: "M12 1.999l.041 .002l.208 .003a8 8 0 0 1 7.747 7.747l.003 .248l.177 .006a3 3 0 0 1 2.819 2.819l.005 .176a3 3 0 0 1 -3 3l-.001 1.696l1.833 2.75a1 1 0 0 1 -.72 1.548l-.112 .006h-10c-3.445 .002 -6.327 -2.49 -6.901 -5.824l-.028 -.178l-.071 .001a3 3 0 0 1 -2.995 -2.824l-.005 -.175a3 3 0 0 1 3 -3l.004 -.25a8 8 0 0 1 7.996 -7.75zm0 10.001a2 2 0 0 0 -2 2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1a2 2 0 0 0 -2 -2zm-1.99 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993zm4 0l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z",
};

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
      tech(siJotai),
      tech(siTailwindcss),
      tech(siMui),
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
      tech(siMariadb),
      tech(siPostgresql),
      tech(siPrisma),
      tech(siPostman),
      tech(siSwagger),
    ],
  },
  {
    title: "Other",
    items: [tech(siGit), tech(siGithub), tech(siI18next)],
  },
];

import type { Project } from "./models/Project";

export const projects: Array<Project> = [
  {
    title: "Realtime Logs - Generador de logs falsos",
    description:
      "Aplicación para ver en tiempo real los logs realizados por una API Rest y Base de Datos",
    technologies: ["javascript", "react", "tailwind", "typescript"],
    imageUrl:
      "https://github.com/jbuendia1y/realtime-logging-app/blob/main/docs/dark-theme.png?raw=true",
    imageAlt: "Realtime logs app in dark theme",
    repository: "https://github.com/jbuendia1y/realtime-logging-app",
  },
  {
    title: "Animes - Sistema de manejo de contenido",
    description:
      "CMS intuitivo para animes completo con RestAPI y frontend para la gestión de contenido para entretenimiento.",
    technologies: ["react", "mui", "typescript", "nodeJS"],
    imageUrl:
      "https://github.com/jbuendia1y/animes/assets/71197875/73650792-b9d8-43e5-bce4-4e10858e650e",
    imageAlt: "Home page of animes app",
    repository: "https://github.com/jbuendia1y/animes/",
  },
  {
    title: "StreamParish Demo - Aplicación web de entretenimiento",
    description:
      "Demo de una aplicación para reproducir música, películas y series",
    technologies: ["react", "mui", "typescript", "nodeJS"],
    imageUrl:
      "https://github.com/user-attachments/assets/f7a41316-a512-499c-8a8b-2ebdca2ab952",
    imageAlt: "User authenticated in home page of StreamParish Demo",
    repository: "https://github.com/jbuendia1y/stream-parish-demo",
    website: "https://stream-parish-demo.vercel.app/",
  },
];

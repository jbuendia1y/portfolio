export type Technology =
  | "javascript"
  | "typescript"
  | "react"
  | "tailwind"
  | "rxjs"
  | "mui"
  | "nodeJS";

export interface Project {
  title: string;
  description: string;
  technologies: Array<Technology>;
  imageUrl: string;
  imageAlt: string;
  repository?: string;
  website?: string;
}

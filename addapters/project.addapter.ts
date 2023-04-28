import type { IProject } from "@/models";

export function createProjectAddapted(data: any): IProject {
  const format: IProject = {
    preview: "https:" + data.preview.fields.file.url,
    description: data.description,
    name: data.name,
    repository: data.repository,
    url: data.url,
  };

  return format;
}

import { createProjectAddapted } from "@/addapters";
import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  space: process.env.CONTENTFUL_SPACE_ID ?? "",
});

export const getProyects = async () => {
  const result = await contentfulClient
    .getEntries({ content_type: "projects" })
    .then((v) => v.items.map((v) => createProjectAddapted(v.fields)));
  return result;
};

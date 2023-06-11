import { Footer, Navbar, ProjectCard } from "@/components";
import { IProject } from "@/models";
import { getProjects } from "@/services";
import Head from "next/head";
import styles from "@/styles/Projects.module.css";

function Projects({ projects }: { projects: IProject[] }) {
  return (
    <>
      <Head>
        <title>Projects | Joaquín Buendía</title>
        <meta name="description" content="Proyectos de Joaquín Buendía" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main className="container mt-3">
          <form className="hstack align-items-center justify-content-center w-100 mb-3">
            <div className="flex-grow-1 me-2">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Rick and Morty"
                className="form-control search-input"
              />
            </div>
            <button className="btn btn-primary">Search</button>
          </form>
          <div className={styles.projects}>
            {projects.map((v) => (
              <ProjectCard data={v} key={v.name} />
            ))}
          </div>
          <style jsx>{`
            .search-input {
              border-radius: 1000px;
            }
          `}</style>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps({ req, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=59"
  );
  const projects: IProject[] = await getProjects();
  return {
    props: {
      projects,
    },
  };
}

export default Projects;

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { IProject } from "@/models";
import { getProjects } from "@/services";
import { ProjectCard } from "@/components";

function Home(props: { projects: IProject[] }) {
  const { projects } = props;

  return (
    <>
      <Head>
        <title>Joaquín Buendía | Portfolio</title>
        <meta name="description" content="Portafolio de Joaquín Buendía" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className={`container text-center ${styles.header}`}>
          <h1>Joaquín Buendía</h1>
          <p className="w-75 mx-auto">
            Hola, soy un desarrollador de software apasionado por desarrollar
            software fácil y sencillo de usar para personas y desarrolladores.
          </p>
        </header>

        <main>
          <section className="container">
            <h2 className="text-center mb-2">Proyectos</h2>
            <div className={styles.projects__list}>
              {projects.map((data) => (
                <ProjectCard key={data.name} data={data} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects: IProject[] = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

export default Home;

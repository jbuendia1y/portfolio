import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { IProject } from "@/models";
import { getProjects } from "@/services";
import { Footer, Navbar, ProjectCard } from "@/components";
import Image from "next/image";

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
        <Navbar />
        <header className={`container text-center ${styles.header}`}>
          <div
            className={`rounded-circle overflow-hidden position-relative d-inline-block mx-auto mb-2 ${styles.header__image}`}
          >
            <Image
              src="/Photo.jpeg"
              alt="Joaquín Buendía"
              fill
              sizes="100%"
              priority
            />
          </div>
          <h1>Joaquín Buendía</h1>
          <p className="w-75 mx-auto">
            Hola, soy un desarrollador de software apasionado por desarrollar
            software fácil y sencillo de usar para personas y desarrolladores.
          </p>
        </header>

        <main>
          <section className="container">
            <h2 className="text-center mb-2" id="projects">
              Proyectos
            </h2>
            <div className={styles.projects__list}>
              {projects.map((data) => (
                <ProjectCard key={data.name} data={data} />
              ))}
            </div>
          </section>
        </main>
        <Footer />
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

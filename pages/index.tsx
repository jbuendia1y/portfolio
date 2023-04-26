import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { IProyect } from "@/models";
import Link from "next/link";

function Home(props: { proyects: IProyect[] }) {
  const { proyects } = props;

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
            <div className={styles.proyects__list}>
              {proyects.map((v) => (
                <article key={v.name} className="card w-100">
                  <div className="card-img-top">
                    <Image src={v.preview} alt={v.name} fill />
                  </div>
                  <div className="card-body">
                    <h1 className="card-title fs-4">{v.name}</h1>
                    <p className="card-text">{v.description}</p>

                    <div className="d-flex justify-content-end gap-1">
                      <Link className="btn btn-light" href={v.repository}>
                        Código
                      </Link>
                      <Link className="btn btn-primary" href={v.url}>
                        Ver más
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const proyects: IProyect[] = [
    {
      preview: "/proyects/hackathon-get-on-board.png",
      name: "Hackathon Get on Board",
      description: "ReactJS | ViteJS | Firebase | ChakraUI",
      repository: "https://github.com/JPerezC92/hackathon-get-on-board",
      url: "https://hackathon-get-on-board.vercel.app/",
    },
    {
      preview: "/proyects/crypto-tracker.png",
      name: "Crypto Tracker",
      description: "NextJS | Bootstrap | Firebase",
      repository: "https://gitlab.com/jbuendia1y/crypto-tracker",
      url: "https://crypto-tracker-two-liard.vercel.app/",
    },
    {
      preview: "/proyects/frontend-mentor-challenges.png",
      name: "FrontendMentor Challenges",
      description: "Conjunto de proyectos web de FrontendMentor",
      repository: "https://github.com/jbuendia1y/frontend_mentor_challenges",
      url: "https://jbuendia1y.github.io/frontend_mentor_challenges/",
    },
  ];

  return {
    props: {
      proyects,
    },
  };
}

export default Home;

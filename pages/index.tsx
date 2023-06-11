import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { ContactButton, Navbar } from "@/components";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Joaquín Buendía</title>
        <meta name="description" content="Portafolio de Joaquín Buendía" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main
          className={`container-xl text-center text-lg-start ${styles.header}`}
        >
          <div className={`mx-auto mt-lg-2 ${styles.header__image}`}>
            <Image
              src="/Photo.jpeg"
              alt="Joaquín Buendía"
              fill
              sizes="100%"
              priority
            />
          </div>
          <div className={styles.content}>
            <header>
              <p className="my-0 text-secondary">Software developer</p>
              <h1 className="fw-bold">
                Hi, I&#8217;m Carlo Joaquín Buendía Díaz
              </h1>
              <p className="mt-0 mb-2 w-75 mx-auto mx-lg-0">
                I am a software developer who is passionate about building easy
                and simple to use software for people and developers.
                {/* Hola, soy un desarrollador de software apasionado por desarrollar
            software fácil y sencillo de usar para personas y desarrolladores. */}
              </p>
              <div className="hstack gap-2 justify-content-center justify-content-lg-start">
                <Image
                  src="/icons/JavaScript.svg"
                  alt="javascript"
                  width={45}
                  height={45}
                />
                <Image
                  src="/icons/logos_typescript-icon.svg"
                  alt="typescript"
                  height={33}
                  width={33}
                />
                <Image
                  src="/icons/React.svg"
                  alt="reactjs"
                  width={45}
                  height={45}
                />
              </div>
            </header>
            <section className="mt-2">
              <h2 className="fw-bold fs-4">Recent projects</h2>
              <div
                className={`hstack gap-2 flex-wrap flex-lg-nowrap justify-content-center justify-content-lg-start overflow-auto mw-100 ${styles.projects}`}
              >
                <Link href="/projects#rick-and-morty-challenge">
                  <Image
                    src="https://images.ctfassets.net/mkqtsemcsjzp/1ZWwxLCZPTJM7NIT6RTxnY/d20b032705978d2faa51b6b27c49a900/rick-and-morty-challenge.jpg"
                    alt="Rick and Morty challenge"
                    width={225}
                    height={125}
                    className="rounded"
                    style={{
                      objectFit: "cover",
                      filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.31))",
                    }}
                  />
                </Link>
                <Link href="/projects#frontend-mentor-challenges">
                  <Image
                    src="https://images.ctfassets.net/mkqtsemcsjzp/455ykmF3vr5h8kqtDiqbXf/e2ffd1f4aefdd0a4222313e61d6372bc/frontend-mentor-challenges.jpg"
                    alt="Frontend mentor challenges"
                    width={225}
                    height={125}
                    className="rounded"
                    style={{
                      objectFit: "cover",
                      filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.31))",
                    }}
                  />
                </Link>
                <Link href="/projects#hackathon-get-on-board">
                  <Image
                    src="https://images.ctfassets.net/mkqtsemcsjzp/5f8bTcWSSSNMmWEKJ9pRGh/60ae86a52f376ca6a0b4d927a5c0fe08/hackathon-get-on-board.jpg"
                    alt="Hackathon getonboard"
                    width={225}
                    height={125}
                    className="rounded"
                    style={{
                      objectFit: "cover",
                      filter: "drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.31))",
                    }}
                  />
                </Link>
              </div>
            </section>
            <footer className="mt-3 py-3">
              <div className="hstack justify-content-center justify-content-lg-start">
                <Link
                  href="https://www.linkedin.com/in/jbuendia1y"
                  aria-label="linkedin"
                >
                  <Image
                    src="/icons/mdi_linkedin.svg"
                    alt="linkedin"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href="https://www.github.com/jbuendia1y"
                  aria-label="github"
                >
                  <Image
                    src="/icons/mdi_github.svg"
                    alt="Github"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/jbuendia1y"
                  aria-label="contact"
                >
                  <Image
                    src="/icons/ic_baseline-email.svg"
                    alt="Email"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </footer>
          </div>
        </main>
        <ContactButton />
      </div>
    </>
  );
}

export default Home;

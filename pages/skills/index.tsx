import { Navbar } from "@/components";
import Head from "next/head";
import Image from "next/image";

export default function Skills() {
  const icons = [
    { src: "/icons/JavaScript.svg", alt: "javascript", width: 70, height: 70 },
    {
      src: "/icons/logos_nodejs-icon.svg",
      alt: "nodejs",
    },
    { src: "/icons/nestjs.svg", alt: "nestjs" },
    { src: "/icons/git.svg", alt: "git" },
    { src: "/icons/mdi_github.svg", alt: "github" },
    { src: "/icons/React.svg", alt: "reactjs" },
    {
      src: "/icons/akar-icons_nextjs-fill.svg",
      alt: "nextjs",
    },
    {
      src: "/icons/logos_typescript-icon.svg",
      alt: "typescript",
    },
    {
      src: "/icons/skill-icons_mongodb.svg",
      alt: "mongodb",
    },
    { src: "/icons/linux.svg", alt: "linux" },
    { src: "/icons/ubuntu.svg", alt: "ubuntu" },
    { src: "/icons/devicon_bash.png", alt: "bash" },
  ];

  return (
    <>
      <Head>
        <title>Skills | Joaquín Buendía</title>
        <meta
          name="description"
          content="Portafolio de Carlo Joaquín Buendía Díaz"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container">
        <h1 className="fs-2 fw-bold mb-3 text-center">Skills</h1>
        <div className="skills">
          {icons.map((v) => (
            <div
              key={"icon-" + v.alt}
              className={`rounded d-inline-flex skill ${
                !v.width ? "" : "px-0"
              } ${!v.height ? "" : "py-0"}`}
            >
              <Image
                src={v.src}
                alt={v.alt}
                width={v.width ?? 50}
                height={v.height ?? 50}
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          main {
            display: grid;
            min-height: 80vh;
            place-content: center;
          }

          .skills {
            display: flex;
            align-item: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 40px;
          }

          .skill {
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
            padding: 10px;
          }
        `}</style>
      </main>
    </>
  );
}

import { IProject } from "@/models";
import Image from "next/image";
import Link from "next/link";
import styles from "./project-card.module.css";

export function ProjectCard(props: { data: IProject }) {
  const { data } = props;

  return (
    <article key={data.name} className={`card w-100 ${styles.project}`}>
      <div className={`card-img-top ${styles.project__preview}`}>
        <Image
          src={data.preview}
          alt={data.name}
          fill
          sizes="100%"
          loading="lazy"
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h1 className="card-title fs-4">{data.name}</h1>
        <p className="card-text">{data.description}</p>

        <div className="d-flex justify-content-end gap-1 mt-auto">
          <Link className="btn btn-light" href={data.repository}>
            Código
          </Link>
          <Link className="btn btn-primary" href={data.url}>
            Ver más
          </Link>
        </div>
      </div>
    </article>
  );
}

import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className="mt-5 mb-3 border-top border-black">
      <div className="container pt-3">
        <ul className={`${styles.socials}`}>
          <li className={`${styles.social}`}>
            <a href="mailto:jbuendia1y@gmail.com" aria-label="Contacto">
              Contacto
            </a>
          </li>
          <li className={`${styles.social}`}>
            <a
              href="https://github.com/jbuendia1y"
              aria-label="Github de @jbuendia1y"
            >
              Github
            </a>
          </li>
          <li className={`${styles.social}`}>
            <a
              href="https://linkedin.com/in/jbuendia1y"
              aria-label="Linkedin de @jbuendia1y"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

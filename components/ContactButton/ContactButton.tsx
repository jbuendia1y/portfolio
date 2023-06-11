import Image from "next/image";
import Link from "next/link";

import styles from "./contact-button.module.css";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className={`btn text-bg-primary ${styles.button}`}
      aria-label="contact"
    >
      <Image
        src="/icons/ic_baseline-email.svg"
        alt="Email"
        width={35}
        height={35}
        className="text-white"
      />
    </Link>
  );
}

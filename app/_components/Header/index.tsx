import Image from "next/image";
import styles from "./index.module.css";
import { Html } from "next/document";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  );
}

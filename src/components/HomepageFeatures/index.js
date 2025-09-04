import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

// Daftar dokumentasi (ubah sesuai docs kamu)
const docsList = [
  {
    title: "📘 Arsitektur Auth-Service",
    description: "Arsitektur Auth-Service.",
    link: "/docs/shared/auth-service/sdd/auth-service-architecture",
  },
  {
    title: "📘 Git Auth-Service",
    description: "Struktur Git Auth-Service.",
    link: "/docs/shared/auth-service/development/auth-service-scaffolding",
  },
  {
    title: "📘Alur Auth-Service",
    description: "Alur Auth-Service.",
    link: "/docs/shared/auth-service/sdd/auth-service-flow",
  },
  {
    title: "📘 Alur Registrasi User",
    description: "Alur Registrasi User dengan OTP.",
    link: "/docs/events-apps/sdd/user-register-otp",
  },
];

function DocCard({ title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.docCard}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.docsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>📚 Quick Read</h2>
        <div className="row">
          {docsList.map((doc, idx) => (
            <DocCard key={idx} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}

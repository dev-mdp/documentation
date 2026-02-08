import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

// Daftar dokumentasi
const docs = [
  {
    title: "📃 Arsitektur Auth-Service",
    description: "Mendokumentasikan Arsitektur Auth-Service.",
    link: "/docs/shared/auth-service/sdd/auth-service-architecture",
  },
  {
    title: "📃Alur Auth-Service",
    description: "Mendokumentasikan Alur Auth-Service.",
    link: "/docs/shared/auth-service/sdd/auth-service-flow",
  },
  {
    title: "📃 Alur Registrasi User",
    description: "Mendokumentasikan Alur Registrasi User dengan OTP.",
    link: "/docs/events-apps/sdd/user-register-otp",
  },
  {
    title: "📃 Alur CI/CD GitHub, Jenkins, dan Kubernetes",
    description:
      "Mendokumentasikan Alur CI/CD GitHub, Jenkins, dan Kubernetes.",
    link: "/docs/shared/auth-service/development/ci-cd-flow",
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="quick-read-title">📚 Quick Read</h2>
        <div className="row">
          {docs.map((doc, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <Link to={doc.link} className={clsx("card", styles.docCard)}>
                <div className="card__header">
                  <h3>{doc.title}</h3>
                </div>
                <div className="card__body">
                  <p>{doc.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

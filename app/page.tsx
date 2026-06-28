import styles from "./page.module.css";

const qualities = [
  {
    title: "Profesionalismo real",
    description:
      "Trabajamos con procesos claros, comunicación constante y compromiso total con cada entrega.",
  },
  {
    title: "Calidad por encima de todo",
    description:
      "Cada producto se construye con estándares modernos, enfoque en rendimiento y mantenimiento a largo plazo.",
  },
  {
    title: "Pensamiento de negocio",
    description:
      "No solo desarrollamos software: diseñamos soluciones que generan resultados y mejoran operaciones.",
  },
];

const services = [
  "Desarrollo de plataformas web escalables",
  "Integraciones y automatización de procesos",
  "Diseño de experiencia de usuario orientado a conversión",
  "Soporte evolutivo y mejora continua",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.badge}>Cookie Software</div>
        <h1>
          Creamos software profesional para empresas que necesitan crecer con
          confianza.
        </h1>
        <p>
          Somos un equipo especializado en productos digitales de alto impacto.
          Priorizamos la calidad técnica, la claridad en el proceso y una
          ejecución impecable de principio a fin.
        </p>
        <div className={styles.heroCtas}>
          <a className={styles.primaryCta} href="#proyectos">
            Ver proyectos
          </a>
          <a className={styles.secondaryCta} href="#contacto">
            Hablemos
          </a>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Por qué confiar en nosotros</h2>
        <div className={styles.grid3}>
          {qualities.map((quality) => (
            <article key={quality.title} className={styles.card}>
              <h3>{quality.title}</h3>
              <p>{quality.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proyectos" className={styles.sectionAlt}>
        <h2>Proyectos desarrollados</h2>
        <div className={styles.projects}>
          <article className={styles.projectCard}>
            <h3>domanager.org</h3>
            <p>
              Plataforma diseñada para optimizar la gestión y administración,
              enfocada en confiabilidad, usabilidad y eficiencia operativa.
            </p>
            <a
              href="https://domanager.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar sitio
            </a>
          </article>

          <article className={styles.projectCard}>
            <h3>administrabien.cl</h3>
            <p>
              Solución digital orientada al orden financiero y administrativo,
              con experiencia clara para usuarios y foco en resultados medibles.
            </p>
            <a
              href="https://administrabien.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar sitio
            </a>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Cómo trabajamos</h2>
        <div className={styles.timeline}>
          <article>
            <span>1</span>
            <h3>Diagnóstico estratégico</h3>
            <p>
              Entendemos objetivos, contexto y desafíos para definir una hoja de
              ruta clara.
            </p>
          </article>
          <article>
            <span>2</span>
            <h3>Construcción con estándares</h3>
            <p>
              Desarrollamos con buenas prácticas, arquitectura limpia y foco en
              seguridad y rendimiento.
            </p>
          </article>
          <article>
            <span>3</span>
            <h3>Entrega y evolución</h3>
            <p>
              Implementamos, medimos y mejoramos continuamente para sostener el
              valor del producto.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <h2>Lo que podemos construir para tu empresa</h2>
        <ul className={styles.serviceList}>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section id="contacto" className={styles.contact}>
        <h2>Desarrollo de calidad para decisiones importantes</h2>
        <p>
          Si buscas un partner tecnológico profesional, estamos listos para
          impulsar tu próximo proyecto.
        </p>
        <a href="mailto:contacto@cookiesoftware.cl">contacto@cookiesoftware.cl</a>
      </section>
    </div>
  );
}

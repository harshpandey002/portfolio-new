/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css";

export default function about() {
  return (
    <Layout>
      <div className={styles.container}>
        <img id={styles.me} src="about.png" alt="Me" />
        <div className={styles.about}>
          <p>
            I’m Dale a UK based product designer with over ten years of
            experience. I specialise in interface design for mobile and
            web-based applications with a focus on simplicity & usability. I’m
            passionate about design and technology and how the two can converge
            to create experiences for good.
          </p>
          <p>
            I’m currently working at WP Engine on some of the worlds best
            WordPress products. Before WP Engine I worked at BaseKit where I
            designed web applications like the worlds first fully functional
            mobile website builder, a commerce platform, dashboard, mobile
            application, and an online booking system.
          </p>
          <p>
            Before BaseKit I spent some time working for web agencies designing
            everything from one-page websites to native mobile applications.
            Over the years I’ve been lucky enough to work with companies like
            Nationwide, BP, Telefónica, Apple & Amazon.
          </p>

          <p>
            You can also find me working on my own projects: Design Vault, an
            online library of UX/UI patterns and inspiration from real products,
            and Does.Design, an inclusive community for designers of all
            backgrounds and skill levels.
          </p>

          <p>
            Outside of work my hobbies include exploring new coffee places,
            playing video games, watching sci-fi shows & movies, tinkering with
            technology and taking too many photos of my cat, Pixel.
          </p>

          <p>
            You can follow along with my work, personal projects and occasional
            insights into my life on Twitter and Instagram.
          </p>
        </div>
        <hr id="hr" />
      </div>
    </Layout>
  );
}

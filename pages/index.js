import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello there! 👋</p>
        <p>
          I'm a Computer Engineer and Software Developer, learning how to build
          my own website using Next.js and it's{" "}
          <a href="https://nextjs.org/learn">tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";
import Layout from "../components/Layout";
import SectionDivider from "../components/SectionDivider";
import Avatar from "../components/Avatar";
import { getAllPostsForHome } from "../lib/api";

export default function Home({ allPosts, preview }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Reza Baharvand | Full-stack Developer</title>
          <meta name="title" content="Reza Baharvand | Full-stack Developer" />
          <meta
            name="description"
            content="Reza Baharvand | Web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, GraphQL, Expressjs, GSAP, D3js"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rezabaharvand.dev/" />
          <meta
            property="og:title"
            content="Reza Baharvand | Full-stack Developer"
          />
          <meta
            property="og:description"
            content="Web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, GraphQL, Expressjs, GSAP, D3js"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/rezathematic/image/upload/v1633711435/Reza_Baharvand_profile_picture_46edd8fe9d.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://rezabaharvand.dev/" />
          <meta
            property="twitter:title"
            content="Reza Baharvand | Full-stack Developer"
          />
          <meta
            property="twitter:description"
            content="Web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, GraphQL, Expressjs, GSAP, D3js"
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/rezathematic/image/upload/v1633711435/Reza_Baharvand_profile_picture_46edd8fe9d.jpg"
          />
        </Head>
        <Container>
          <div>
            <Avatar picture={allPosts[0].author.picture} />
            <h1 className="text-5xl mt-4 font-bold leading-tight">
              Hey, I&apos;m Reza Baharvand
            </h1>
            <p className="text-3xl leading-normal md:text-4xl mt-4 font-extralight md:leading-relaxed">
              I&apos;m a developer, writer, creator. I lead a team of developers
              at SERP Co.
              <br />I work with{" "}
              <strong>Reactjs, Nextjs, MongoDB, Nodejs, Expressjs</strong>.
              <br />
              <strong>Jamstack</strong> is my JAM! and <strong>teaching</strong>{" "}
              about what I know keeps me rolling.
            </p>
          </div>
          <SectionDivider />
          <RecentPosts posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}

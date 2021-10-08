import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import RecentPosts from "../../components/RecentPosts";
import Layout from "../../components/Layout";
import { getAllPostsForHome } from "../../lib/api";

export default function Home({ allPosts, preview }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Reza Baharvand&apos;s Blog | Web developer, Reactjs, Nextjs, Nodejs,
            MongoDB, PostgreSQL, Expressjs
          </title>
          <meta
            name="title"
            content="Reza Baharvand's blog | Full-stack Developer"
          />
          <meta
            name="description"
            content="Reza Baharvand's blog | Web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, GraphQL, Expressjs, GSAP, D3js"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rezabaharvand.dev/blog" />
          <meta
            property="og:title"
            content="Reza Baharvand's blog | Full-stack Developer"
          />
          <meta
            property="og:description"
            content="Reza Baharvand's blog | Web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, GraphQL, Expressjs, GSAP, D3js"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/rezathematic/image/upload/v1633711435/Reza_Baharvand_profile_picture_46edd8fe9d.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://rezabaharvand.dev/blog"
          />
          <meta
            property="twitter:title"
            content="Reza Baharvand's blog | Full-stack Developer"
          />
          <meta
            property="twitter:description"
            content="Reza Baharvand's blog | Web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, GraphQL, Expressjs, GSAP, D3js"
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/rezathematic/image/upload/v1633711435/Reza_Baharvand_profile_picture_46edd8fe9d.jpg"
          />
        </Head>
        <Container>
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

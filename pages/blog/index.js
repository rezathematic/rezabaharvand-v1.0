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
          <title>CHANGE LATER</title>
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

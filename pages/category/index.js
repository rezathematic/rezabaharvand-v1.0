import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import { getAllPostsForCategory } from "../../lib/api";

export default function Home({ allPosts, preview }) {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Reza Baharvand | Web developer, Reactjs, Nextjs, Nodejs, MongoDB,
            PostgreSQL, Expressjs
          </title>
        </Head>
        <Container>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {/* Todo: Refactor below and create a component*/}
            {allPosts.map((item) =>
              item.category ? (
                <div key={item.title} className="flex flex-col items-center">
                  <Image
                    width={50}
                    height={50}
                    src={item.category.categoryImage.url}
                    alt={item.category.name}
                  />
                  <Link href={`/category/${item.category.name.toLowerCase()}`}>
                    <a>{item.category.name}</a>
                  </Link>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForCategory(preview)) || [];
  return {
    props: { allPosts, preview },
  };
}

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
// import Meta from "../../components/Meta";
import PostTitle from "../../components/PostTitle";
import SectionDivider from "../../components/SectionDivider";
import { getAllPostsWithSlug, getAllPostsForCategory } from "../../lib/api";

export default function Post({ post, morePosts, preview }) {
  console.log(post);
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | by Reza Baharvand, rezabaharvand.dev
                </title>
              </Head>
              {/* TODO: Add category tag */}
              {/* {post.category ? post.category.name : ""} */}
            </article>
            <SectionDivider />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getAllPostsForCategory(params.category, preview);
  //   const content = await markdownToHtml(data?.posts?.content || "");

  return {
    props: {
      preview,
      post: {
        ...data?.posts,
        // content,
      },
      //   morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map((post) => `/category/${post.category.name}`) || [],
    fallback: true,
  };
}

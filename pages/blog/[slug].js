import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
// import Meta from "../../components/Meta";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import PostTitle from "../../components/PostTitle";
import markdownToHtml from "../../lib/markdownToHtml";
import RecentPosts from "../../components/RecentPosts";
import SectionDivider from "../../components/SectionDivider";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      {
        <Head>
          <title>{post.title} | by Reza Baharvand, rezabaharvand.dev</title>
        </Head>
      }
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionDivider />
            {morePosts.length > 0 && <RecentPosts posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.posts[0]?.content || "");

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts?.map((post) => `/blog/${post.slug}`) || [],
    fallback: true,
  };
}

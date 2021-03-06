import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
// import Meta from "../../components/Meta";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import PostTitle from "../../components/PostTitle";
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
                <link
                  rel="canonical"
                  href={`https://rezabaharvand.dev/blog/${post.slug}`}
                />
                <meta
                  name="title"
                  content={`${post.title} | by Reza Baharvand, rezabaharvand.dev`}
                />
                <meta name="description" content={post.excerpt} />
                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content={`https://rezabaharvand.dev/blog/${post.slug}`}
                />
                <meta
                  property="og:title"
                  content={`${post.title} | by Reza Baharvand`}
                />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.coverImage.url} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@rezathematic" />
                <meta property="twitter:creator" content="@rezathematic" />
                <meta
                  property="twitter:title"
                  content={`${post.title} | by Reza Baharvand`}
                />
                <meta property="twitter:description" content={post.excerpt} />
                <meta property="twitter:image" content={post.coverImage.url} />
                <meta property="twitter:image:alt" content={post.title} />
              </Head>
              {/* TODO: Add category tag */}
              {/* {post.category ? post.category.name : ""} */}
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                updatedTime={post.updated_at}
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
  const content = (await data?.posts[0]?.content) || "";

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

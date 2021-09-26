async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch Strapi API");
  }

  return json.data;
}

// Get most recent post
export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($where: JSON) {
      posts(where: $where) {
        slug
      }
    }
    `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  );
  return data?.posts[0];
}

// Get all posts with Slug
export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
        posts {
            slug
        }
    }`);
  return data?.allPosts;
}

export async function getAllPostsForCategory(preview) {
  const data = await fetchAPI(
    `
      query Posts($where: JSON){
        posts(sort: "date:desc", where: $where) {
          title
          slug
          excerpt
          date
          category {
            name
            categoryImage {
              url
            }
          }
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: "published" }),
        },
      },
    }
  );
  return data?.posts;
}

// Get posts for Homepage
export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
      query Posts($where: JSON){
        posts(sort: "date:desc", limit: 10, where: $where) {
          title
          slug
          excerpt
          date
          category {
            name
            categoryImage {
              url
            }
          }
          coverImage {
            url
          }
          author {
            name
            picture {
              url
            }
          }
        }
      }
    `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: "published" }),
        },
      },
    }
  );
  return data?.posts;
}

// Get posts and recent posts
export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
        query PostBySlug($where: JSON, $where_ne: JSON){
            posts(where: $where) {
                title
                slug
                content
                category {
                  name
                  categoryImage {
                    url
                  }
                }
                date
                excerpt
                ogIMage: coverImage {
                    url
                }
                coverImage {
                  url
                }
                author {
                    name
                    picture {
                        url
                    }
                }
            }

            morePosts: posts(sort: "date:desc", limit: 4, where: $where_ne) {
                title
                slug
                excerpt
                date
                category {
                  name
                  categoryImage {
                    url
                  }
                }
                coverImage {
                    url
                }
                author {
                    name
                    picture {
                        url
                    }
                }
            }
        }`,
    {
      preview,
      variables: {
        where: {
          slug,
          ...(preview ? {} : { status: "published" }),
        },
        where_ne: {
          ...(preview ? {} : { status: "published" }),
          slug_ne: slug,
        },
      },
    }
  );

  return data;
}

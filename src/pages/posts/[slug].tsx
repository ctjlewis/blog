import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/Container'
import PostBody from '../../components/Post/Body'
import MoreStories from '../../components/Stories/More'
import HomepageLink from '../../components/HomepageLink'
import PostHeader from '../../components/Post/Header'
// import Comments from '../../components/Comments'
import SectionSeparator from '../../components/SectionSeparator'
import Layout from '../../components/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Title from '../../components/Title'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  const slug = post?.slug;
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <HomepageLink />
        {router.isFallback ? (
          <Title>Loading…</Title>
        ) : (
          <>
            <article className="mx-auto max-w-screen-md">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={slug}
              />
              <PostBody content={post.body} />
            </article>

            {/* @todo Re-add comments */}
            {/* <Comments comments={post.comments} />
            <Form _id={post._id} /> */}

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}

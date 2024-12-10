import { Suspense } from 'react'
import Header from '@/components/Header'
import Author from '@/components/Author'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import CommentList from '@/components/CommentList'

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) throw new Error('Failed to fetch post')
  return res.json()
}

async function getComments(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  if (!res.ok) throw new Error('Failed to fetch comments')
  return res.json()
}

export default async function Post({ params }: { params: { id: string } }) {
  const postPromise = getPost(params.id)
  const commentsPromise = getComments(params.id)

  const [post, comments] = await Promise.all([postPromise, commentsPromise])

  return (
    <div className="container mx-auto px-4">
      <Header />
      <main>
        <article className="my-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <Author name="John Doe" />
          <p className="mt-4">{post.body}</p>
        </article>
        <Suspense fallback={<Loading />}>
          <CommentList comments={comments} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}


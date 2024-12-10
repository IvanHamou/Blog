import Link from 'next/link'

interface Post {
  id: number
  title: string
  body: string
}

export default function BlogPost({ post }: { post: Post }) {
  return (
    <article className="border p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="mb-2">{post.body.slice(0, 100)}...</p>
      <Link href={`/post/${post.id}`} className="text-blue-500 hover:text-blue-700">
        Read more
      </Link>
    </article>
  )
}


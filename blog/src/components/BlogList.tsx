import BlogPost from './BlogPost'

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export default async function BlogList() {
  const posts = await getPosts()

  return (
    <div className="space-y-4">
      {posts.slice(0, 5).map((post: any) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  )
}


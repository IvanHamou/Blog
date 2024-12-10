import { Suspense } from 'react'
import Header from '@/components/Header'
import BlogList from '@/components/BlogList'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main>
        <h1 className="text-3xl font-bold my-4">Simple Blog</h1>
        <Suspense fallback={<Loading />}>
          <BlogList />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}


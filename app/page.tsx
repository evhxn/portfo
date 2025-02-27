import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`hello, i'm ethan tapia. im currently pursuing a b.s in computer science at chapman university, 
        as well as a m.s in electrical engineering & computer science starting fall 2026`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

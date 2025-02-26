import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hello, I'm a Computer Science student at Chapman University. 
        My passion is blending creativity and technology to design unique 
        solutions. I thrive in environments where synergy meets innovation, 
        especially when tackling challenges that require thinking outside the box. 
        I love experimenting with new ideas and building things that merge the practical and the imaginative.
        `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

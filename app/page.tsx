aimport { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`hello, i'm ethan tapia. im currently pursuing a b.s in computer science at chapman university, 
        as well as a m.s in electrical engineering & computer science starting fall 2026. my passion
        is making things, whether it's software, cad or show programming. i love  design unique 
        solutions that blend creativity and technology. i'm interested in turning imaginative
        ideas into practical projects that can inspire and empower others. i believe in
        collaboration and enjoy learning from every challenge i face, whether it's
        debugging robotics code or refining a 3d model. im currently seeking any
        role that involves creative engineering, where i can combine technical
        skills with my passion for innovation.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}

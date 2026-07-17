import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About Me</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          I am Mahmoud Gharbi, a passionate Full Stack Developer with experience in building
          web and mobile applications. I enjoy working across the stack, from crafting beautiful
          user interfaces with React and Tailwind CSS to building robust backend services using
          Node.js, Python, and Java.
        </p>
        <br />
        <p>
          I love exploring new technologies and continuously improving my craft. Check out my skills
          below!
        </p>
      </div>

      <Skills />
    </div>
  )
}

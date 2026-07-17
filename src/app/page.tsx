import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="font-heading text-2xl sm:text-4xl">Mahmoud Gharbi</h1>
      <p className="mt-2 text-lg sm:text-xl">Full Stack Developer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Mahmoud, a Full Stack Developer building robust web and
          mobile applications.
        </p>

        <br />

        <p>
          I am passionate about creating efficient and scalable solutions.
          Let&apos;s connect and build something amazing together!
        </p>
      </div>

      <Links />
    </div>
  )
}

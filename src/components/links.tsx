import type { ComponentType, SVGProps } from 'react'
import { SiGithub, SiGmail } from '@icons-pack/react-simple-icons'
import { Linkedin } from 'lucide-react'

export default function Links() {
  const links: {
    icon: ComponentType<SVGProps<SVGSVGElement>>
    href: string
  }[] = [
    {
      icon: SiGmail,
      href: 'mailto:hello@example.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/MahmoudGh01',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mahmoud-gharbi/',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon />
          </a>
        )
      })}
    </div>
  )
}

import {
  type IconType,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiGit,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss },
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'nextjs', icon: SiNextdotjs },
      ],
    },
    {
      field: 'Backend & Tools',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'git',
          icon: SiGit,
        },
      ],
    },
  ]

export default SKILLS

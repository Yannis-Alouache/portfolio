import React from 'react'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'
import Skill from './Skill'

const devicon = (name, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`

const GROUPS = [
  {
    title: 'Back-end',
    icon: '⚙',
    skills: [
      { name: 'NestJS', icon: devicon('nestjs') },
      { name: 'Node.js', icon: devicon('nodejs') },
      { name: 'Spring Boot', icon: devicon('spring') },
      { name: 'Java', icon: devicon('java') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'Python', icon: devicon('python') },
      { name: 'Django', icon: devicon('django') },
      { name: 'Express', icon: devicon('express'), invert: true },
      { name: 'MySQL', icon: devicon('mysql') },
      { name: 'MongoDB', icon: devicon('mongodb') },
    ],
  },
  {
    title: 'Front-end',
    icon: '</>',
    skills: [
      { name: 'React', icon: devicon('react') },
      { name: 'Angular', icon: devicon('angular') },
      { name: 'Next.js', icon: devicon('nextjs'), invert: true },
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'HTML 5', icon: devicon('html5') },
      { name: 'CSS 3', icon: devicon('css3') },
      { name: 'Tailwind', icon: devicon('tailwindcss') },
      { name: 'Bootstrap', icon: devicon('bootstrap') },
      { name: 'Material UI', icon: devicon('materialui') },
      { name: 'Framer Motion', icon: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
    ],
  },
  {
    title: 'Outils & environnements',
    icon: '◇',
    skills: [
      { name: 'Git', icon: devicon('git') },
      { name: 'GitHub', icon: devicon('github'), invert: true },
      { name: 'NPM', icon: devicon('npm', 'original-wordmark') },
      { name: 'Nginx', icon: devicon('nginx') },
      { name: 'Linux', icon: devicon('linux') },
      { name: 'Kubernetes (K9s)', icon: devicon('kubernetes') },
      { name: 'CI/CD', icon: devicon('githubactions') },
      { name: 'Datadog', icon: 'https://cdn.simpleicons.org/datadog/white' },
      { name: 'Jest', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png' },
      { name: 'TDD', icon: null },
    ],
  },
]

function Skills() {
  return (
    <section className='section' id='skills'>
      <div className='container'>
        <SectionHeader
          overline='Compétences'
          title='Ma boîte à'
          highlight='outils'
          sub="Les technologies que j'utilise au quotidien pour concevoir, développer et déployer des applications web complètes."
        />
        <div className='skills-grid'>
          {GROUPS.map((group, index) => (
            <Reveal key={group.title} delay={index * 120}>
              <div className='skill-group'>
                <h3 className='skill-group-title'>
                  <span className='icon'>{group.icon}</span>
                  {group.title}
                </h3>
                <div className='skill-chips'>
                  {group.skills.map(skill => (
                    <Skill key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import { Codepen, Facebook, Github, Instagram, Linkedin, X } from 'lucide-react'

const socialIcons = [
  { href: '', icon: <Github /> },
  { href: '', icon: <Linkedin /> },
  { href: '', icon: <Codepen /> },
  { href: '', icon: <X /> },
  { href: '', icon: <Instagram /> },
  { href: '', icon: <Facebook /> },
]

const footerSections = [
  {
    title: 'Abdul Basit',
    href: '#home',
    content: 'Crafting high-performance web applications.',
  },
  {
    title: 'About',
    href: '#about',
    content: 'Get to know my journey and expertise.',
  },
  {
    title: 'Projects',
    href: '#projects',
    content: 'Explore my most impactful work.',
  },
  {
    title: 'Skills',
    href: '#skills',
    content: 'Technologies and tools I excel at.',
  },
  {
    title: 'Services',
    href: '#services',
    content: 'What I can offer to bring value to your project.',
  },
]

const Footer = () => (
  <footer className="bg-[#172b4d] px-4 py-6 text-white">
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-5">
        {footerSections.map((section, index) => (
          <section
            key={index}
            className="rounded-lg p-4 transition-colors duration-300 hover:bg-gray-600"
          >
            <a href={section.href} className="block">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{section.content}</p>
            </a>
          </section>
        ))}
      </div>
      <div className="border-t border-gray-700 pt-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm md:mb-0">
            © 2024 Abdul Basit | Coded with 💜
          </p>
          <ul className="flex space-x-4">
            {socialIcons.map((item, index) => (
              <li
                key={index}
                className="h-8 w-8 rounded-full border border-gray-600 p-2 text-white transition-colors duration-300 hover:bg-gray-700"
              >
                <a
                  href={item.href}
                  className="flex h-full w-full items-center justify-center"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer

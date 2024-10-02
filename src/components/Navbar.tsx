import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Login', link: '/login' },
  { title: 'Sign Up', link: '/signup' },
]

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar relative h-16 bg-gradient-to-r from-gray-200 via-gray-200 to-gray-100 shadow-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* logo */}
        <a
          href="https://www.codevertiser.com/"
          className="flex items-center gap-3"
        >
          <img
            src="https://res.cloudinary.com/dyvkdwzcj/image/upload/v1709055594/logo-1_vo1dni.png"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold text-slate-800 md:text-2xl">
            Kitabein
          </span>
        </a>
        <button className="menu-icon z-50 md:hidden" onClick={handleShowNavbar}>
          {showNavbar ? (
            <X size={28} className="text-white" />
          ) : (
            <Menu size={28} className="text-white" />
          )}
        </button>
        <div
          className={`nav-elements fixed right-0 top-0 z-40 h-screen w-64 transform bg-gray-600 text-white transition-transform duration-300 ease-in-out md:relative md:right-auto md:top-auto md:h-auto md:w-auto md:translate-x-0 md:bg-transparent ${
            showNavbar ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="mt-16 flex flex-col space-y-8 px-6 py-6 md:mt-0 md:flex-row md:space-x-8 md:space-y-0 md:px-0">
            {navLinks.map(({ title, link }, index) => (
              <li key={index} className="group">
                <NavLink to={link}>
                  <a
                    href={link}
                    className="relative p-2 text-lg font-medium text-slate-800 transition-all duration-300 ease-in-out hover:text-blue-400 md:text-base"
                  >
                    {title}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </a>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

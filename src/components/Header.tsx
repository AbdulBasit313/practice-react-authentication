import React from 'react'

interface HeaderProps {
  title: string
  description?: string
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-[#172B4D]">
      <div className="mx-auto max-w-3xl px-3 py-6 text-center md:py-11">
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-[40px]">
          {title}
        </h1>
        {description && (
          <h2 className="mt-5 text-lg text-gray-300 md:font-medium">
            {description}
          </h2>
        )}
      </div>
    </div>
  )
}

export default Header

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Header
        title="Welcome to My Library"
        description="The only place to list and track all your favorite books"
      />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout

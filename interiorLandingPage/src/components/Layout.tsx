
// src/components/Layout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'  // Import from home folder
import LocationBar from './home/LocationBar'  // Import from home folder
import Footer from './Footer'  // Import from home folder

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <LocationBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

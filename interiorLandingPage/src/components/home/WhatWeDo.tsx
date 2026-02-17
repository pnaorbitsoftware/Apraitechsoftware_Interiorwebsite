// src/components/home/WhatWeDo.tsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'KITCHEN',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600',
    slug: 'kitchen',
    size: 'large',
  },
  {
    id: 2,
    title: 'DINING',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600',
    slug: 'dining-room',
    size: 'medium',
  },
  {
    id: 3,
    title: 'BEDROOM',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600',
    slug: 'bedroom',
    size: 'medium',
  },
  {
    id: 4,
    title: 'LIVING',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600',
    slug: 'living-room',
    size: 'large',
  },
]

export default function WhatWeDo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            WHAT <span className="text-amber-600">WE DO</span>
          </h2>
        </motion.div>

        {/* Magazine-style layout */}
        <div className="relative h-[800px] md:h-[600px]">
          {/* KITCHEN - Large left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 w-[65%] h-[380px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <Link to="/services#kitchen" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                {/* Glow/Exposure effect overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-2">{services[0].title}</h3>
                <p className="text-lg opacity-90">Modular kitchen designs</p>
              </div>
            </Link>
          </motion.div>

          {/* DINING - Medium right top */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute right-0 top-0 w-[32%] h-[250px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <Link to="/services#dining-room" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={services[1].image}
                  alt={services[1].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{services[1].title}</h3>
              </div>
            </Link>
          </motion.div>

          {/* Free Estimate - Small right middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute right-0 top-[270px] w-[15%] h-[100px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center cursor-pointer"
          >
            <Link to="/contact" className="text-white text-center w-full h-full flex flex-col items-center justify-center">
              <span className="text-xs block">GET</span>
              <span className="text-xl font-bold block leading-tight">Free<br />Estimate</span>
            </Link>
          </motion.div>

          {/* BEDROOM - Small right middle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute right-[16%] top-[270px] w-[15%] h-[100px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <Link to="/services#bedroom" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={services[2].image}
                  alt={services[2].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <h3 className="text-lg font-bold">{services[2].title}</h3>
              </div>
            </Link>
          </motion.div>

          {/* LIVING - Bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute left-0 bottom-0 w-[48%] h-[200px] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <Link to="/services#living-room" className="block w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={services[3].image}
                  alt={services[3].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-700 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-1">{services[3].title}</h3>
                <p className="text-sm opacity-90">Modern living rooms</p>
              </div>
            </Link>
          </motion.div>

          {/* Talk to Consultant - Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute right-0 bottom-0 w-[32%] h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center cursor-pointer"
          >
            <Link to="/contact" className="text-white text-center p-6 w-full h-full flex flex-col items-center justify-center">
              <svg className="w-10 h-10 text-amber-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h4 className="text-sm mb-1">Talk to Our</h4>
              <h3 className="text-xl font-bold mb-3">Design Consultant</h3>
              <span className="text-xs bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-full transition-colors inline-block">
                Book Now
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
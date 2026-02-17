import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Apartment', 'Villa', 'Kitchen', 'Bedroom', 'Living', 'Dining']

const projects = [
  { id: 1, title: 'Modern 3BHK Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600' },
  { id: 2, title: 'Luxury Villa Interior', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600' },
  { id: 3, title: 'Contemporary Living Room', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600' },
  { id: 4, title: 'Minimalist Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600' },
  { id: 5, title: 'Cozy Bedroom Design', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600' },
  { id: 6, title: 'Elegant Dining Space', category: 'Dining', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600' },
  { id: 7, title: 'Compact 2BHK Design', category: 'Apartment', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600' },
  { id: 8, title: 'Open Plan Living', category: 'Living', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600' },
  { id: 9, title: 'Custom Wardrobe', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600' },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-24">
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            ACTUAL PROJECT PHOTOGRAPHS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We have worked on a wide range of residential projects including apartments, luxury villas, family homes, and holiday homes.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col items-center justify-center p-6">
                      <span className="text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.category}
                      </span>
                      <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

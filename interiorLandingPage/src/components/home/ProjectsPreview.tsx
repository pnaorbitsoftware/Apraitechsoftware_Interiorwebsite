import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, title: 'Modern 3BHK Apartment', category: 'Apartment', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600' },
  { id: 2, title: 'Luxury Villa Interior', category: 'Villa', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600' },
  { id: 3, title: 'Contemporary Living Room', category: 'Living', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600' },
  { id: 4, title: 'Minimalist Kitchen', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600' },
  { id: 5, title: 'Cozy Bedroom Design', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600' },
]

export default function ProjectsPreview() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -400 : 400, behavior: 'smooth' })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              PROJECTS PREVIEW
            </h2>
            <div className="w-20 h-1 bg-amber-600" />
          </div>
          <Link
            to="/gallery"
            className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-2"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-72 md:w-80 snap-start"
              >
                <Link
                  to="/gallery"
                  className="block group relative aspect-[4/3] rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-6">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-amber-400 text-sm font-medium">{project.category}</span>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-amber-500 hover:text-white transition-colors disabled:opacity-0 disabled:pointer-events-none hidden md:flex"
            aria-label="Scroll left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-amber-500 hover:text-white transition-colors disabled:opacity-0 disabled:pointer-events-none hidden md:flex"
            aria-label="Scroll right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const galleryItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500', title: 'Living Room' },
  { id: 2, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500', title: 'Kitchen' },
  { id: 3, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500', title: 'Bedroom' },
  { id: 4, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', title: 'Dining' },
  { id: 5, image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500', title: 'Bathroom' },
  { id: 6, image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500', title: 'Study' },
]

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            GALLERY
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed interior design projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to="/gallery"
                className="block group relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-600 text-amber-600 font-semibold rounded hover:bg-amber-600 hover:text-white transition-colors"
          >
            View All Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

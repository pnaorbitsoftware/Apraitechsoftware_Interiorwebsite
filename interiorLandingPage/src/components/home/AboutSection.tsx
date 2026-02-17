import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                alt="Interior design"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-600 font-semibold text-sm tracking-widest mb-2">
              Contemporary Home Interior Designers And Contractors In India
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              HOME INTERIOR DESIGNERS IN INDIA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are the largest home interior designers in India with experience centres across major cities and over 20 years of experience. We are professional, contemporary interior designers and contractors with capacity to hand over 300 projects every month. We ensure client satisfaction through quality products and systematic working.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As the most renowned contemporary interior designers, we design and build beautiful living space within an apartment, villa or independent home, using our vast experience and creativity. Customize modular kitchen, bedroom, living and dining room furniture as per requirement with the help of the best interior design company.
            </p>
            <Link
              to="/company"
              className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all"
            >
              Read more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

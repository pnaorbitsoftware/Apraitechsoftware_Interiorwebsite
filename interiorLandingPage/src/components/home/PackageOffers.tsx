import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const offers = [
  {
    id: 'essential',
    name: 'Everything ESSENTIAL',
    originalPrice: '₹ 8.85 Lac',
    offerPrice: '₹ 6.37 Lac*',
    desc: 'Essential woodwork for a 2BHK',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'eleganza',
    name: 'ELEGANZA',
    originalPrice: '₹ 15.84 Lac',
    offerPrice: '₹ 11.41 Lac*',
    desc: 'Detailed woodwork for a 3BHK',
    image: 'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'eleganza-plus',
    name: 'ELEGANZA Plus',
    originalPrice: '₹ 24.03 Lac',
    offerPrice: '₹ 16.82 Lac*',
    desc: 'Woodwork & beautifications for a 3BHK',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function PackageOffers() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            PACKAGE OFFERS
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <Link to={`/offers#${offer.id}`} className="block h-full">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded mb-3 w-max">
                    Offer
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{offer.name}</h3>
                  <p className="text-xs text-gray-200 line-through mb-0.5">{offer.originalPrice}</p>
                  <p className="text-2xl font-bold text-amber-300 mb-2">{offer.offerPrice}</p>
                  <p className="text-xs text-gray-100 mb-2">{offer.desc}</p>
                  <span className="inline-flex items-center gap-2 mt-2 text-amber-300 text-xs font-semibold group-hover:gap-3 transition-all">
                    View Details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const offers = [
  {
    id: 'essential',
    name: 'Everything ESSENTIAL',
    desc: 'Essential woodwork for a 2BHK',
    features: ['Modular kitchen', 'Wardrobes', 'TV unit', 'Basic flooring'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'eleganza',
    name: 'ELEGANZA',
    desc: 'Detailed woodwork for a 3BHK',
    features: ['Full modular kitchen', 'All wardrobes', 'Living room furniture', 'Dining set'],
    image: 'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'eleganza-plus',
    name: 'ELEGANZA Plus',
    desc: 'Woodwork & beautifications for a 3BHK',
    features: ['Premium kitchen', 'Complete interiors', 'False ceiling', 'Lighting solutions'],
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export default function OffersPage() {
  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-24">
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            PACKAGE OFFERS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Exclusive interior design packages tailored for your home.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.id}
                id={offer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative h-96 rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:border-amber-500 hover:shadow-xl transition-all"
              >
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded mb-3 w-max">
                    Offer
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-1">{offer.name}</h2>
                  <p className="text-sm text-gray-200 line-through mb-0.5">{offer.originalPrice}</p>
                  <p className="text-3xl font-bold text-amber-400 mb-2">{offer.offerPrice}</p>
                  <p className="text-sm text-gray-100 mb-3">{offer.desc}</p>
                  <ul className="space-y-1.5 mb-4 text-sm text-gray-100">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-amber-500 text-white text-sm font-semibold rounded hover:bg-amber-600 transition-colors w-max"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

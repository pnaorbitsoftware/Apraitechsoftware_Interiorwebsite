

// src/components/home/PackageOffers.tsx
import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'

const packageOffers = [
  {
    id: 1,
    title: "Everything ESSENTIAL",
    description: "Essential woodwork for a 2BHK",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
    badge: "ESSENTIAL",
    bgColor: "from-amber-900/90"
  },
  {
    id: 2,
    title: "ELEGANZA",
    description: "Detailed woodwork for a 3BHK",
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: "ELEGANZA",
    bgColor: "from-emerald-900/90"
  },
  {
    id: 3,
    title: "ELEGANZA Plus",
    description: "Woodwork & beautifications for a 3BHK",
    image: 'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    badge: "PREMIUM",
    bgColor: "from-blue-900/90"
  },
  {
    id: 4,
    title: "LUXURY Suite",
    description: "Premium woodwork for luxury apartments",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
    badge: "LUXURY",
    bgColor: "from-purple-900/90"
  },
  {
    id: 5,
    title: "MODERN Living",
    description: "Contemporary design for modern homes",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600",
    badge: "MODERN",
    bgColor: "from-red-900/90"
  },
  {
    id: 6,
    title: "CLASSIC Collection",
    description: "Timeless designs for elegant spaces",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=600",
    badge: "CLASSIC",
    bgColor: "from-stone-900/90"
  }
]

export default function PackageOffers() {
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, { 
    stiffness: 60,  // Lower for smoother motion
    damping: 20,
    mass: 0.5
  })

  useEffect(() => {
    let animationFrame: number
    let startTime: number | null = null
    const speed = 0.03 // Pixels per millisecond - adjust this for speed

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      
      // Move left continuously
      x.set(-(timestamp * speed))
      
      // Reset position when we've scrolled through all cards
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth / 3 // Because we triplicated
        if (Math.abs(x.get()) >= containerWidth) {
          startTime = timestamp
          x.set(0)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [x])

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Package <span className="text-amber-600">Offers</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our premium woodwork packages tailored to your needs
          </motion.p>
        </div>

        {/* Continuous Scrolling Cards - NO GRADIENTS */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={containerRef}
            style={{ x: springX }}
            className="flex gap-6"
          >
            {/* Triplicate the array for seamless infinite scroll */}
            {[...packageOffers, ...packageOffers, ...packageOffers].map((offer, index) => (
              <div
                key={`${offer.id}-${index}`}
                className="flex-none w-80 md:w-96"
              >
                <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-[500px]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${offer.bgColor} via-black/60 to-black/30 group-hover:via-black/50 transition-all duration-500`} />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full shadow-lg">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                    {/* Price Tag */}
                    <div className="mb-4 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-sm font-medium uppercase tracking-wider opacity-90">
                        Starting from
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                       
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="text-gray-200 mb-6 text-sm">{offer.description}</p>

                    {/* CTA Button */}
                    <Link
                      to={`/offers/${offer.id}`}
                      className="w-full bg-white text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group/btn hover:shadow-lg transform hover:-translate-y-1"
                    >
                      <span>View Details</span>
                      <svg 
                        className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Auto-scroll Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-amber-600 rounded-full"
            />
            <span className="text-sm text-gray-500"></span>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            to="/offers"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group"
          >
            View All Packages
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
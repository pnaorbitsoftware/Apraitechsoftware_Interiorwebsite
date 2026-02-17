import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920',
    title: 'Professional Home Interior Design Company',
    subtitle: 'SINCE 2004',
    features: [
      { label: 'Premium Materials', value: '' },
      { label: '10 Years Warranty', value: '' },
      { label: '40 Working Days', value: 'Completion' },
      { label: '300 Per Month', value: 'Projects' },
      { label: 'Lifelong Service Support', value: '' },
    ],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920',
    title: 'Contemporary Interior Designers',
    subtitle: 'TRUSTED',
    features: [
      { label: '20+ Years Experience', value: '' },
      { label: '28 Showrooms', value: '' },
      { label: '1400+ Employees', value: '' },
    ],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920',
    title: 'Transform Your Space',
    subtitle: 'EXCELLENCE',
    features: [
      { label: 'Modular Kitchens', value: '' },
      { label: 'Custom Bedrooms', value: '' },
      { label: 'Living & Dining', value: '' },
    ],
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [])

  // Crossfade variants - no black frames!
  const fadeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      }
    }
  }

  // Smooth scale animation for Ken Burns effect
  const scaleVariants = {
    initial: { scale: 1.1 },
    animate: { 
      scale: 1,
      transition: {
        duration: 6,
        ease: "linear",
      }
    }
  }

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-black">
      {/* Background Images with crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => (
            index === current && (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                  variants={scaleVariants}
                  initial="initial"
                  animate="animate"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Gradient Overlays - stay constant */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="max-w-3xl"
            >
              {/* Subtitle */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="w-10 h-0.5 bg-amber-400" />
                <span className="text-amber-400 font-semibold text-sm tracking-widest">
                  {slides[current].subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                {slides[current].title}
              </h1>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>

              {/* Features */}
              {slides[current].features && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-6 mt-8"
                >
                  {slides[current].features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                      <span className="text-sm text-gray-300">
                        {feature.label} {feature.value && `- ${feature.value}`}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative"
          >
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-amber-500 w-8' : 'bg-white/30 group-hover:bg-white/50 w-2'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 text-white/60 text-sm font-mono">
        <span className="text-white">0{current + 1}</span>
        <span className="mx-1">/</span>
        <span>0{slides.length}</span>
      </div>
    </section>
  )
}
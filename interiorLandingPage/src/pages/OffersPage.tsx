import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'

const offers = [
  // Original 3 offers
  {
    id: 'essential',
    name: 'Everything ESSENTIAL',
    desc: 'Essential woodwork for a 2BHK apartment',
    features: ['Modular kitchen', 'Wardrobes', 'TV unit', 'Basic flooring', 'Paint touch-up'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop',
    price: '₹4.5L - 5.5L',
    popular: false,
    category: '2BHK',
    rating: 4.5
  },
  {
    id: 'eleganza',
    name: 'ELEGANZA',
    desc: 'Detailed woodwork for a 3BHK home',
    features: ['Full modular kitchen', 'All wardrobes', 'Living room furniture', 'Dining set', 'False ceiling'],
    image: 'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=387&auto=format&fit=crop',
    price: '₹6.5L - 7.5L',
    popular: false,
    category: '3BHK',
    rating: 4.7
  },
  {
    id: 'eleganza-plus',
    name: 'ELEGANZA Plus',
    desc: 'Woodwork & beautifications for a 3BHK',
    features: ['Premium kitchen', 'Complete interiors', 'False ceiling', 'Lighting solutions', 'Wallpaper'],
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=387&auto=format&fit=crop',
    price: '₹8.5L - 9.5L',
    popular: true,
    category: '3BHK',
    rating: 4.9
  },
  
  // 5 New Offers
  {
    id: 'villa-premium',
    name: 'Villa PREMIUM',
    desc: 'Luxury interior design for villas',
    features: ['Premium kitchen', 'All bedrooms', 'Home theater', 'Wine cellar', 'Landscape design', 'Smart home'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    price: '₹15L - 20L',
    popular: true,
    category: 'Villa',
    rating: 5.0
  },
  {
    id: 'kitchen-master',
    name: 'Kitchen MASTER',
    desc: 'Complete modular kitchen solution',
    features: ['Italian kitchen', 'Quartz countertop', 'Soft-close cabinets', 'Kitchen island', 'Appliance integration', 'Breakfast counter'],
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop',
    price: '₹3.5L - 4.5L',
    popular: false,
    category: 'Kitchen',
    rating: 4.8
  },
  {
    id: 'bedroom-luxury',
    name: 'Bedroom LUXURY',
    desc: 'Luxurious bedroom suite design',
    features: ['Custom wardrobe', 'Platform bed', 'Vanity unit', 'Ambient lighting', 'Walk-in closet', 'Smart curtains'],
    image: 'https://images.unsplash.com/photo-1630414848933-5b2a18dd3c9b?q=80&w=600&auto=format&fit=crop',
    price: '₹3.2L - 4.2L',
    popular: false,
    category: 'Bedroom',
    rating: 4.6
  },
  {
    id: 'office-pro',
    name: 'Office PRO',
    desc: 'Professional home office setup',
    features: ['Ergonomic furniture', 'Custom cabinetry', 'Task lighting', 'Acoustic panels', 'Meeting area', 'Storage wall'],
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop',
    price: '₹2.8L - 3.8L',
    popular: false,
    category: 'Office',
    rating: 4.5
  },
  {
    id: 'kids-dream',
    name: "Kids DREAM",
    desc: 'Magical kids room design',
    features: ['Theme-based room', 'Study area', 'Storage beds', 'Play zone', 'Safety features', 'Art wall'],
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=600&auto=format&fit=crop',
    price: '₹2.2L - 3.2L',
    popular: true,
    category: 'Kids',
    rating: 4.7
  }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
}

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function OffersPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      })
    }
  }

  // Get unique categories
  const categories = ['All', ...new Set(offers.map(offer => offer.category))]

  // Filter offers based on category
  const filteredOffers = activeFilter === 'All' 
    ? offers 
    : offers.filter(offer => offer.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-16 md:pt-24 md:pb-24 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scroll Progress Bar with Glow */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-blue-500 z-50 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-blue-300 blur-sm opacity-50"></div>
      </motion.div>

      {/* Scroll to Top Button with Enhanced Animation */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ 
          opacity: scrollProgress > 20 ? 1 : 0,
          scale: scrollProgress > 20 ? 1 : 0,
          rotate: scrollProgress > 20 ? 0 : -180,
          y: scrollProgress > 20 ? 0 : 20
        }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Hero Section with Enhanced Parallax */}
      <section className="relative py-20 md:py-28 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200')",
          }}
          animate={{
            scale: 1 + (scrollProgress / 500),
            y: scrollProgress * 0.5
          }}
          transition={{ duration: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Badge */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-semibold shadow-lg">
                ✦ {offers.length} Exclusive Packages ✦
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-amber-300 via-orange-200 to-amber-400 bg-clip-text text-transparent">
                PACKAGE OFFERS
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-8"
            >
              Exclusive interior design packages tailored for your home. Choose from 8 carefully curated designs.
            </motion.p>

            {/* Stats with Counter Animation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { number: '8+', label: 'Packages', icon: '📦' },
                { number: '100+', label: 'Designs', icon: '🎨' },
                { number: '24/7', label: 'Support', icon: '🛠️' },
                { number: '4.8', label: 'Rating', icon: '⭐' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative">
            <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div 
                className="w-1.5 h-3 bg-gradient-to-b from-amber-400 to-blue-400 rounded-full mt-2"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white/50"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Category Filter with Animation */}
      <section className="py-6 bg-white/80 backdrop-blur-lg sticky top-20 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                    {offers.filter(o => o.category === category).length}
                  </span>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offers Grid with Enhanced Animations */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredOffers.map((offer, i) => (
              <motion.div
                key={offer.id}
                id={offer.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onHoverStart={() => setHoveredId(offer.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 cursor-pointer"
              >
                {/* Image with Advanced Parallax */}
                <motion.img
                  src={offer.image}
                  alt={offer.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === offer.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Gradient Overlay with Animation */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                  animate={{
                    opacity: hoveredId === offer.id ? 1 : 0.9
                  }}
                />
                
                {/* Popular Badge with Pulse */}
                {offer.popular && (
                  <motion.div
                    variants={pulseVariants}
                    animate="animate"
                    className="absolute top-4 left-4 z-20"
                  >
                    <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                      <motion.span
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔥
                      </motion.span>
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Category Badge with Slide */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="absolute top-4 right-4 z-20"
                >
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-lg">
                    {offer.category}
                  </span>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                  className="absolute bottom-36 left-4 z-20"
                >
                  <span className="px-3 py-1.5 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    ⭐ {offer.rating}
                  </span>
                </motion.div>

                {/* Price Tag with Pop */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5, type: "spring" }}
                  className="absolute bottom-36 right-4 z-20"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full shadow-lg">
                    {offer.price}
                  </span>
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="absolute inset-0 flex flex-col justify-end p-6 z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.6 }}
                >
                  <motion.h2 
                    className="text-2xl font-bold text-white mb-2"
                    animate={{
                      x: hoveredId === offer.id ? 5 : 0
                    }}
                  >
                    {offer.name}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-sm text-gray-200 mb-4"
                    animate={{
                      x: hoveredId === offer.id ? 5 : 0
                    }}
                  >
                    {offer.desc}
                  </motion.p>
                  
                  {/* Features List with Stagger */}
                  <motion.ul 
                    className="space-y-2 mb-6 text-sm text-gray-100"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05, delayChildren: i * 0.1 + 0.7 }
                      }
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    {offer.features.slice(0, 4).map((f, idx) => (
                      <motion.li
                        key={f}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        className="flex items-center gap-2"
                      >
                        <motion.svg 
                          className="w-4 h-4 text-amber-400 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                        <span>{f}</span>
                      </motion.li>
                    ))}
                    {offer.features.length > 4 && (
                      <motion.li 
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                        className="text-amber-400 text-xs font-semibold"
                      >
                        +{offer.features.length - 4} more features
                      </motion.li>
                    )}
                  </motion.ul>

                  {/* CTA Button with Advanced Animation */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.8, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={`/contact?package=${offer.id}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 w-full group/link shadow-lg"
                    >
                      <span>Get Free Estimate</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ 
                          x: [0, 5, 0],
                          rotate: [0, 10, 0]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 grid md:grid-cols-4 gap-6"
          >
            {[
              { icon: '💰', title: 'Best Price Guarantee', desc: 'Competitive pricing with no hidden costs', color: 'from-green-500 to-emerald-500' },
              { icon: '🎨', title: 'Custom Design', desc: 'Tailored to your preferences', color: 'from-blue-500 to-cyan-500' },
              { icon: '⚡', title: 'Fast Execution', desc: 'Timely delivery guaranteed', color: 'from-yellow-500 to-orange-500' },
              { icon: '🔧', title: '5-Year Warranty', desc: 'Quality assurance on all work', color: 'from-purple-500 to-pink-500' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                <div className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                    className="text-4xl mb-4"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll Progress Text with Animation */}
      <motion.div 
        className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-amber-500 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
        initial={{ opacity: 0, x: -50, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 10 ? 1 : 0, 
          x: scrollProgress > 10 ? 0 : -50,
          scale: scrollProgress > 10 ? 1 : 0
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          Progress: {Math.round(scrollProgress)}%
        </div>
      </motion.div>

      {/* Floating Action Buttons */}
      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: scrollProgress > 30 ? 1 : 0,
          y: scrollProgress > 30 ? 0 : 50
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-4 py-2 bg-white text-gray-800 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2"
        >
          <span>↑</span> Top
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          className="px-4 py-2 bg-white text-gray-800 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2"
        >
          <span>↓</span> Bottom
        </motion.button>
      </motion.div>
    </div>
  )
}
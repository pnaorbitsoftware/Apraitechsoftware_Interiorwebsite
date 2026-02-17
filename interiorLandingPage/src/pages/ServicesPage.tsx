// src/pages/ServicesPage.tsx
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const services = [
  {
    id: 1,
    name: 'KITCHEN',
    slug: 'kitchen',
    tagline: 'The Heart of Your Home',
    desc: 'Modular kitchen design and furnishing',
    fullDesc: 'Experience the perfect blend of style and functionality with our custom modular kitchens. We design spaces that inspire your culinary journey.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800',
    features: ['Custom Cabinetry', 'Premium Hardware', 'Smart Storage', 'Elegant Finishes'],
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 2,
    name: 'BEDROOM',
    slug: 'bedroom',
    tagline: 'Your Personal Sanctuary',
    desc: 'Custom bedroom interiors',
    fullDesc: 'Transform your bedroom into a peaceful retreat with our bespoke designs. From wardrobes to headboards, every detail matters.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
    features: ['Custom Wardrobes', 'Space Optimization', 'Ambient Lighting', 'Luxury Bedding'],
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 3,
    name: 'LIVING',
    slug: 'living-room',
    tagline: 'Where Memories Are Made',
    desc: 'Living room design solutions',
    fullDesc: 'Create unforgettable moments in a living room that perfectly balances comfort and sophistication. Tailored to your lifestyle.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
    features: ['Modular Furniture', 'Entertainment Units', 'Accent Walls', 'Lighting Design'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    name: 'DINING',
    slug: 'dining-room',
    tagline: 'Gather & Celebrate',
    desc: 'Dining room interiors',
    fullDesc: 'Design a dining space that brings family together. From intimate dinners to grand celebrations, we create the perfect setting.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800',
    features: ['Dining Tables', 'Buffet Units', 'Lighting Fixtures', 'Seating Solutions'],
    color: 'from-green-500 to-emerald-500'
  },
]

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Clients', value: '450+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Design Awards', value: '25+' },
]

export default function ServicesPage() {
  const location = useLocation()
  const [activeService, setActiveService] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setActiveService(id)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          const yOffset = -120
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        }, 200)
      }
    }
  }, [location])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : {}}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920" 
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="text-amber-500">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Crafting exceptional spaces that reflect your style and personality
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-600 font-semibold tracking-wider text-sm">WHAT WE OFFER</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Design Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of your interior design journey
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center scroll-mt-32`}
              >
                {/* Image Side */}
                <motion.div 
                  className="flex-1 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Floating Badge */}
                    <motion.div 
                      className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color} font-bold text-lg`}>
                        {service.name}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  className="flex-1"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="max-w-xl">
                    <div className={`w-20 h-1 bg-gradient-to-r ${service.color} rounded-full mb-6`} />
                    
                    <motion.div 
                      className="text-amber-600 mb-4"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h3 className="text-4xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-xl text-amber-600 font-medium mb-4">{service.tagline}</p>
                    <p className="text-gray-600 text-lg mb-6">{service.fullDesc}</p>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <svg className={`w-5 h-5 text-transparent bg-clip-text bg-gradient-to-r ${service.color}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group`}
                      >
                        <span>Get a Quote</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-10"
          >
            Let's bring your vision to life with our expert design solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-10 py-5 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/projects"
              className="px-10 py-5 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
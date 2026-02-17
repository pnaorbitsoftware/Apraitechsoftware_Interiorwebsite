import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    quote: 'Finding a passionate professional to craft my dream home was truly wonderful. The attention to detail and quality of work exceeded my expectations.',
    name: 'Ms. Honey Rose',
    location: 'Bangalore',
  },
  {
    id: 2,
    quote: 'Structured, organized and pleasant to deal with. The team delivered our project on time with excellent craftsmanship. Highly recommended!',
    name: 'Prannoy HS',
    location: 'Hyderabad',
  },
  {
    id: 3,
    quote: 'Working with the team was such a wonderful experience. They understood our vision and brought it to life beautifully. We could not be happier.',
    name: 'Mr. Suresh Chandran',
    location: 'Kerala',
  },
  {
    id: 4,
    quote: 'We are well pleased with the workmanship and professionalism. The interior design transformed our space completely. Thank you!',
    name: 'Mr. Johnson Daniel',
    location: 'Chennai',
  },
]

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            14000+ SATISFIED CUSTOMERS
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center px-6 py-8 bg-white rounded-lg shadow-lg"
            >
              <svg className="w-12 h-12 text-amber-500 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <footer>
                <cite className="not-italic font-bold text-gray-900">{testimonials[current].name}</cite>
                <p className="text-amber-600 text-sm mt-1">{testimonials[current].location}</p>
              </footer>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? 'bg-amber-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

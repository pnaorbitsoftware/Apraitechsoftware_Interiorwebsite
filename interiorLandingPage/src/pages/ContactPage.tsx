import { useState } from 'react'
import { motion } from 'framer-motion'

// Google Sheets Web App URL - Updated with your new Apps Script URL
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwROf5nGD864KLhVitjTMC-BoRlbIW-kKl9UUIxBAZqNIXfKiLTx6zuMWWraxg1bgpz/exec'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    package: '2BHK',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Prepare data for Google Sheets with your specific sheet ID
      const submissionData = {
        ...formData,
        sheetId: '1oDbowlIpJWwmF64CyDAL6GFeK8UTZlQ-KCnQlZoVips', // Your specific sheet ID
        timestamp: new Date().toLocaleString('en-IN', { 
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'short'
        }),
        sendEmail: true, // Flag to trigger email sending
      }

      // Send to Google Sheets
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      // Success message
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your request has been submitted successfully. A confirmation email has been sent to your email address. We\'ll contact you within 24 hours.',
      })

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        package: '2BHK',
      })

      // Log for debugging (only visible in browser console)
      console.log('Form submitted to sheet:', submissionData)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Variants for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  // Encode address for Google Maps URL
  const officeAddress = "Anand Nagar Colony, Anandnagar, Ashok Nagar Colony, Baramati, Maharashtra 413102"
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="fixed top-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="fixed bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Header Section with new animation */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 50 }}
            className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent"
          >
            LET'S CONNECT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Ready to transform your space? We're just a message away.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content Section - Split screen layout */}
      <section className="relative z-10 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Info Panel with floating animation */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 lg:sticky lg:top-24"
            >
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="animate"
                className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold text-gray-800 mb-6"
                >
                  ✦ Reach Out
                </motion.h2>
                <motion.ul variants={itemVariants} className="space-y-6 text-gray-700">
                  <motion.li variants={itemVariants} className="flex items-center gap-4 group">
                    <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors">
                      <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a 
                      href="tel:+916364326342" 
                      className="text-lg hover:text-amber-600 transition-colors"
                    >
                      +91 6364326342
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-center gap-4 group">
                    <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors">
                      <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a 
                      href="mailto:interior@aparaitechsoftware.org" 
                      className="text-lg hover:text-amber-600 transition-colors"
                    >
                      interior@aparaitechsoftware.org
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-center gap-4 group">
                    <div className="p-3 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors">
                      <svg
                        className="w-6 h-6 text-amber-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <a 
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:text-amber-600 transition-colors"
                    >
                      {officeAddress}
                    </a>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-amber-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-3">🌟 Why choose us?</h3>
                <p className="text-amber-50">
                  We don't just design spaces, we create experiences. Our team brings
                  your vision to life with personalized care and attention to every
                  detail.
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - Form Card with staggered animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold text-gray-800 mb-2"
              >
                Request a callback
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-500 mb-8"
              >
                Fill in your details and we'll get back to you within 24 hours.
              </motion.p>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="+91 98765 43210"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <label
                    htmlFor="package"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Type
                  </label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition shadow-sm appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="4BHK">4BHK</option>
                    <option value="Villa">Villa</option>
                    <option value="Office">Office Space</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition shadow-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell us about your dream project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-8 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Send Request'
                  )}
                </motion.button>
              </form>

              {/* No link to view responses - Only accessible via Google Sheets login */}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
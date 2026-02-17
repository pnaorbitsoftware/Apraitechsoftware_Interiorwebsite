import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '28', label: 'Showrooms' },
  { value: '1400+', label: 'Employees' },
  { value: '300', label: 'Projects/Month' },
]

const workflow = [
  { title: 'Consultation', desc: 'Sales team or design consultants are experts in estimating the cost and providing suitable interior design solutions.' },
  { title: 'Interior Design', desc: 'Designers play the most important role of understanding requirements and putting them into a practical plan.' },
  { title: 'Production', desc: 'We produce all furniture in our own factory with brilliant craftsmanship and modern production lines.' },
  { title: 'Execution', desc: 'Installation team starts execution at site immediately after delivery of materials.' },
  { title: 'After Sales Service', desc: 'We have a dedicated service team to attend service calls and resolve complaints adequately.' },
]

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 md:pt-24 md:pb-24">
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            WELCOME TO INTERIOR DESIGN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-amber-400 font-semibold mb-2"
          >
            #BringHappinessInside®
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-3xl mx-auto"
          >
            The largest and most reliable home interior design company with experience centres across India.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                alt="Company"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Best Interior Design Company in India
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We started with commercial space and residential furnishing. Subsequently, we opened showrooms across major cities to serve customers. Our manufacturer deals directly with clients, avoiding intermediaries and reducing costs. Durability of products, systematic procedure for work and teamwork of highly efficient people make us the best in the industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Contemporary designs and creative space plans by professionals ensure elegant home furnishing. We are able to meet the expectations of clients since inception.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition-colors"
              >
                Discuss Your Requirements
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Just One Company for Interior Design, Production & Implementation
          </motion.h2>
          <div className="space-y-6">
            {workflow.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-lg bg-gray-50 hover:bg-amber-50 transition-colors"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

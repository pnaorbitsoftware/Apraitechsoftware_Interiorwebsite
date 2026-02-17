import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Talk to our Interior Designer & Get an Estimate',
    desc: 'Detailed Drawing and Approval',
    icon: '1',
  },
  {
    title: 'Production at Own Factories',
    desc: 'Material Delivery & Execution',
    icon: '2',
  },
  {
    title: 'On Time Project Hand Over',
    desc: 'Project completion in 40 working days',
    icon: '3',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-600 font-semibold text-sm tracking-widest mb-2">
            PROJECT COMPLETION IN 40 WORKING DAYS*
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            OUR WORKFLOW
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.icon}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="w-16 h-16 rounded-full bg-amber-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

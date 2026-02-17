// // src/components/home/LocationBar.tsx
// import { motion } from 'framer-motion'
// import { useState, useEffect } from 'react'

// const locations = [
//   'BENGALURU', 'KERALA', 'CHENNAI', 'COIMBATORE', 
//   'MANGALURU', 'HYDERABAD', 'PUNE', 'NAVI MUMBAI', 
//   'MUMBAI', 'UAE', 'AHMEDABAD'
// ]

// export default function LocationBar() {
//   const [currentTime, setCurrentTime] = useState(new Date())

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date())
//     }, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   const formattedTime = currentTime.toLocaleTimeString('en-US', { 
//     hour12: false,
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
//   })

//   return (
//     <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white py-2 text-xs sm:text-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Left side - Locations Marquee */}
//           <div className="flex-1 overflow-hidden">
//             <motion.div
//               className="flex items-center gap-6 whitespace-nowrap"
//               animate={{
//                 x: [0, -1500],
//               }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 40,
//                   ease: "linear",
//                 },
//               }}
//             >
//               {[...locations, ...locations].map((location, index) => (
//                 <div key={index} className="flex items-center gap-6">
//                   <span className="font-medium tracking-wider">{location}</span>
//                   <span className="w-1 h-1 bg-white/40 rounded-full"></span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Right side - Contact Info */}
//           <div className="flex items-center gap-4 ml-4 flex-shrink-0">
//             {/* Time */}
//             <div className="hidden sm:flex items-center gap-1">
//               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span className="font-mono text-xs">{formattedTime}</span>
//             </div>

//             {/* Call Now */}
//             <a 
//               href="tel:+1234567890" 
//               className="flex items-center gap-1 hover:text-amber-200 transition-colors"
//             >
//               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//               </svg>
//               <span className="text-xs font-medium hidden sm:inline">CALL</span>
//             </a>

//             {/* WhatsApp */}
//             <a 
//               href="https://wa.me/1234567890" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 hover:text-amber-200 transition-colors"
//             >
//               <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.447-1.273.607-1.446c.16-.173.346-.216.462-.216l.332.006c.106.004.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
//               </svg>
//               <span className="text-xs font-medium hidden sm:inline">WhatsApp</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// src/components/home/LocationBar.tsx
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const locations = [
  'BENGALURU', 'KERALA', 'CHENNAI', 'COIMBATORE', 
  'MANGALURU', 'HYDERABAD', 'PUNE', 'NAVI MUMBAI', 
  'MUMBAI', 'AHMEDABAD'
]

export default function LocationBar() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTime = currentTime.toLocaleTimeString('en-US', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white py-2 text-xs sm:text-sm">
      {/* Changed from bg-gradient-to-r from-amber-600 to-amber-700 to bg-transparent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left side - Locations Marquee */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-6 whitespace-nowrap"
              animate={{
                x: [0, -1500],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {[...locations, ...locations].map((location, index) => (
                <div key={index} className="flex items-center gap-6">
                  <span className="font-medium tracking-wider">{location}</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Contact Info */}
          <div className="flex items-center gap-4 ml-4 flex-shrink-0">
            {/* Time */}
            <div className="hidden sm:flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-mono text-xs">{formattedTime}</span>
            </div>

            {/* Call Now */}
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-1 hover:text-amber-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs font-medium hidden sm:inline">CALL</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-200 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.447-1.273.607-1.446c.16-.173.346-.216.462-.216l.332.006c.106.004.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
              </svg>
              <span className="text-xs font-medium hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
// src/components/home/SocialButtons.tsx
import { motion } from 'framer-motion'

export default function SocialButtons() {
  const whatsappNumber = "917559394029"
  const message = "Hello! I'm interested in your interior design services."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
  const instagramUrl = "https://www.instagram.com/yourusername" // Replace with your Instagram username

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.1 }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
          className="w-12 h-12 drop-shadow-lg"
        />
      </motion.a>

      {/* Instagram Button */}
      <motion.a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.2 }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" 
          alt="Instagram"
          className="w-12 h-12 drop-shadow-lg"
        />
      </motion.a>
    </div>
  )
}
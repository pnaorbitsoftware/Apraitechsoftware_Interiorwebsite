// src/components/home/AudioButton.tsx
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3') // Add your audio file
    audioRef.current.loop = true
    audioRef.current.volume = 0.5
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <motion.button
      onClick={toggleAudio}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-4 py-3 rounded-full shadow-xl border border-white/20 backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Audio waves animation */}
      <div className="flex items-center gap-0.5">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-white rounded-full"
            animate={{
              height: isPlaying ? [8, 16, 8] : 8,
            }}
            transition={{
              duration: 0.8,
              repeat: isPlaying ? Infinity : 0,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      <span className="text-sm font-medium">
        {isPlaying ? 'Audio On' : 'Audio Off'}
      </span>
      
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute -top-12 right-0 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap"
        >
          {isPlaying ? 'Click to mute' : 'Click to play background music'}
          <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </motion.div>
      )}
    </motion.button>
  )
}
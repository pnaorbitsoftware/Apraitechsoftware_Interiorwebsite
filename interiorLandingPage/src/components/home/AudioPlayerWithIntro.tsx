// src/components/home/AudioPlayerWithIntro.tsx
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AudioPlayerWithIntro() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/background-music.mp3')
    audioRef.current.loop = true
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
      setShowPrompt(false)
    }
  }

  const togglePlay = () => {
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
    <>
      {/* Welcome prompt for first-time users */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 z-50 max-w-xs"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl">
              <p className="text-white text-sm mb-3">
                🎵 Would you like to play background music?
              </p>
              <div className="flex gap-2">
                <button
                  onClick={startAudio}
                  className="flex-1 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Yes, play music
                </button>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  No
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main audio control */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center text-white shadow-xl border-2 border-white/20"
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16h2V8H9v8zm4-8v8h2V8h-2zm3-6H8c-3.31 0-6 2.69-6 6v8c0 3.31 2.69 6 6 6h8c3.31 0 6-2.69 6-6V8c0-3.31-2.69-6-6-6z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
          </svg>
        )}
      </motion.button>

      {/* Audio wave animation */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-8 flex items-end gap-1 h-8 z-50"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-amber-500 rounded-full"
                animate={{
                  height: [8, 20, 8],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
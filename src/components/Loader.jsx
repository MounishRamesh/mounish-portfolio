import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-paper text-sm tracking-widest flex items-center gap-3"
          >
            <span className="text-amber-signal">$</span>
            <TypewriterLine text="booting_portfolio --user=mounish_r" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TypewriterLine({ text }) {
  return (
    <span className="relative">
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
        className="inline-block overflow-hidden whitespace-nowrap align-bottom"
      >
        {text}
      </motion.span>
      <span className="w-[2px] h-[1em] bg-amber-signal ml-1 inline-block animate-blink align-middle" />
    </span>
  )
}

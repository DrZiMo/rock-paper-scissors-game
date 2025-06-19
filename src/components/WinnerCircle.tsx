import { motion } from 'framer-motion'
import { useWinner } from '../store/WinnerStore'

const WinnerCircle = () => {
  const winner = useWinner((state) => state.winner)
  const circles = [
    { p: 25, top: '-top-6', left: '-left-7', right: '-right-7' },
    { p: 35, top: '-top-15', left: '-left-16', right: '-right-16' },
    { p: 45, top: '-top-25', left: '-left-25', right: '-right-25' },
  ]
  return (
    <>
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{
            delay: i * 0.1 + 2.3,
            duration: 0.2,
            ease: 'easeOut',
          }}
          className={`bg-white p-${circle.p} rounded-full ${circle.top} ${
            winner == 'player' ? circle.left : circle.right
          } absolute -z-10`}
        />
      ))}
    </>
  )
}

export default WinnerCircle

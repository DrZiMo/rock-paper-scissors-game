import { motion } from 'framer-motion'
import { useWinner } from '../store/WinnerStore'

const WinnerCircle = () => {
  const winner = useWinner((state) => state.winner)

  // Only show the animation if there's a winner
  if (!winner) return null

  const circles = [
    { p: 90, top: '-20px', xPos: '-15px' },
    { p: 120, top: '-50px', xPos: '-44px' },
    { p: 140, top: '-70px', xPos: '-65px' },
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
          style={{
            padding: `${circle.p}px`,
            position: 'absolute',
            top: circle.top,
            left: winner === 'player' ? circle.xPos : undefined,
            right: winner === 'computer' ? circle.xPos : undefined,
            zIndex: -10,
            backgroundColor: 'white',
            borderRadius: '9999px',
          }}
          className='w-fit'
        />
      ))}
    </>
  )
}

export default WinnerCircle

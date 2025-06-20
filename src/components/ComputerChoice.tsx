import { useEffect, useState } from 'react'
import Piece from './Piece'
import { AnimatePresence, motion } from 'framer-motion'
import { useComputerSelect } from '../store/ComputerStore'

const ComputerChoice = () => {
  const [randomPiece, setRandomPiece] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const pieces = ['paper', 'rock', 'scissors']
  const changeComputerChoice = useComputerSelect(
    (state) => state.changeComputerSelect
  )

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 3)
    setRandomPiece(pieces[randomNum])
    changeComputerChoice(randomPiece)
    setInterval(() => setIsLoading(false), 2000)
  }, [randomPiece])

  return (
    <div className='w-fit'>
      <AnimatePresence>
        {isLoading ? (
          <div className='p-18 bg-black rounded-full opacity-40'></div>
        ) : (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Piece
              piece={randomPiece as 'paper' | 'rock' | 'scissors'}
              size={7}
              isAbsolute={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ComputerChoice

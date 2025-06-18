import { useEffect } from 'react'
import { useWinner } from '../store/WinnerStore'
import { useSelectedPiece } from '../store/SelectedPiece'
import { useComputerSelect } from '../store/ComputerStore'
import { AnimatePresence } from 'motion/react'
import { motion } from 'framer-motion'
import { useScore } from '../store/ScoreStore'
import { useGameStatus } from '../store/GameState'

const BattleResult = () => {
  const gameStatus = useGameStatus((state) => state.changeStatus)
  const increaseScore = useScore((state) => state.increaseScore)
  const resetScore = useScore((state) => state.resetScore)
  const winner = useWinner((state) => state.winner)
  const setWinner = useWinner((state) => state.setWinner)
  const playerPiece = useSelectedPiece((state) => state.selectedPiece)
  const computerPiece = useComputerSelect((state) => state.computerSelect)
  const isSelected = useSelectedPiece((state) => state.toggleSelected)

  useEffect(() => {
    if (playerPiece == 'rock' && computerPiece == 'scissors') {
      setWinner('player')
    } else if (playerPiece == 'scissors' && computerPiece == 'paper') {
      setWinner('player')
    } else if (playerPiece == 'paper' && computerPiece == 'rock') {
      setWinner('player')
    } else if (playerPiece == 'scissors' && computerPiece == 'rock') {
      setWinner('computer')
    } else if (playerPiece == 'paper' && computerPiece == 'scissors') {
      setWinner('computer')
    } else if (playerPiece == 'rock' && computerPiece == 'paper') {
      setWinner('computer')
    } else {
      setWinner('')
    }
  }, [playerPiece, computerPiece])

  useEffect(() => {
    if (winner == 'player') {
      const timer = setTimeout(() => {
        increaseScore()
      }, 2500)

      return () => clearTimeout(timer)
    } else if (winner == 'computer') {
      const timer = setTimeout(() => {
        resetScore()
      }, 2500)

      return () => clearTimeout(timer)
    }
  }, [winner])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2.5 }}
        className={`flex flex-col justify-center items-center mt-15 ${
          winner === 'player' || winner === 'computer'
            ? 'opacity-100'
            : 'opacity-0'
        }`}
      >
        <h1 className='font-extrabold text-5xl text-white'>
          {winner == 'player'
            ? 'YOU WIN'
            : winner == 'computer'
            ? 'YOU LOSE'
            : 'DRAW'}
        </h1>
        <button
          className='bg-white px-18 py-3 mt-4 rounded-md cursor-pointer hover:bg-gray-200'
          onClick={() => {
            gameStatus('selecting')
            isSelected()
          }}
        >
          PLAY AGAIN
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default BattleResult

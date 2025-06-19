import { AnimatePresence } from 'motion/react'
import { useSelectedPiece } from '../store/SelectedPiece'
import Piece from './Piece'
import ComputerChoice from './ComputerChoice'
import BattleResult from './BattleResult'
import { motion } from 'framer-motion'
import { useGameStatus } from '../store/GameState'
import { useWinner } from '../store/WinnerStore'
import WinnerCircle from './WInnerCircle'

const BattlePart = () => {
  const selectedPiece = useSelectedPiece((state) => state.selectedPiece)
  const status = useGameStatus((state) => state.status)
  const winner = useWinner((state) => state.winner)

  return (
    <>
      {status == 'result' && (
        <AnimatePresence>
          {selectedPiece && (
            <motion.div
              key={'box'}
              initial={{ x: '120%' }}
              animate={{ x: '0%' }}
              exit={{ x: '120%' }}
              className='relative w-full max-w-[540px] h-full flex flex-col justify-center'
            >
              <div className='relative w-full flex justify-between text-sm text-center'>
                <div className=' space-y-5'>
                  {winner == 'player' && <WinnerCircle />}
                  <Piece piece={selectedPiece} size={7} isAbsolute={false} />
                  <p className='text-white font-bold'>YOU PICKED</p>
                </div>
                <div className='space-y-5'>
                  {winner == 'computer' && <WinnerCircle />}
                  <ComputerChoice />
                  <p className='text-white font-bold'>THE HOUSE PICKED</p>
                </div>
              </div>
              <BattleResult />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

export default BattlePart

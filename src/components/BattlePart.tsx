import { AnimatePresence } from 'motion/react'
import { useSelectedPiece } from '../store/SelectedPiece'
import Piece from './Piece'
import ComputerChoice from './ComputerChoice'
import BattleResult from './BattleResult'
import { motion } from 'framer-motion'
import { useGameStatus } from '../store/GameState'

const BattlePart = () => {
  const selectedPiece = useSelectedPiece((state) => state.selectedPiece)
  const status = useGameStatus((state) => state.status)

  return (
    <>
      {status == 'result' && (
        <AnimatePresence>
          {selectedPiece && (
            <motion.div
              key={'box'}
              initial={{ x: '109%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-109%' }}
              transition={{ delay: 0.5 }}
              className='relative w-full h-full flex flex-col justify-center'
            >
              <div className='relative w-full flex justify-between text-sm text-center'>
                <div className=' space-y-5'>
                  <Piece piece={selectedPiece} size={7} isAbsolute={false} />
                  <p className='text-white font-bold'>YOU PICKED</p>
                </div>
                <div className='space-y-5'>
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

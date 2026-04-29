import { useSelectedPiece } from '../store/SelectedPiece'
import { AnimatePresence, motion } from 'framer-motion'
import Piece from './Piece'
import { useGameStatus } from '../store/GameState'

const SelectPiece = () => {
  const gameStatus = useGameStatus((state) => state.status)
  const isSelected = useSelectedPiece((state) => state.selected)

  return (
    <AnimatePresence mode='wait'>
      {gameStatus && !isSelected && (
        <motion.div
          key={'box'}
          initial={{ left: '-100%' }}
          animate={{ left: '0%' }}
          exit={{ left: '-100%' }}
          className='w-[65%] max-w-[340px] relative md:h-[70%]'
        >
          <img src='/images/bg-triangle.svg' className='mx-auto md:h-[98%]' />
          <Piece piece='paper' position='left' />
          <Piece piece='rock' position='bottom' />
          <Piece piece='scissors' position='right' />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SelectPiece

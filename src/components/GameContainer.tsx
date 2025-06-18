import BattlePart from './BattlePart'
import SelectPiece from './SelectPiece'

const GameContainer = () => {
  return (
    <div className='flex-1 flex justify-center items-center'>
      {/* 1. Select Piece */}
      <SelectPiece />
      <BattlePart />
    </div>
  )
}

export default GameContainer

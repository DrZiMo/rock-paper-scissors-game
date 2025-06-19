import BattlePart from './BattlePart'
import SelectPiece from './SelectPiece'

const GameContainer = () => {
  return (
    <div className='flex-1 flex justify-center items-center w-full max-w-[540px] relative mx-auto'>
      {/* 1. Select Piece */}
      <SelectPiece />

      {/* 2. The Battle */}
      <BattlePart />
    </div>
  )
}

export default GameContainer

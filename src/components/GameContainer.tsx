import BattlePart from './BattlePart'
import SelectPiece from './SelectPiece'

const GameContainer = () => {
  return (
    <div className='flex-1 flex justify-center items-center w-full max-w-[540px] h-full relative mx-auto outline outline-amber-500'>
      {/* 1. Select Piece */}
      <SelectPiece />

      {/* 2. The Battle */}
      <BattlePart />
    </div>
  )
}

export default GameContainer

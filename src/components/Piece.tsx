import { useGameStatus } from '../store/GameState'
import { useSelectedPiece } from '../store/SelectedPiece'

interface IPieceProp {
  piece: string
  isAbsolute?: boolean
  size?: number
  position?: 'left' | 'right' | 'bottom' | 'neutral'
}

const Piece = ({
  piece,
  size = 5,
  position,
  isAbsolute = true,
}: IPieceProp) => {
  const gameStatus = useGameStatus((state) => state.changeStatus)
  const selected = useSelectedPiece((state) => state.selected)
  const changeSelectedPiece = useSelectedPiece(
    (state) => state.changeSelectedPiece
  )
  const toggleSelected = useSelectedPiece((state) => state.toggleSelected)

  const pos = ActualPos(position as string)
  return (
    <div
      className={`${isAbsolute && 'absolute'} ${pos} ${
        selected ? '' : 'cursor-pointer hover:scale-108'
      }
      bg-gradient-to-t from-${piece}-gradient-fromt to-${piece}-gradient-to rounded-full p-${
        size - 1
      } shadow-[inset_0px_-4px_0px_0px_rgba(0,0,0,0.2)] transition`}
      onClick={() => {
        if (selected) return
        changeSelectedPiece(piece)
        gameStatus('result')
        toggleSelected()
      }}
    >
      <div
        className={`bg-white rounded-full p-${size} shadow-[inset_0px_4px_0px_0px_rgba(0,0,0,0.2)]`}
      >
        <img
          src={`/images/icon-${piece}.svg`}
          className={`w-10 h-10 scale-120`}
        />
      </div>
    </div>
  )
}

function ActualPos(position: string) {
  switch (position) {
    case 'left':
      return 'top-[-48px] left-[-40px]'
    case 'right':
      return 'top-[-48px] right-[-40px]'
    case 'bottom':
      return 'bottom-[-48px] left-1/2 -translate-x-1/2'
    case 'neutral':
      return 'top-0 left-0'
  }
}

export default Piece

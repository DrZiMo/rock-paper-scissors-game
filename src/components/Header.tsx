import { useScore } from '../store/ScoreStore'

const Header = () => {
  const score = useScore((state) => state.score)
  return (
    <div className='flex justify-between items-center outline-3 outline-header-outline p-4 rounded-sm'>
      <img src='/images/logo.svg' alt='logo' />
      <div className='score bg-white text-center h-[100px] w-[100px] rounded-sm flex flex-col justify-center items-center'>
        <p className='text-score-text font-[700]'>SCORE</p>
        <h3 className='fon-bold text-5xl'>{score}</h3>
      </div>
    </div>
  )
}

export default Header

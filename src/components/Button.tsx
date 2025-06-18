import { useRuleWindow } from '../store/RuleStore'

const Button = () => {
  const toggleOpen = useRuleWindow((state) => state.toggleOpen)
  return (
    <button
      className='border-2 border-white uppercase w-fit mx-auto text-white px-10 py-2 rounded-sm font-semibold cursor-pointer'
      onClick={toggleOpen}
    >
      Rules
    </button>
  )
}

export default Button

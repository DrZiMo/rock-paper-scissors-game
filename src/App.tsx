import Button from './components/Button'
import GameContainer from './components/GameContainer'
import Header from './components/Header'
import RulePopover from './components/RulePopover'

const App = () => {
  return (
    <div className='p-6 flex flex-col h-screen'>
      <Header />
      <GameContainer />
      <Button />
      <RulePopover />
    </div>
  )
}

export default App

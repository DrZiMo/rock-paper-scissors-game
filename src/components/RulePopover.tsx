import { useRuleWindow } from '../store/RuleStore'
import { AnimatePresence, motion } from 'framer-motion'

const RulePopover = () => {
  const isOpen = useRuleWindow((state) => state.isOpen)
  const toggleOpen = useRuleWindow((state) => state.toggleOpen)
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='box'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className='absolute top-0 left-0 z-10'
        >
          <div className='relative flex justify-center items-center'>
            <div className='w-screen h-screen bg-white absolute z-10 top-0 left-0'>
              <div className='h-full flex flex-col justify-center'>
                <div className=' h-[70%] mx-auto py-10 flex flex-col items-center justify-between'>
                  <h1 className='text-center text-xl font-extrabold text-dark-text'>
                    RULES
                  </h1>
                  <img src='/images/image-rules.svg' alt='' />
                  <button onClick={toggleOpen}>
                    <img src='/images/icon-close.svg' />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-screen h-screen bg-black opacity-50 hidden'></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RulePopover

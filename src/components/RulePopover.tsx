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
            <div className='w-screen lg:w-[700px] h-screen lg:h-fit bg-white absolute z-10 top-0 left-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-md'>
              <button
                onClick={toggleOpen}
                className='hidden lg:block ml-auto p-5'
              >
                <img src={`${import.meta.env.BASE_URL}images/icon-close.svg`} />
              </button>
              <div className='h-full flex flex-col justify-center'>
                <div className=' h-[70%] lg:h-[90%] mx-auto py-10 flex flex-col items-center justify-between'>
                  <h1 className='text-center text-xl font-extrabold text-dark-text lg:mb-10'>
                    RULES
                  </h1>
                  <img
                    src={`${import.meta.env.BASE_URL}images/image-rules.svg`}
                    alt=''
                  />
                  <button onClick={toggleOpen} className='lg:hidden block'>
                    <img
                      src={`${import.meta.env.BASE_URL}images/icon-close.svg`}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className='w-screen h-screen bg-black opacity-50 hidden lg:block'></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RulePopover

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import Dropdown from './components/Dropdown'

function App() {
  const [isActive, setIsActive] = useState(false)
  // console.log(isActive)

  return (
    <div
      className={`bg-vWhite min-h-screen relative ${
        !isActive ? 'overflow-hidden' : ''
      }`}
    >
      <Navbar setIsActive={setIsActive} isActive={isActive} />
      <div className='flex flex-col sm:flex-row-reverse sm:mx-12 md:mx-24 lg:mx-32 md:gap-14 lg:gap-40 items-center'>
        <div className='sm:w-1/2 sm:h-full flex items-center'>
          <Hero />
        </div>
        <div className='sm:w-1/2 '>
          <Main />
        </div>
      </div>
    </div>
  )
}

export default App

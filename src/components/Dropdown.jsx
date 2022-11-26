import React, { useState } from 'react'
import up from '../../images/icon-arrow-up.svg'
import down from '../../images/icon-arrow-down.svg'
import todo from '../../images/icon-todo.svg'
import calendar from '../../images/icon-calendar.svg'
import reminder from '../../images/icon-reminders.svg'
import planning from '../../images/icon-planning.svg'
import closeMenu from '../../images/icon-close-menu.svg'

const Dropdown = ({ isActive, setIsActive }) => {
  const [idActive, setIdActive] = useState(null)

  const handleIdActive = (id) => {
    idActive !== id ? setIdActive(id) : setIdActive(null)
  }
  // console.log(idActive)

  return (
    <div
      className={`sm:w-full absolute sm:flex sm:items-center top-0 ${
        isActive ? 'right-0' : '-right-full'
      } bg-vWhite bottom-0 w-[65%] px-5 sm:static  text-md text-vGRay transition-all ease-in-out duration-700`}
    >
      <div
        onClick={() => setIsActive(false)}
        className={`sm:hidden cursor-pointer transition-all delay-200 fixed right-7 top-5 ${
          !isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
      >
        <img src={closeMenu} alt='close menu' />
      </div>
      <div className='mt-20 sm:mt-0 sm:flex border sm:gap-2 md: gap-5'>
        <ul className='grid gap-4 sm:flex sm:items-center'>
          <li>
            <div className='flex items-center '>
              <p>Features</p>
              <div
                onClick={() => handleIdActive(1)}
                className={`transition-transform duration-500 ml-4 cursor-pointer ${
                  idActive === 1 ? 'rotate-180' : ''
                }`}
              >
                <img src={down} alt='arrow' />
              </div>
            </div>
            <ul
              className={`transition-all ease-in-out duration-500 overflow-hidden ml-5 flex flex-col gap-3 ${
                idActive === 1 ? 'opacity-1 pt-2' : 'opacity-0 scale-0 h-0'
              }`}
            >
              <li className='flex items-center gap-2'>
                <div>
                  <img src={todo} alt='toDo' />
                </div>
                <p>Todo List</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <img src={calendar} alt='calendar' />
                </div>
                <p>Calendar</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <img src={reminder} alt='reminder' />
                </div>
                <p>Reminders</p>
              </li>
              <li className='flex items-center gap-2'>
                <div>
                  <img src={planning} alt='planning' />
                </div>
                <p>Planning</p>
              </li>
            </ul>
          </li>
          <li>
            <div className='flex items-center'>
              <p>Company</p>
              <div
                onClick={() => handleIdActive(2)}
                className={`transition-transform duration-500 ml-4 cursor-pointer ${
                  idActive === 2 ? 'rotate-180' : ''
                }`}
              >
                <img src={down} alt='arrow' />
              </div>
            </div>
            <ul
              className={`overflow-hidden transition-all ease-in-out duration-500  ml-5 flex flex-col gap-3 ${
                idActive === 2 ? 'opacity-1 pt-2' : 'opacity-0 scale-0 h-0'
              }`}
            >
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>
            <p>Careers</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
        <div className='flex flex-col sm:flex-row sm:items-center sm:mt-0 mt-7 text-center gap-4'>
          <div>
            <p>Login</p>
          </div>
          <div className='border-2 border-vGRay rounded-[15px] py-2 '>
            <p>Register</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown

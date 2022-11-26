import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import Menu from '../../images/icon-menu.svg'
import CloseMenu from '../../images/icon-close-menu.svg'
import Dropdown from './Dropdown'
import up from '../../images/icon-arrow-up.svg'
import down from '../../images/icon-arrow-down.svg'
import todo from '../../images/icon-todo.svg'
import calendar from '../../images/icon-calendar.svg'
import reminder from '../../images/icon-reminders.svg'
import planning from '../../images/icon-planning.svg'

const Navbar = ({ setIsActive, isActive }) => {
  const [idActive, setIdActive] = useState(null)

  const handleIdActive = (id) => {
    idActive !== id ? setIdActive(id) : setIdActive(null)
  }
  return (
    <div>
      <header className='flex justify-between md:gap-5  py-5 items-center px-6'>
        <div className='md:flex-0'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='md:hidden'>
          <div>
            <input
              onChange={() => setIsActive(!isActive)}
              type='checkbox'
              className='hidden'
              id='menu'
            />
            <label
              htmlFor='menu'
              className={`transition-all delay-75 cursor-pointer ${
                isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`}
            >
              <img src={Menu} alt='menu' />
            </label>
          </div>
        </div>
        <div
          className={`md:flex-1 justify-end absolute md:flex  md:items-center top-0 right-0 ${
            isActive ? 'right-0' : '-right-full'
          } bg-vWhite bottom-0 w-[65%] md:w-[90%] px-5 md:static text-md text-vGRay transition-all ease-in-out duration-700`}
        >
          <div
            onClick={() => setIsActive(false)}
            className={`md:hidden cursor-pointer transition-all delay-200 fixed right-7 top-5 ${
              !isActive ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
          >
            <img src={CloseMenu} alt='close menu' />
          </div>
          <div className='mt-20 md:mt-0 md:flex bg-vWhite  md:w-full md:justify-between md:gap-2  gap-5'>
            <ul className='grid gap-4 md:flex md:items-center'>
              <li className='relative'>
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
                  className={`md:absolute md:ml-0 md:top-12  md:p-5 md:w-40 md:shadow-lg md:rounded-[15px] right-0  transition-all bg-vWhite ease-in-out duration-500 overflow-hidden ml-5  flex flex-col gap-3 ${
                    idActive === 1 ? 'opacity-1 pt-2' : 'opacity-0 scale-0 h-0'
                  }`}
                >
                  <li className='flex items-center gap-2 '>
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
              <li className='relative'>
                <div className='flex items-center'>
                  <p>Company</p>
                  <div
                    onClick={() => handleIdActive(2)}
                    className={` transition-transform duration-500 ml-4 cursor-pointer ${
                      idActive === 2 ? 'rotate-180' : ''
                    }`}
                  >
                    <img src={down} alt='arrow' />
                  </div>
                </div>
                <ul
                  className={`md:ml-0 md:top-12  md:p-5 md:w-32 md:right-0 md:shadow-lg md:rounded-[15px] md:absolute bg-vWhite overflow-hidden transition-all ease-in-out duration-500  ml-5 flex flex-col gap-3 ${
                    idActive === 2 ? 'opacity-1 pt-2' : 'opacity-0 scale-0 h-0'
                  } `}
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
            <div className='flex flex-col md:flex-row md:items-center md:mt-0 mt-7 text-center gap-4'>
              <div>
                <p>Login</p>
              </div>
              <div className='border-2 border-vGRay rounded-[15px] py-2 md:px-2'>
                <p>Register</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar

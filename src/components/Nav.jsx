import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DateTime from './DateTime'

const Nav = () => {
  return (
    <header className='bg-[#000408] h-[60]'>
      <nav className='flex items-center justify-between '>
        <div className='flex justify-center items-center p-2 lg:m-0 md:m-0 sm:m-2'>
          <Link
            className='lg:flex md:flex hidden lg:m-auto md:m-auto justify-center items-center text-2xl font-palanquin text-white ml-5 '
            to='/'
          >
            <FaPaw className='text-blue-500 text-6xl mr-5' />
            Softwares
          </Link>
        </div>
        <ul className='flex flex-row justify-center m-auto w-full lg:gap-64 md:gap-16 sm:gap-4 absolute'>
          <li className='p-4'>
            <Link
              to='/programs'
              className='text-blue-400 lg:text-3xl sm:text-2xl font-palanquin hover:text-blue-500 cursor-pointer'
            >
              APPS
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='/codes'
              className='text-blue-400 lg:text-3xl sm:text-xl font-palanquin hover:text-blue-500 cursor-pointer'
            >
              CODES
            </Link>
          </li>
        </ul>
        <DateTime />
      </nav>
    </header>
  )
}
export default Nav

import { FaPaw } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='bg-[#000408]'>
      <nav className='flex items-center justify-center  md:lg:justify-between h-max'>
        <div className='hidden md:lg:flex justify-center items-center p-4'>
          <Link
            className='lg:flex md:flex hidden lg:m-auto md:m-auto justify-center items-center text-2xl font-palanquin text-white ml-5'
            to='/'
          >
            <FaPaw className='text-blue-500 text-6xl mr-5' />
            Softwares
          </Link>
        </div>
        <ul className='flex sm:lg:text-3xl text-2xl m-4 gap-16 justify-center md:lg:justify-end w-full lg:gap-64 sm:md:gap-16'>
          <li className='p-4'>
            <Link
              to='/programs'
              className='text-blue-400 font-palanquin hover:text-blue-500 cursor-pointer'
            >
              APPS
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='/codes'
              className='text-blue-400 font-palanquin hover:text-blue-500 cursor-pointer'
            >
              CODES
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav

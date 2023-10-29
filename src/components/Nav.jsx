import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header className='p-2 bg-gray-700 h-[80]'>
      <nav className='flex items-center justify-between'>
        <div className='flex justify-center items-center p-2'>
          <Link className='flex justify-center items-center text-2xl font-palanquin text-white ml-5' to='/'>
            <img
              src='./icon.png'
              alt="cat'load"
              width={60}
              height={60}
              className='mr-5'
            />
            Softwares
          </Link>
        </div>
        <ul className='flex flex-row justify-center m-auto w-full lg:gap-64 md:gap-16 sm:gap-4'>
          <li className='p-4'>
            <Link
              to='/programs'
              className='text-blue-400 lg:text-3xl sm:text-xl font-palanquin hover:text-blue-500 cursor-pointer'
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
      </nav>
    </header>
  )
}
export default Nav

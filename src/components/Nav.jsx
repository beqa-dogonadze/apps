import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header className='p-2 bg-gray-800'>
      <nav className='flex items-center justify-between'>
        <div>
          <Link className='text-4xl font-mono text-white'>FreeAPP</Link>
        </div>
        <ul className='flex flex-row justify-center m-auto w-full lg:gap-64 md:gap-16 sm:gap-4'>
          <li className='p-4'>
            <Link
              to='/programs'
              className='text-blue-400 lg:text-3xl sm:text-xl font-sarif'
            >
              APPS
            </Link>
          </li>
          <li className='p-4'>
            <Link
              to='/codes'
              className='text-blue-400 lg:text-3xl sm:text-xl font-sarif'
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

import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <header className='p-2 bg-gray-700'>
      <nav className='flex items-center justify-between'>
        <div>
          <Link className='text-4xl font-mono text-white decoration-stone-700  text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-400' to='/'>
            FreeAPP
          </Link>
        </div>
        <ul className='flex flex-row justify-between m-auto'>
          <li className='p-4'>
            <Link to='/programs' className='text-red-400 text-2xl  font-sarif'>APPS</Link>
          </li>
          <li className='p-4'>
            <Link to='/codes' className='text-red-400 text-2xl  font-sarif'>CODES</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav

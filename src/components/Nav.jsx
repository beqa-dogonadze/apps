import NavItem from './NavItem'

const Nav = () => {
  return (
    <header className='flex justify-center h-[110px] bg-gray-200  z-10 w-full border-2 border-b-stone-300'>
      <nav className='flex justify-between items-center w-full '>
        <div>
          <a
            href='/'
            className='text-5xl font-mono decoration-stone-700'
          >
            FreeAPP
          </a>
        </div>
        <div className='flex flex-row '>
          <ul  className='flex flex-row'>
            <NavItem text='APPS' />
            <NavItem text='CODES' />
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Nav

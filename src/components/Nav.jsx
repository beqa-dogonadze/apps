import NavItem from './NavItem'

const Nav = () => {
  return (
    <header className='flex justify-center h-[110px] bg-gray-200  z-10 w-full border-2 border-b-stone-300'>
      <nav className='flex justify-around items-center w-full '>
        <a href='/'>
          <img
            className='absolute mt-[-50px] left-0'
            alt='logo'
            src='https://1000logos.net/wp-content/uploads/2020/08/App-Store-Logo.png'
            width={150}
          />
        </a>
        <ul className='flex flex-row w-[20%]'>
          <NavItem text='APPS' />
          <NavItem text='CODES' />
        </ul>
      </nav>
    </header>
  )
}
export default Nav

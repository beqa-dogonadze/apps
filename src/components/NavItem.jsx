const NavItem = ({ text }) => {
  return (
    <li className='py-4 mx-24 flex justify-center'>
      <a href='/' className='text-xl md:text-4xl font-mono text-red-600 '>
        {text}
      </a>
    </li>
  )
}
export default NavItem

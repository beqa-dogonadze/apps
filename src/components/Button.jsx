const Button = ({ appURL }) => {
  return (
    <button className='bg-gradient-to-t from-gray-200 to-gray-300 rounded-2xl z-1shadow-xl lg:w-[140px] w-[100px] h-[70px] mt-5'>
      <a
        className="text-gray-600 lg:text-2xl md:md font-serif	font-family: 'cascadia code'"
        href={appURL}
        target='blank'
      >
        Download
      </a>
    </button>
  )
}
export default Button

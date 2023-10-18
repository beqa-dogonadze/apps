const Button = ({ appURL }) => {
  return (
    <button className='bg-white rounded-2xl border-blue-600  shadow-gray-400 shadow-xl w-[140px] h-[40px] mt-5 '>
      <a
        className="text-orange-700 text-2xl font-serif	font-family: 'cascadia code'"
        href={appURL}
        target='blank'
      >
        Download
      </a>
    </button>
  )
}
export default Button

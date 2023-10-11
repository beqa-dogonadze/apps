const Button = ({ appURL }) => {
  return (
    <button className=' rounded-2xl border-blue-600  shadow-gray-300 shadow-xl w-[170px] h-[50px] mt-5'>
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

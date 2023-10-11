import programs from '../data'

const Button = () => {
  return (
    <button className=' rounded-2xl border-blue-600  shadow-gray-300 shadow-xl w-[170px] h-[50px] mt-5'>
      <a
        className="text-orange-700 text-2xl font-serif	font-family: 'cascadia code'"
        href={programs.url}
      >
        Download
      </a>
    </button>
  )
}
export default Button

const Button = ({ appURL }) => {
  return (
    <form action={appURL} target='_blank'>
      <input
        type='submit'
        value='Download'
        className='border-2 border-gray-700 rounded-2xl z-1shadow-xl lg:w-[140px] w-[100px] h-[70px] mt-5 text-xl text-blue-400 hover:text-blue-600 hover:text-2xl font-palanquin cursor-pointer'
      />
    </form>
  )
}
export default Button

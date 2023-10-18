const Footer = () => {
  return (
    <footer className='bg-gray-800 w-full items-center abosolute bottom-0 h-[80px] flex justify-around'>
      <div className='flex flex-2 justify-center p-2 w-[70%]'>
        <h1 className='text-white text-xl'>
          <a href='https://github.com/beqa-dogonadze' target='blank'>
            Github
          </a>
        </h1>
        <h1 className='text-white text-xl'>
          <a href='/' target='blank'>
            Facebook
          </a>
        </h1>
      </div>
      <h1 className='italic text-red-500 text-xl justify-end flex'>2023</h1>
    </footer>
  )
}
export default Footer

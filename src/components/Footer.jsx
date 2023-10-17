const Footer = () => {
  return (
    <footer className='bg-gray-800 w-full items-center fixed bottom-0 p-2'>
      <div className='flex '>
        <h1 className='text-white'>
          <a href='https://github.com/beqa-dogonadze' target='blank'>
            Github
          </a>
        </h1>
        <h1 className='text-white'>
          <a href='/' target='blank'>
            Facebook
          </a>
        </h1>
      </div>
      <h1 className='italic text-red-500 text-xl'>2023</h1>
    </footer>
  )
}
export default Footer

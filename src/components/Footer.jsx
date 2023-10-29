const Footer = () => {
  return (
    <footer className='bg-gray-700 w-full items-center abosolute bottom-0 h-[60px] flex justify-around'>
      <div className='flex  justify-around w-[70%]'>
        <h1 className='text-white text-xl'>
          <a href='https://github.com/beqa-dogonadze' target='blank'>
            Github
          </a>
        </h1>
        <h1 className='text-white text-xl'>
          <a
            href='https://www.facebook.com/profile.php?id=100090537693513'
            target='blank'
          >
            Facebook
          </a>
        </h1>
      </div>
      <h1 className='italic text-gray-400 text-xl justify-end flex'>© 2023 Faster-Dev All rights reserved</h1>
    </footer>
  )
}
export default Footer

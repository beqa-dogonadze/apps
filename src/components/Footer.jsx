import { FaFacebook, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='bg-[#000408] w-full items-center m-auto border-t border-gray-700 bottom-0 h-[70px] flex justify-between p-5'>
      <div className='flex flex-col justify-around w-auto'>
        <div className='flex gap-8'>
          <h1 className='text-white text-xl'>
            <a href='https://github.com/beqa-dogonadze' target='blank'>
              <FaGithub className='text-4xl' />
            </a>
          </h1>
          <h1 className='text-white text-xl'>
            <a
              href='https://www.facebook.com/profile.php?id=100090537693513'
              target='blank'
            >
              <FaFacebook className='text-4xl' />
            </a>
          </h1>
          <h1 className='text-white text-xl'>
            <a
              href='https://www.facebook.com/profile.php?id=100090537693513'
              target='blank'
            >
              <SiGmail className='text-4xl' />
            </a>
          </h1>
        </div>
      </div>
      <h1 className='italic text-gray-400 text-xl justify-end flex'>
        © 2023 Faster-Dev All rights reserved
      </h1>
    </footer>
  )
}
export default Footer

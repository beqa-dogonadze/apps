import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-[#000408] w-full items-center border-t fixed bottom-0 border-gray-700 h-[50px] flex justify-center md:lg:justify-between p-4'>
      <div className='flex flex-col justify-around w-auto'>
        <div className='flex gap-12'>
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
              href='https://www.linkedin.com/in/beqa-dogonadze/'
              target='blank'
            >
              <FaLinkedin className='text-4xl' />
            </a>
          </h1>
        </div>
      </div>
      <h1 className='italic text-gray-400 font-light text-xl justify-end hidden md:lg:flex'>
        © 2023 Beqa D. All rights reserved
      </h1>
    </footer>
  )
}
export default Footer

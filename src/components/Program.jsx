import { programs } from '../data'
import Button from './Button'
const Program = () => {
  return (
    //yvela programis saerto konteineri
    <div className='flex flex-col items-center text-center w-ful gap-10'>
      {programs.map((item) => (
        //titoeuli programis konteineri
        <div
          key={item.app}
          className='flex flex-col border-2 border-gray-800 text-center justify-center items-center rounded-2xl p-3 w-[350px] md:w-[480px] lg:w-[600px]'
        >
          <h1 className='text-2xl text-blue-400 font-semibold font-montserrat'>
            {item.app}
          </h1>
          <img src={item.imgURL} width={80} className='m-5' alt={item.app} />
          <p className='text-gray-200 text-ellipsis font-montserrat lg:text-lg md:text-md'>
            {item.desc}
          </p>
          <Button appURL={item.url} />
        </div>
      ))}
    </div>
  )
}
export default Program

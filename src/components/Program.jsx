import { programs } from '../data'
import Button from './Button'
const Program = () => {
  return (
    //yvela programis saerto konteineri
    <div className='flex flex-col h-[100vh] m-2 w-auto'>
      {programs.map((item) => (
        //titoeuli programis konteineri
        <div
          key={item.app}
          className='flex flex-col bg-slate-200 justify-center items-center p-5 shadow-gray-400 shadow-lg m-auto w-[60%]'
        >
          <h1 className='text-2xl text-gray-800'>{item.app}</h1>
          <img src={item.imgURL} width={80} className='m-5' alt={item.app} />
          <p className='text-gray-500 text-ellipsis lg:text-lg md:text-md'>
            {item.desc}
          </p>
          <Button appURL={item.url} />
        </div>
      ))}
    </div>
  )
}
export default Program

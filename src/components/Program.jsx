import { programs } from '../data'
import Button from './Button'
const Program = () => {
  return (
    <div className='flex flex-col h-[100vh] m-2 w-auto'>
      {programs.map((item) => (
        <div
          key={item.app}
          className='flex flex-col  justify-center border-blue-800 items-center p-5 shadow-blue-800 shadow-xl m-auto w-[65%] border-t border-b'
        >
          <h1 className='text-2xl text-gray-400'>{item.app}</h1>
          <img src={item.imgURL} width={80} className='m-5' alt={item.app} />
          <p className='text-blue-500 text-ellipsis text-lg'>{item.desc}</p>
          <Button appURL={item.url} />
        </div>
      ))}
    </div>
  )
}
export default Program

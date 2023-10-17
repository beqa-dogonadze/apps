import programs from '../data'
import Button from './Button'
const Program = () => {
  return (
    <div className='flex flex-col  m-2 w-auto'>
      {programs.map((item) => (
        <div
          key={item.app}
          className='flex flex-col justify-center border-slate-200 items-center p-5 border rounded-2xl  shadow-gray-800 shadow-xl m-auto mt-6 w-[65%]'
        >
          <h1 className='text-2xl text-blue-500'>{item.app}</h1>
          <img
            src={item.imgURL}
            width={80}
            className='m-5'
            alt={item.app}
          />
          <p className='text-gray-50 text-ellipsis'>{item.desc}</p>
          <Button appURL={item.url} />
        </div>
      ))}
    </div>
  )
}
export default Program

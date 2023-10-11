import programs from '../data'
import Button from './Button'
const Program = () => {
  return (
    <div className='flex flex-col justify-center items-center m-auto w-[600px] border-x-amber-800'>
      {programs.map((item) => (
        <div
          key={item.app}
          className=' border-y-red-700 flex flex-col justify-center border-slate-200 items-center p-5 border rounded-2xl  shadow-gray-300 shadow-xl  m-7'
        >
          <h1 className='text-4xl text-blue-500'>{item.app}</h1>
          <img src={item.imgURL} width={200} height={100} className='m-5' alt={item.app} />
          <p className='break'>{item.desc}</p>
          <Button appURL={item.url} />
        </div>
        
      ))}

    </div>
  )
}
export default Program

import programs from '../data'
import Button from './Button'
const Program = () => {
  return (
    <div className='flex flex-col items-center  5 w-full'>
      {programs.map((item) => (
        <div
          key={item.app}
          className='flex flex-col justify-center border-slate-200 items-center p-5 border rounded-2xl  shadow-gray-300 shadow-xl  m-7'
        >
          <h1 className='text-4xl text-blue-500'>{item.app}</h1>
          <img src={item.imgURL} className='m-5' alt={item.app} />
          <p>{item.desc}</p>
          <Button />
        </div>
        
      ))}

    </div>
  )
}
export default Program

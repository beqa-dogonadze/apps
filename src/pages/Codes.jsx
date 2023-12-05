import WindowsAct from "../components/activation-codes/WindowsAct"


const Codes = () => {
  return (
    <div className='flex flex-col items-center text-center w-ful gap-10 mt-5'>
      <div className='flex flex-col border-2 border-gray-800 text-center justify-center items-center rounded-2xl p-3 w-[350px] md:w-[480px] lg:w-[600px]'>
        <WindowsAct/>
      </div>
    </div>
  )
}
export default Codes

const OfficeAct = ({ year, link }) => {
  return (
    <div className='pr-12 pl-12 mt-5 mb-5 border-2 border-gray-800 text-center justify-center items-center rounded-2xl p-3 w-[350px] md:w-[480px] lg:w-[600px]'>
      <h1 className='text-blue-400 text-3xl pb-2 border-b border-red-500'>
        Office {year} Activation
      </h1>
      <div className='text-white p-2 line-3 flex flex-col text-start text-xl gap-4'>
        <h1 className='text-blue-300 hover:underline'>
          <a target='blank' href={link}>
            Go to link and Copy code
          </a>
        </h1>
        <h1>Dissable antivirus</h1>
        <h1>Open notepad or any text editor and paste copied text</h1>
        <h1>
          Save as <span className='text-red-400'>activator.bat</span> and Run
          file<span className='text-red-400'> as administrator</span>
        </h1>
      </div>
    </div>
  )
}
export default OfficeAct

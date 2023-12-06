import CopyTextButton from '../CopyTextButton'
const WindowsAct = () => {
  return (
    <div className='pr-12 pl-12 mt-5 border-2 border-gray-800 text-center justify-center items-center rounded-2xl p-3 w-[350px] md:w-[480px] lg:w-[600px]'>
      <h1 className='text-blue-400 text-3xl pb-2 border-b border-red-500'>
        Windows 10 Pro Activation
      </h1>
      <div className='text-white p-2 line-3 flex flex-col text-start text-xl gap-4'>
        <h1 className='text-red-600'>Run CMD as administrator!</h1>
        <h1>
          <button>
            <CopyTextButton
              textToCopy={'slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX'}
            />
          </button>
        </h1>
        <h1>
          <button>
            <CopyTextButton textToCopy={'slmgr /skms kms8.msguides.com'} />
          </button>
        </h1>
        <h1>
          <button>
            <CopyTextButton textToCopy={'slmgr /ato'} />
          </button>
        </h1>
      </div>
    </div>
  )
}
export default WindowsAct

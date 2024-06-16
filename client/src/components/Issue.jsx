
const Issue = ({issue}) => {
  return (
    <div className='flex flex-col w-full py-2 px-3 shadow-lg text-lg font-semibold border-2 border-slate-500 rounded-lg'>
        <h2 className="hover:text-blue-500 cursor-pointer">{issue.title}</h2>
        <h3 className=" text-[15px] font-normal">{issue.description}</h3>
        <p className="text-sm">Issue #{issue.id}</p>
        <div className="space-x-2">
            <button>Delete</button>
            <button>Update</button>
        </div>
        
    </div>
  )
}

export default Issue
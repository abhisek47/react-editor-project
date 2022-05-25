import React from 'react'

const ActionBar = () => {
  return (
    <div className='p-2 border-t border-gray-300 relative bottom-0 right-0'>
      <div className='flex items-center justify-center gap-2'>
        <button className='bg-orange-500 w-full text-gray-100 py-2 px-8 rounded-lg text-md'>
          Schedule
        </button>
        <button className='bg-sky-500 text-gray-100 w-full py-2 px-8 rounded-lg text-md'>
          Tweet
        </button>
      </div>
    </div>
  )
}

export default ActionBar

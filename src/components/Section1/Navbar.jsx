import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-50 flex items-center justify-between py-8 px-18'>
      <h4 className='bg-black text-white px-6 py-2 uppercase rounded-full'>
        Target Audience
      </h4>

      <button className='flex items-center gap-2 text-slate-900 px-6 py-2 uppercase rounded-full tracking-widest text-sm border border-slate-300'>
        <i className="ri-bank-line text-lg text-blue-600"></i>
        <span>Digital Banking Platform</span>
      </button>
    </div>
  )
}

export default Navbar
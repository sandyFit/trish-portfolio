import React from 'react'

import BottomNav from './BottomNav';

const Navbar = () => {
    return (
        <div className="relative w-full">
            
            
            <nav className='flex justify-between items-center w-full h-[80px] absolute top-0 bg-zinc-300
                border-2 border-zinc-900 hover:text-zinc-900 '>               
                <p className="text-zinc-900 text-[4rem] font-syne font-bold ml-6"></p>

                {/* <p className='text-xl uppercase text-zinc-500 font-syne'>Available for work</p> */}

                  <div className="relative w-7/12">
                        <BottomNav/>
                    </div>
                    
                
            </nav>
        </div>
    )
}

export default Navbar
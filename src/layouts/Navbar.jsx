import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (                      
        <nav className='flex justify-between items-center w-full h-[80px] fixed top-0 left-0 bg-zinc-300 z-20 
            border-t-2 border-b-2 border-zinc-900 hover:text-zinc-900 '>               
            <p className='text-zinc-900 font-syne text-lg font-semibold uppercase ml-28'>
                trish ramos' portfolio
            </p>
            <div className="relative w-[47.5%]">
                <div className='flex justify-center items-center'>           
                    <ul className='w-full flex justify-between items-center bg-zinc-300'> 
                        {['about', 'services', 'projects', 'playground', 'cv'].map((item, index) => (
                            <li className='text-zinc-900 font-syne text-lg font-semibold hover:text-orangey-400
                            cursor-pointer py-2 uppercase' key={index}>
                                <ScrollLink to={item} smooth={true} duration={500}>
                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </ScrollLink>
                            </li>
                        ))}

                        <li className='text-zinc-300 font-syne text-lg font-semibold bg-00 bg-zinc-900 
                            hover:bg-skyIce-300 hover:text-zinc-900 cursor-pointer px-16 py-6 uppercase
                            border-r-2 border-l-2 border-zinc-900'>
                            <ScrollLink to='contact' smooth={true} duration={500}>
                                Let's Talk
                            </ScrollLink>
                        </li>
                    </ul>          
                </div>
            </div>                                  
        </nav>
        
    )
}

export default Navbar;


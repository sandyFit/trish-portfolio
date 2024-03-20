import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
    return (                      
        <nav className='flex justify-between items-center w-full h-[80px] fixed top-0 left-0 bg-zinc-300 z-20 
            border-t-2 border-b-2 border-zinc-900 hover:text-zinc-900 '>               
            <p className='text-zinc-900 font-syne text-lg font-semibold uppercase ml-28'>
                <ScrollLink to="hero" >trish ramos</ScrollLink>
            </p>
            <div className="relative w-[47.5%]">
                <div className='flex justify-center items-center'>           
                    <ul className='w-full flex justify-between items-center bg-zinc-300'> 
                        {['about', 'services', 'projects', 'playground', 'cv'].map((item, index) => (
                            <li className='text-zinc-900 font-syne text-lg font-semibold hover:text-zinc-300 px-3 py-2 
                                cursor-pointer rounded uppercase flipOnHover'
                                key={index}
                                style={{transition: 'color .3s ease-in-out, box-shadow .3s ease-in-out'}}
                            >
                                <ScrollLink to={item} smooth={true} duration={500} offset={item === 'about' ? -78 : 0}>
                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </ScrollLink>
                            </li>
                        ))}

                        <ScrollLink to='contact' smooth={true} duration={500}>
                            <button class="group relative inline-flex items-center justify-center overflow-hidden  
                            bg-zinc-900 font-syne text-lg font-semibold text-zinc-300 px-16 py-6 uppercase
                                border-r-2 border-l-2 border-zinc-900 duration-500">
                                <div class="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] 
                                    group-hover:opacity-0">
                                    
                                        Let's Talk
                                    
                                </div>
                                <div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 
                                group-hover:opacity-100">
                                    <BsArrowRight style={{fontSize: '2.5rem', fontWeight: '100'}}/>
                                </div>
                            </button>
                        </ScrollLink>
                    </ul>          
                </div>
            </div>                                  
        </nav>
        
    )
}

export default Navbar;


import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const BottomNav = () => {
    return (
        <nav className='w-full h-[80px] flex justify-center items-center z-30 pl-6 '>           
            <ul className='w-full flex justify-between items-center bg-zinc-300 pl-20'> 
                {['about', 'services', 'projects', 'playground', 'cv'].map((item, index) => (
                    <li className='text-zinc-900 font-syne text-lg font-semibold hover:text-orangey-400
                    cursor-pointer py-2 uppercase' key={index}>
                        <ScrollLink to={item} smooth={true} duration={500}>
                            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                        </ScrollLink>
                    </li>
                ))}

                <li className='text-zinc-300 font-syne text-lg font-semibold bg-zinc-900 hover:bg-zinc-300 
                    hover:text-zinc-900 cursor-pointer px-16 py-6 uppercase'>
                        <ScrollLink to='contact' smooth={true} duration={500}>
                            Let's Talk
                        </ScrollLink>
                    </li>
            </ul>
            
        </nav>
    );
}

export default BottomNav;


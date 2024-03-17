import React from 'react';
import { FaCopyright, FaHeart } from 'react-icons/fa';


const Footer = () => {

    const date = new Date();

    return (
        <section name='contact' className='w-[calc(100vw - 80px)] min-h-[calc[100vh - 80px]] bg-zinc-300 
            grid grids-col-2'>
            <article className='w-full h-[60px] grid grid-cols-3 border-b-2 border-zinc-900 ml-[82px] 
                text-center overflow-hidden text-zinc-900 font-syne text-lg font-semibold uppercase'>
                <p className=' border-r-2 border-zinc-900'>Web design</p>
                <p className=' border-r-2 border-zinc-900'>Web development</p>
                <p className=''>Motion design</p>
            </article>

            <article className="flex h-full">
                <div className="bg-zinc-900 w-[52%]  py-16 pl-36 border-r-2 border-zinc-300">
                    <p className=' text-zinc-300 font-sora text-[5rem] font-[600] tracking-wider leading-[90px] uppercase'>
                        Let's make
                        <span className='text-orangey-400 mx-2'>cool</span>
                        stuff together
                    </p>
                    
                </div>
                <div className="bg-zinc-900 w-[48%] flex flex-col justify-end items-end px-16 pb-20 pt-16 ">   
                    <div className="w-full flex text-xl font-medium uppercase text-zinc-300 mt-20
                        relative bottom-48 ">
                            <FaCopyright style={{marginTop: '.1rem', fontSize: '1.8rem'}}/>
                            {`${date.getFullYear()}  |   Crafted with`}
                            <FaHeart style={{ color: 'red', margin: '3px 4px 0 4px', opacity: '.7' }} />
                            {'by yours truly'}
                        </div>    
                    <p className='font-syne text-xl text-zinc-300 font-[500] uppercase'>
                        Whether you have a question, want to work together, or just say hello, please drop me a line.
                    </p>
                </div>
            </article>

            <article className='w-full bg-zinc-900 border-2 border-zinc-300'>
                <a href="mailto:sandy07r@gmail.com">
                    <p className='text-[10.5rem] pt-36 pb-6 pl-36 text-zinc-300'>
                        hello@trishramos.com       
                    </p>            
                </a>

            </article>

        </section>
    )
}

export default Footer;


import React from 'react';
import { FaCopyright, FaHeart } from 'react-icons/fa';
import { ImSmile2 } from 'react-icons/im';


const Footer = () => {

    const date = new Date();

    return (
        <section name='contact' className='w-full min-h-screen pt-[80px] bg-zinc-300 
            grid grids-col-2'>
            <article id='contact' className='w-[calc(100vw - 90px)] h-[60px] grid grid-cols-3 border-b-2 
                border-zinc-900 ml-[80px] text-center text-zinc-900 font-syne text-lg
                font-semibold uppercase'>
                <p className='pt-4 border-r-2 border-zinc-900'>Web design</p>
                <p className='pt-4 border-r-2 border-zinc-900'>Web development</p>
                <p className='pt-4'>Motion design</p>
            </article>

            <article className="flex h-full">
                <div className="bg-zinc-900 w-[52%] py-[5em] pl-36 border-r-2 border-zinc-300">
                    
                    <h1 className='footer-title text-zinc-300 '>
                        let's build  
                    </h1>
                    <h2 className='footer-title text-orangey-400'>cool stuff</h2> 
                    <h2 className='footer-title text-zinc-300'>together!</h2>
                               
                    
                </div>
                <div className="bg-zinc-900 w-[48%] flex flex-col justify-between items-center px-16 p-16 ">   
                    <ImSmile2 style={{color: '#fb4b4e', fontSize: '8rem'}}/>
                    <p className='font-syne text-xl text-zinc-300 font-[500] uppercase'>
                        Whether you have a question, want to work together, or just say hello, please drop me a line.
                    </p>
                </div>
            </article>

            <article className='w-full flex flex-col bg-zinc-900 border-2 border-zinc-300'>
                <div className="w-full flex text-xl font-medium uppercase text-zinc-300 pt-8
                    pl-[48rem]">
                    <FaCopyright style={{marginTop: '.1rem', fontSize: '1.8rem'}}/>
                    {`${date.getFullYear()}  |   Crafted with`}
                    <FaHeart style={{ color: 'red', margin: '3px 4px 0 4px', opacity: '.7' }} />
                    {'by yours truly'}
                </div> 

                <a href="mailto:sandy07r@gmail.com">
                    <p className='text-[10.5rem] pt-[.125em] pb-4 pl-36 text-zinc-300'>
                        hello
                        <span className='text-orangey-400'>@</span>
                        trishramos.com
                    </p>            
                </a>

            </article>

        </section>
    )
}

export default Footer;


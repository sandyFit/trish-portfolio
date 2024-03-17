import React from 'react';
import { FaCopyright, FaHeart } from 'react-icons/fa';
import { ImSmile2 } from 'react-icons/im';


const Footer = () => {

    const date = new Date();

    return (
        <section id='contact' className='w-full min-h-screen pt-[80px] bg-zinc-300 
            grid grids-col-2'>
            <article  className='w-[calc(100vw - 90px)] h-[60px] grid grid-cols-3 border-b-2 
                border-zinc-900 ml-[80px] text-center text-zinc-900 font-syne text-lg
                font-semibold uppercase'>
                <p className='pt-4 border-r-2 border-zinc-900'>Web design</p>
                <p className='pt-4 border-r-2 border-zinc-900'>Web development</p>
                <p className='pt-4 border-r-2 border-zinc-900'>Motion design</p>
            </article>

            <article className="flex h-full">
                <div className="bg-zinc-900 w-[52%] py-[6em] border-r-2 border-zinc-300
                    text-left flex flex-col items-center ml-12">
                    
                    <h1 className='footer-title text-zinc-300 '>
                        let's build  
                    </h1>
                    <h2 className='footer-title text-orangey-400'>cool things</h2> 
                    <h2 className='footer-title text-zinc-300'>together!</h2>                   
                </div>

                <div className="bg-zinc-900 w-[48%] flex flex-col justify-between items-center px-24 py-24 ">   
                    <ImSmile2 style={{color: '#fb4b4e', fontSize: '8rem'}}/>
                    <p className='font-syne text-xl text-zinc-300 font-[500] uppercase'>
                        Whether you have a question, want to work together, or just say hello, please drop me a line.
                    </p>
                </div>
            </article>

            <article className='w-full flex flex-col bg-zinc-900 border-t-2 border-zinc-300'>                             
                <p className='text-[8rem] pt-[.54em] text-center pb-4 pl-24 text-zinc-300'>
                    <a href="mailto:sandy07r@gmail.com" >hello
                    <span className='text-orangey-400'>@</span>
                    trishramos.com</a>
                </p>            

                 <div className="w-full flex  font-normal uppercase text-zinc-500 pb-4
                    pl-[49rem] tracking-wide">
                    <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                    {`${date.getFullYear()}. Trish ramos |   Crafted with`}
                    <FaHeart style={{ color: 'red', margin: '5px 5px 0 5px', opacity: '.6' }} />
                    {'by yours truly'}
                </div> 


            </article>

        </section>
    )
}

export default Footer;


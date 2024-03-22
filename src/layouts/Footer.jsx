import React from 'react';
import { GoArrowDownRight } from "react-icons/go";
import { FaCopyright, FaHeart } from 'react-icons/fa';
import { ImSmile2 } from 'react-icons/im';



const Footer = () => {

    const date = new Date();

    return (
        <section id='contact' className='w-full h-[calc(100vh-77px)] bg-green-400 border-2 border-t-0 border-zinc-900'>

            <article className='w-[calc(100vw - 90px)] h-[60px] grid grid-cols-3 border-b-2 bg-zinc-300 cursor-pointer
                border-zinc-900 ml-[78px] text-center text-zinc-900 font-sora text-[1.2rem] tracking-wide font-[400]'>
                <p className='pt-4 border-r-2 border-zinc-900 '>Web Design</p>
                <p className='pt-4 border-r-2 border-zinc-900 '>Web Development</p>
                <p className='pt-4 '>Motion Design</p>
            </article>

            <article className='flex flex-col w-[calc(100vw - 90px)] h-[calc(100vh-140px)] ml-[80px] '>
                
                <div className="flex w-full h-full">
                    <div className="w-[48.2%] border-r-2 border-zinc-900 flex flex-col justify-between pt-24 pb-6 pr-12 ml-16">
                        <div className="flex flex-col ">
                            <h1 className='font-ibm text-[6rem] leading-[100px] text-zinc-900 font-[500]'>
                                Let's Build Cool Things Together!
                            </h1>
                                
                        </div>

                        <div className="flex flex-col items-start">
                            <p className='font-syne text-lg text-zinc-900 font-[500] uppercase'>
                                Whether you have a question, want to work together, or just say hello, please drop me a line.
                                <GoArrowDownRight style={{fontSize: '1.8rem', color: '#18181b', marginTop: '5px'}}/>
                            </p>

                            <p className='font-ibm text-3xl pt-[3.5rem] text-center pb-4 mt-[-3.2rem]'>
                                <a href="mailto:sandy07r@gmail.com"
                                    className='text-zinc-900 hover:text-zinc-700 hover:underline'
                                >
                                    hello@trishramos.com
                                </a>
                            </p>

            
                        </div>

                        <div className="w-full flex font-normal uppercase text-zinc-900 pb-2
                            tracking-wide">
                            <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                            {`${date.getFullYear()}. Trish ramos |   Crafted with`}
                            <FaHeart style={{ color: 'red', margin: '5px 8px 0 6px', opacity: '.6' }} />
                            {'by yours truly'}
                        </div> 
                    </div>

                    <div className="w-[51.8%] flex flex-col justify-between items-center p-20">
                        <div className="flex ">   
                            <ImSmile2 style={{color: '#d4d4d8', fontSize: '8rem'}}/>
                            
                        </div>

                        
                    </div>
                </div>                
                
            </article>
        </section>
    )
}

export default Footer;


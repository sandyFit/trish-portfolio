import React from 'react';
import { FaCopyright, FaHeart } from 'react-icons/fa';
import { ImSmile2 } from 'react-icons/im';


const Footer = () => {

    const date = new Date();

    return (
        <section id='contact' className='w-full h-[calc(100vh-77px)] bg-skyIce-300 border-2 border-t-0 border-zinc-900'>

            <article  className='w-[calc(100vw - 90px)] h-[60px] grid grid-cols-3 border-b-2 bg-zinc-300
                border-zinc-900 ml-[80px] text-center text-zinc-900 font-syne text-lg
                font-semibold uppercase'>
                <p className='pt-4 border-r-2 border-zinc-900'>Web design</p>
                <p className='pt-4 border-r-2 border-zinc-900'>Web development</p>
                <p className='pt-4 '>Motion design</p>
            </article>

            <article className='flex flex-col w-[calc(100vw - 90px)] h-[calc(100vh-140px)] ml-[80px] '>
                
                <div className="flex w-full h-full">
                    <div className="w-[53%] border-r-2 border-zinc-900  flex flex-col justify-between pt-36 pb-6 px-12">
                        <div className="flex flex-col ">
                            <h1 className='footer-title text-zinc-900 '>
                                let's build  
                            </h1>
                            <h2 className='footer-title text-zinc-300'>cool things</h2> 
                            <h2 className='footer-title text-zinc-900'>together!</h2>                   
                        </div>

                        

                    <div className="w-full flex font-normal uppercase text-zinc-900 pb-6
                        tracking-wide">
                        <FaCopyright style={{margin: '.25rem .5rem 0 0', fontSize: '1rem'}}/>
                        {`${date.getFullYear()}. Trish ramos |   Crafted with`}
                        <FaHeart style={{ color: 'red', margin: '5px 5px 0 5px', opacity: '.6' }} />
                        {'by yours truly'}
                    </div> 
                    </div>

                    <div className="w-[47%] flex flex-col justify-between items-center p-20">
                        <div className="flex ">   
                            <ImSmile2 style={{color: '#d4d4d8', fontSize: '8rem'}}/>
                            
                        </div>

                        <div className="flex flex-col ">
                            <p className='font-syne text-xl text-zinc-900 font-[500] uppercase'>
                                Whether you have a question, want to work together, or just say hello, please drop me a line.
                            </p>

                            <p className='text-4xl pt-[3.5rem] text-center pb-4 text-zinc-900'>
                                <a href="mailto:sandy07r@gmail.com" >hello
                                <span className='text-zinc-300'>@</span>
                                trishramos.com</a>
                            </p>            
                        </div>
                    </div>
                </div>

               
                   
                    
                
            </article>
        </section>
    )
}

export default Footer;


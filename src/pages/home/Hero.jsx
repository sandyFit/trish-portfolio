import React from 'react'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { ImSmile2 } from "react-icons/im";
import MotionText from '../../components/ui/MotionText';
import {CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';


const Hero = () => {

    return (
        <>
            <section id='hero' className='w-full min-h-screen bg-skyIce-300 grid grids-col-2 relative
                border-2 border-b-0 border-zinc-900'>
                
                <article className='absolute top-16 left-0 w-full'>
                    <MotionText
                        icon={<ImSmile2 style={{ margin: '3.6rem 4rem 0 0', fontSize: '5.8rem', color: '#d4d4d8'}} />}
                        text1={'Creative Developer'}                   
                    />
                </article>

                <article className="flex w-[calc(100vw - 90px)] mt-[16.8rem]">
                    <div className="w-[55%] flex flex-col items-start justify-end border-r-2 
                        border-zinc-900">
                        {/* Left Column Content */}
                        <div className="flex flex-col pb-60 ml-[15%]">
                            <div className="flex ">
                                <PiCaretDoubleRightBold style={{ margin: '6px 5px 0 0'}}/>
                                <p className='w-full font-syne text-xl uppercase text-zinc-900 font-[500]'>
                                    Hello, Trish here
                                </p>
                            </div>

                            <h1 className='hero-title text-zinc-900'>
                                Turning  
                            </h1>
                            <h2 className='hero-title text-zinc-300'>Bold Ideas</h2> 
                            <h2 className='hero-title'>into Digital</h2>
                            <h2 className='hero-title text-zinc-300 flex flex-col'>Experiences</h2>                                                   
                        </div>
                    </div> 

                    <div className="w-[45%] flex justify-end items-end px-16 pb-16">
                        {/* Right Column Content */}
                        <p className='w-full font-syne text-lg uppercase text-zinc-900 font-[500]'>                        
                            Thanks for visiting.
                            I'm a frontend developer & web designer based in Colombia.<br/>
                            I'm currently looking for full-time or freelance opportunities to challenge myself and
                            collaborate on fun digital projects.<br/>
                            Keen to enhance my portfolio.
                            
                            <Link to='contact' className=' hover:text-zinc-300 flex'>
                                Feel free to drop me a line <CgArrowTopRight style={{fontSize: '1.5rem'}}/>
                            </Link>
                            Cheers :)
                        </p>
                    </div>
                </article>
            </section>

        </>
    );
};

export default Hero;

import React from 'react'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { ImSmile } from "react-icons/im";
import MotionText from '../../components/ui/MotionText';
import {CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';


const Hero = () => {

    return (
        <>
            <section id='hero' className='w-full min-h-screen  grid grids-col-2 relative bg-yellow-300
                border-2 border-b-0 border-zinc-900'>
                
                <article className='absolute top-[4.9rem] left-0 w-full'>
                    <MotionText
                        icon={<ImSmile style={{ margin: '2rem 4rem 0 0', fontSize: '3.5rem', color: '#18181b'}} />}
                        text1={'Creative Developer'}                   
                    />
                </article>

                <article className="flex flex-col justify-end w-[calc(100vw - 90px)] border-t-2 border-zinc-900
                    ml-[9rem] pb-10 relative ">
                    <div className="w-full flex flex-col items-center pb-4">
                        {/* Left Column Content */}
                        <div className="flex flex-col ">                           
                            <div className="flex ">                              
                                <div className="flex ">
                                    <PiCaretDoubleRightBold style={{ marginTop: '10px'}}/>
                                    <p className='text-syne text-2xl font-[380] text-zinc-900 tracking-[.115rem] pb-1 ml-2'>   
                                        Hello, Trish here
                                    </p>
                                </div>                                
                            </div>
                            
                            <h1 className='w-full hero-title text-zinc-900 text-[7.6rem] uppercase'>
                                <span className='w-full font-sora text-zinc-900 text-[8rem] tracking-tight'>
                                    Turning 
                                </span> <br />
                                <span className='w-full hero-title font-[950] tracking-widest text-zinc-900 text-[8rem] '>
                                    Bold Ideas
                                </span>                           
                                <span className='w-full font-sora text-zinc-900 text-[8rem] tracking-tight ml-7'>
                                    into Digital
                                </span>
                                
                                <span className=' text-zinc-900 ml-8 font-[950] tracking-widest'>Experiences</span>  
                            </h1>  
                        </div>

                    </div> 

                    
                    <p className='text-syne text-2xl font-[380] text-zinc-900 tracking-[.085rem] pb-4 ml-2 mt-[-1rem]'>                       
                        Frontend Developer & Web Designer based in Colombia.                       
                        Seeking full-time or freelance opportunities in design and development.<br/>
                       
                        <Link to='contact' className=' hover:text-zinc-300 inline-flex'>
                            Feel free to drop me a line
                            <CgArrowTopRight style={{ fontSize: '1.5rem', fontWeight: '100', margin: '5px 0 0 -1px' }} />
                        </Link><br/>
                        Let's create! :)
                    </p>
                    
                </article>
                
            </section>

        </>
    );
};

export default Hero;

import React from 'react'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { ImSmile } from "react-icons/im";
import MotionText from '../../components/ui/MotionText';
import {CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';


const Hero = () => {

    return (
        <>
            <section id='hero' className='w-full min-h-screen bg-orangey-400 grid grids-col-2 relative'>
                <article className='absolute top-16 left-0 w-full'>
                    <MotionText
                        icon={<ImSmile style={{ margin: '3.6rem 4rem 0 0', fontSize: '5.8rem', color: '#d4d4d8'}} />}
                        text1={'Creative Developer'}                   
                    />
                </article>

                <article className="flex w-full mt-[16.8rem]">
                    <div className="w-[52%] flex flex-col items-start pt-40 pb-20 pl-40 border-r-2 border-zinc-900">
                        {/* Left Column Content */}
                        <div className="flex flex-col">
                            <div className="flex mb-3">
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

                    <div className="w-[48%] flex justify-end items-end px-16 pb-20">
                        {/* Right Column Content */}
                        <p className='w-full font-syne text-xl uppercase text-zinc-900 font-[500]'>                        
                            Thanks for visiting.
                            I'm a frontend developer & web designer based in Colombia.
                            I'm currently looking for opportunities to challenge myself within a creative agency or through freelance projects.
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

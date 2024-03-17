import React from 'react'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { ImSmile } from "react-icons/im";
import MotionText from '../../components/ui/MotionText';
import { AnimatePresence, motion } from 'framer-motion';
import {CgArrowLongDown, CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section name='hero' className='w-full min-h-screen flex flex-col bg-orangey-400 overflow-hidden'>
            {/* Wrapper to align items to the start */}
            <article className="w-full mt-16">
                <MotionText
                    icon={<ImSmile style={{ margin: '4rem 4rem 0 0', fontSize: '5rem'}} />}
                    text1={'Creative Developer'}                   
                />
            </article>

            <article className="flex w-full mt-36">
                <div className="w-7/12 flex flex-col items-start pl-40">
                    {/* Left Column Content */}             
                    <div className="flex flex-col">
                        <div className="flex text-zinc-900 text-opacity-60 text-2xl font-[400] ">
                            <PiCaretDoubleRightBold style={{ margin: '6px 5px 0 0'}}/>
                            <p className='mb-2 uppercase'>Hello, Trish here</p>
                        </div>
                        <AnimatePresence>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 5 }}
                                className='font-sora text-[6rem] font-[600] tracking-wider leading-[90px] uppercase text-zinc-900 '>
                                    I Turn   
                                    <span className='text-zinc-300 ml-6'>Bold Ideas</span> 
                                    <span className='mx-6'>into Digital</span>
                                    <span className='text-zinc-300 flex flex-col'>Experiences</span>                                 
                            </motion.h1>
                        </AnimatePresence>                         
                    </div>
                </div>

                <div className="flex flex-col items-center relative top-[25rem]">
                    <p className='text-zinc-900 font-syne uppercase'>scroll</p>
                    <CgArrowLongDown style={{fontSize: '3rem'}} />
                </div>
                <div className="w-4/12 flex justify-end items-end pl-72">
                    {/* Right Column Content */}
                    <p className='w-full font-syne text-xl uppercase text-zinc-300'>
                        Thanks for visiting.<br/>
                        I'm a frontend developer & web designer based in Colombia.<br />
                        Currently available for work.<br/>
                        <Link to='contact' className=' hover:text-zinc-300 flex'>
                            Feel free to drop me a line <CgArrowTopRight style={{fontSize: '1.5rem'}}/>
                        </Link>
                        Cheers :)
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Hero;

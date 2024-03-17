import React from 'react'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { ImSmile } from "react-icons/im";
import MotionText from '../../components/ui/MotionText';
import { AnimatePresence, motion } from 'framer-motion';
import {CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';

const Test = () => {
    return (
        <section className='w-[calc(100vw - 84px)] min-h-[calc[100vh - 80px]] bg-orangey-400 grid grids-col-2 border-2
            border-zinc-900'>
            <article className='w-full h-full before:content-[""] absolute top-16'>
                <MotionText
                    icon={<ImSmile style={{ margin: '4rem 4rem 0 0', fontSize: '5rem', color: '#d4d4d8'}} />}
                    text1={'Creative Developer'}                   
                />
            </article>

            <article className="flex w-full mt-[16.5rem]">
                <div className="w-[52%] flex flex-col items-start pt-40 pb-20 pl-40 border-r-2 border-zinc-900">
                    {/* Left Column Content */}             
                    <div className="flex flex-col">
                        <div className="flex mb-3">
                            <PiCaretDoubleRightBold style={{ margin: '6px 5px 0 0'}}/>
                            <p className='w-full font-syne text-xl uppercase text-zinc-900 font-[500]'>
                                Hello, Trish here
                            </p>
                        </div>
                        <AnimatePresence>
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 5 }}
                                className='font-sora text-[6rem] font-[600] tracking-wider leading-[90px] uppercase 
                                    text-zinc-900 '>
                                    I Turn   
                                    <span className='text-zinc-300 ml-6'>Bold Ideas</span> 
                                    <span className='mx-6'>into Digital</span>
                                    <span className='text-zinc-300 flex flex-col'>Experiences</span>                                 
                            </motion.h1>
                        </AnimatePresence>                         
                    </div>
                </div>

                
                <div className="w-[48%] flex justify-end items-end px-16 pb-20">
                    {/* Right Column Content */}
                    <p className='w-full font-syne text-xl uppercase text-zinc-900 font-[500]'>                        
                        Thanks for visiting.
                        I'm a frontend developer & web designer based in Colombia.
                        I'm currently looking for opportunities to challenge myself within a creative agency or through
                        freelance projects.
                        <Link to='contact' className=' hover:text-zinc-300 flex'>
                            Feel free to drop me a line <CgArrowTopRight style={{fontSize: '1.5rem'}}/>
                        </Link>
                        Cheers :)
                    </p>
                </div>
            </article>
        </section>
    )
}

export default Test
import React from 'react'
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import { ImSmile2 } from "react-icons/im";
import MotionText from '../../components/ui/MotionText';
import {CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';

const Test = () => {
  return (
         <>
            <section id='hero' className='w-full min-h-screen bg-skyIce-300 grid grids-col-2 relative
                border-2 border-b-0 border-zinc-900'>
                
                <article className='absolute top-[5rem] left-0 w-full'>
                    <MotionText
                        icon={<ImSmile2 style={{ margin: '2rem 4rem 0 0', fontSize: '3.5rem', color: '#d4d4d8'}} />}
                        text1={'Creative Developer'}                   
                    />
                </article>

                <article className="flex flex-col justify-end items-end w-[calc(100vw - 90px)] border-t-2 border-zinc-900
                    ml-[8rem] pb-10">
                    <div className="w-full flex flex-col items-center pb-4">
                        {/* Left Column Content */}
                        <div className="flex flex-col ]">
                            <div className="flex">
                                <PiCaretDoubleRightBold style={{ margin: '6px 5px 0 0'}}/>
                                <p className='w-full font-sora text-xl text-zinc-950 font-[300]'>
                                    Hello, Trish here
                                </p>
                            </div>

                          <h1 className='w-full font-ibm font-[500] tracking-tight leading-[140px] uppercase
                                text-zinc-900 text-[8rem] '>
                              Turning
                              <span className='text-zinc-300 ml-20'>bold ideas</span><br/>
                              <span className=''>into digital</span>
                              <span className='text-zinc-300 '> experiences</span><br/>
                             
                            </h1>  
                        </div>

                    </div> 

                    
                    <p className='w-full font-sora text-[1.2rem] text-zinc-950 font-[350] pl-2'>                        
                      I'm a Frontend Developer and Web Designer based in Colombia.
                      Ready for collaboration and exciting projects.<br />
                          
                        <Link to='contact' className=' hover:text-zinc-300 inline-flex underline'>
                            Feel free to drop me a line
                            <CgArrowTopRight style={{ fontSize: '1.5rem', fontWeight: '100', margin: '2px 0 0 -1px' }} />
                        </Link><br/>
                        Let's create! :)
                    </p>
                </article>
                
            </section>

        </>
    );


}

export default Test;

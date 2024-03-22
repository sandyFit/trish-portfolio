import React from 'react'
import MotionText from '../../components/ui/MotionText';
import { PiCaretDoubleRightBold } from 'react-icons/pi';
import Logo from '../../components/ui/Logo';
import { CgArrowTopRight } from 'react-icons/cg';
import { Link } from 'react-scroll';
import MotionTextXSmall from '../../components/ui/MotionTextXSmall';


const Test = () => {
  return (
         <>
            <section id='hero' className='w-full min-h-screen grid grids-col-2 relative bg-green-400
                border-2 border-b-0 border-zinc-900'>
                
                <article className='absolute top-[4.9rem] left-0 w-full z-10'>
                    <MotionText
                        
                        text1={'Creative Developer'}                   
                    />
                </article>

            <article className="flex w-full h-full ">
                <div className="w-[52.5%] h-full flex flex-col items-start justify-between border-r-2 border-zinc-900 pb-12">
                      <div className="w-full flex-col ml-12 mt-[18rem] px-24 ">
                          
                            <div className="flex ">                              
                                <div className="flex ">
                                    <PiCaretDoubleRightBold style={{ marginTop: '10px'}}/>
                                    <p className='text-syne text-2xl font-[380] text-zinc-900 pb-1 ml-2'>   
                                        Hello, Trish here
                                    </p>
                                </div>                                
                            </div>
                          <h1 className='w-full font-ibm text-[6rem] leading-[100px] text-zinc-900 font-[500] '>
                            Turning  Bold Ideas  into Digital Experiences

                        </h1>
                      
                      <p className=' w-full font-ibm text-zinc-900 text-3xl uppercase  tracking-[.075rem] pt-8'>
                          [ Frontend Development & Web Design ]
                      </p>
                    </div>

                      <div className="w-full flex justify-between pt-16 pr-16">
                        
                        <p className='font-syne text-lg font-[300] text-zinc-900 uppercase ml-36 tracking-wide'>
                            available for work
                          </p>
                          
                      </div>  

                      <div className="flex">
                        
                          
                        
                      </div> 
                 </div>                  
                

                  <div className="w-[48.5%] h-full flex flex-col items-center py-12 relative">   
                      <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-zinc-900 
                      top-[16.5rem]"></div>
                        
                        <Logo text='PICK YOUR COLOR * PICK YOUR COLOR *' />   
                     
                          
                      <div className="w-full flex flex-col items-center gap-3 mt-[-15rem]">
                          <p className='font-ibm font-[400] text-2xl text-zinc-900 uppercase tracking-wider'>
                              & customize the background
                               
                          </p>
                          <div className="w-full flex gap-2 bg-transparent py-4 border-t-2 justify-center items-center
                            border-b-2 border-zinc-900">
                              
                            <button className="flex bg-red-400 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-65 font-[500]">
                                        red
                                </button>
                            <button className="flex bg-blue-400 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-45 font-[500]">
                                        blue
                                </button>
                            <button className="flex bg-yellow-300 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-65 font-[500]">
                                        yellow
                                </button>
                            <button className="flex bg-purple-400 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-35 font-[500]">
                                        purple
                                </button>
                            <button className="flex bg-green-400 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-65 font-[500]">
                                        green
                                </button>
                            <button className="flex bg-pink-400 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-65 font-[500]">
                                        pink
                                </button>
                                <button className="flex bg-zinc-300 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                        font-syne justify-center items-center hover:bg-opacity-65  font-[500]">
                                            white
                                    </button>
                            <button className="flex bg-orange-400 w-24 h-10 rounded border-2 border-zinc-900 uppercase
                                    font-syne justify-center items-center hover:bg-opacity-65 font-[500]">
                                        orange
                                </button>
                          </div>
                      </div>  

                      <div className="w-full flex justify-end px-16">
                          
                        <p className='font-syne text-lg font-[300] text-zinc-900 uppercase mt-8 tracking-wide '>
                            <Link to='contact' className=' hover:text-zinc-700 hover:underline inline-flex'>
                                    get in touch
                                    <CgArrowTopRight style={{ fontSize: '1.5rem', fontWeight: '100', margin: '1px 0 0 -1px' }} />
                                    </Link><br />
                        </p>
                      </div>
                      

                      
                </div>                                        
                    
                
                
            </article>
        </section>        

        </>
    );


}

export default Test;

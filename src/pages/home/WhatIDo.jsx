import React from 'react'

const WhatIDo = () => {
    return (

        <section id='what-i-do' className='w-full h-[calc(100vh-78px)] bg-skyIce-300 flex flex-col absolute 
            bottom-0 left-0 border-2 border-zinc-900 ' style={{ zIndex: 10 }}>

            <article className="flex w-full h-full">
                <div className="w-[52%] h-full  flex flex-col border-r-2 border-zinc-900">
                    <div className="flex items-center w-full h-[120px] py-5 border-b-2 border-zinc-900">
                        <h2 className='hero-title text-zinc-300 pl-20'>
                            who i am
                        </h2>
                    </div>

                    <div className="w-full flex justify-end items-end  px-20">
                        <p className="font-sora text-[1.2rem] text-zinc-900 font-[350]  mt-12">                             
                            I build cool digital things through design & Code.
                            My portfolio showcases a diverse range of projects, including:
                            <ul>
                                <li>UX Design</li>
                                <li>Web Development</li>
                                <li>UI Animations</li>
                                <li>Icon Illustrations</li>
                            </ul>

                            Being confortable with code empowers me to swiftly prototype and validate user experiences,
                            ensuring that each project is not only pixel perfect but also functional. 
                            </p>
                        </div>                             
                    </div>

                <div className="w-[48%] h-full flex flex-col ">                                               
                    
                </div>
                
            </article>
        </section>        
    );

        
}

export default WhatIDo;

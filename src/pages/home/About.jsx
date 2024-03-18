import React from 'react'
import MotionTextSmall from '../../components/ui/MotionTextSmall';
import { ImSmile } from 'react-icons/im';

const About = () => {
    return (
        <>
            <section id='about' className='w-full h-[calc(100vh-77px)] bg-skyIce-300 flex flex-col relative
                border-2 border-zinc-900'>
                
                <article className='w-full h-[140px] bg-zinc-300 border-b-2 border-zinc-900 flex items-center'>
                    <MotionTextSmall
                        icon={<ImSmile style={{ margin: '1.2rem 2rem 0 2rem', fontSize: '3.5rem', color: '#7c5dec'}}/>}
                        text={'about me'}
                    />
                </article>

                <article className="flex w-full h-full">
                    <div className="w-[55%] h-full  flex flex-col border-r-2 border-zinc-900">
                        
                        <div className="flex items-center w-full h-[120px] py-6 border-b-2 border-zinc-900">
                            <h2 className='hero-title text-zinc-300 ml-[12%]'>
                                who i am
                            </h2>
                        </div>

                        <div className="w-full flex justify-end items-end px-16 ">
                            <p className="font-syne text-xl uppercase text-zinc-900 font-[500] ml-[8%] mt-20">
                        
                                Thanks for visisting. I'm a graphic designer based in Colombia. Feel free to call me Trish,
                                just like my friends do. 😊.<br /><br />
                                
                                Driven by my passion for all things digital, I embarked on a self-taught journey to expand 
                                my expertise into web development, directing my attention primarily towards frontend solutions.
                                <br /><br />
                                This journey has deepened my commitment to build digital products that are the perfect blend of
                                meaningful aesthetics and function.<br/><br/>
                                Away from the screen, I'm indulging in life's varied rhythms—be it striking a balance with gym
                                sessions, mastering the craft of baking yum yums, or channeling my quirky side through drawing
                                and lettering.<br /><br />                               
                            </p>
                        </div>
                    </div>

                    <div className="w-[45%] h-full flex flex-col">
                       

                        <div className="w-full h-[80%] flex justify-end items-end px-16 pb-16 mt-[20%]">
                            <p className="font-syne text-xl uppercase text-zinc-900 font-[500]">                                                      

                                I'm eager to collaborate with teams and clients who are passionate about exploring the intersection
                                of mindful design and web technologies.
                                
                            </p>
                        </div>
                    </div>
                </article>
            </section>

        </>
    );
};

export default About;


import React from 'react';
import { ImSmile } from 'react-icons/im';
import MotionTextSmall from '../../components/ui/MotionTextSmall';

const AboutAndWhatIDo = () => {
    return (
        <section className='w-full min-h-screen bg-skyIce-300 flex flex-col relative border-2 border-zinc-900'>

        {/* About Me Section */}
        <div className='w-full'>
            <article className='w-full h-[150px] bg-zinc-300 border-b-2 border-zinc-900 flex items-center'>
                <MotionTextSmall
                    icon={<ImSmile style={{ margin: '1.2rem 2rem 0 2rem', fontSize: '3.5rem', color: '#7c5dec'}} />}
                    text={'about me'}
                />
            </article>

            <div className="flex w-full">
                <div className="w-full flex flex-col border-r-2 border-zinc-900 p-20">
                    <h2 className='hero-title text-zinc-300'>
                        Who I Am
                    </h2>
                    <p className="font-sora text-[1.2rem] text-zinc-900 font-[350] mt-12">
                        I'm a graphic designer at heart. Driven by my passion for all things digital, I embarked on a
                        self-taught journey to expand my expertise into web development, with a keen focus on the artistry
                        of frontend design.
                        <br /><br />
                        Today, I stand as a creative developer, blending the worlds of design and code. <br /><br />

                        This journey has not only broadened my skill set but also solidified my commitment to
                        build digital products that are the perfect blend of meaningful aesthetics and function.
                        <br /><br />
                        I'm on the lookout for collab opportunities with teams and clients who are passionate
                        about exploring the intersection of design and technology.
                        <br /><br /> 

                        Away from the screen, I'm indulging in life's varied rhythms—be it striking a balance with gym
                        sessions, mastering the craft of baking yum yums, or channeling my quirky side through drawing
                        and lettering. 
                    </p>
                </div>
            </div>
        </div>

        {/* What I Do Section */}
        <div className='w-full'>
            <div className="flex w-full">
                <div className="w-full flex flex-col border-r-2 border-zinc-900 p-20">
                    <h2 className='hero-title text-zinc-300'>
                    What I Do
                    </h2>
                    <p className="font-sora text-[1.2rem] text-zinc-900 font-[350] mt-12">
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
        </div>

        </section>
    );
};

export default AboutAndWhatIDo;


<div id='what-i-do' className="absolute bottom-0 left-0 w-full h-[50%] bg-skyIce-300 border-t-2 
            border-zinc-900 flex flex-col justify-center" style={{ zIndex: 10 }}>
            <div className="px-20 py-5">
                <h2 className='text-zinc-300 font-bold text-2xl mb-4'>What I Do</h2>
                <p className="font-sora text-[1.2rem] text-zinc-900">
                    {/* Your content */}
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
import React, {useEffect} from 'react'
import MotionTextSmall from '../../components/ui/MotionTextSmall';
import { ImSmile } from 'react-icons/im';
import FlippingTextBtn from '../../components/ui/FlippingTextBtn'

const About = () => {

    useEffect(() => {
        const handleScroll = () => {
        const aboutSection = document.getElementById('about');
        const whatIDoSection = document.getElementById('what-i-do');
        
        // Calculate the point at which "What I Do" should start moving
        const startMovingPoint = aboutSection.offsetTop + aboutSection.offsetHeight - window.innerHeight;

        if (window.scrollY > startMovingPoint) {
            // Adjust the top value based on scroll to create the overlay effect
            whatIDoSection.style.top = `${40 - ((window.scrollY - startMovingPoint) / window.innerHeight) * 100}%`;
        } else {
            whatIDoSection.style.top = '100%'; // Reset if not in the correct position
        }
    };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        
        <section id='about' className='w-full h-[calc(100vh-78px)] bg-skyIce-300 flex flex-col sticky
            border-2 border-zinc-900'>
            <article className='w-full h-[150px] bg-zinc-300 border-b-2 border-zinc-900 flex items-center'>
                <MotionTextSmall
                    icon={<ImSmile style={{ margin: '1.2rem 2rem 0 2rem', fontSize: '3.5rem', color: '#7c5dec'}}/>}
                    text={'about me'}
                />
            </article>

            <article className="flex w-full h-full">
                <div className="w-[52%] h-full  flex flex-col border-r-2 border-zinc-900">
                    <FlippingTextBtn/>                  
                </div>

                <div className="w-[48%] h-full flex flex-col ">                                               
                    <div className="flex items-center w-full h-[120px] py-5 border-b-2 border-zinc-900">
                        <h2 className='hero-title text-zinc-300 pl-20'>
                            who i am
                        </h2>
                    </div>

                    <div className="w-full flex justify-end items-end  px-20">
                        <p className="font-sora text-[1.2rem] text-zinc-900 font-[350]  mt-12">                             
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
                
            </article>
        </section>        
    );
};

export default About;


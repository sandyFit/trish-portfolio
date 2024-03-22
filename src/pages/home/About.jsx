import React from 'react'
import MotionTextSmall from '../../components/ui/MotionTextSmall';
import MotionTextXSmall from '../../components/ui/MotionTextXSmall';

// import { ParallaxProvider } from 'react-scroll-parallax';


const About = () => {

    // useEffect(() => {
    //     const handleScroll = () => {
    //     const aboutSection = document.getElementById('about');
    //     const whatIDoSection = document.getElementById('what-i-do');
        
    //     // Calculate the point at which "What I Do" should start moving
    //     const startMovingPoint = aboutSection.offsetTop + aboutSection.offsetHeight - window.innerHeight;

    //     if (window.scrollY > startMovingPoint) {
    //         // Adjust the top value based on scroll to create the overlay effect
    //         whatIDoSection.style.top = `${40 - ((window.scrollY - startMovingPoint) / window.innerHeight) * 100}%`;
    //     } else {
    //         whatIDoSection.style.top = '100%'; // Reset if not in the correct position
    //     }
    // };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);


    return (
        
        <section id='about' className='w-full h-[calc(100vh-78px)] bg-green-400 flex flex-col sticky
            border-2 border-zinc-900'>
            <article className='w-full h-[150px] bg-zinc-300 border-b-2 border-zinc-900 flex items-center'>
                <MotionTextSmall
                    icon={' '}
                    text={'about me'}
                />
            </article>

            <article className="flex w-full h-full">
                <div className="w-[52%] h-full flex flex-col border-r-2 border-zinc-900">
                   <div className="w-full flex-col justify-end items-end ml-12 px-28 py-16">
                        <div className="flex">

                            <span className='font-ibm text-[6.2rem] font-[400] relative bottom-8 mr-2 
                                text-zinc-900'>
                                    I
                                </span>
                            <div className="flex flex-col">

                                <p className="font-ibm text-[1.2rem] font-[400] text-zinc-900  ">      
                                    am a graphic designer at heart. Driven by my passion for all things digital, I embarked on a
                                    self-taught journey to expand my expertise into web development, with a keen focus
                                </p>
                                <p className="font-ibm text-[1.2rem] font-[400] text-zinc-900  ml-[-4.3rem]">
                                    on the artistry of frontend design.
                                </p>
                            </div>
                        </div>
                        <p className="font-ibm text-[1.2rem] font-[400] text-zinc-900  ">                             
                            Today, I stand as a creative developer, blending the worlds of design and code. <br /><br />

                            This journey has not only broadened my skill set but also solidified my commitment to
                            build digital products that are the perfect blend of meaningful aesthetics and function.
                            <br /><br />
                            I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                            stoke my passion for design and development.                            
                            <br /><br /> 

                            Away from the screen, I'm indulging in life's varied rhythms—be it engaging in gym workouts,
                            mastering the craft of baking yum yums, or channeling my quirky side through drawing.
                        </p>
                    </div>                   
                                   
                </div>

                <div className="w-[48%] h-full flex items-end">
                    <div className="w-full bg-zinc-300 border-t-2 border-zinc-900">

                        <MotionTextXSmall
                        icon={'    '}
                        text={'my skills'}
                        />
                    </div>
                </div>                                    
                    
                
            </article>
        </section>        
    );
};

export default About;


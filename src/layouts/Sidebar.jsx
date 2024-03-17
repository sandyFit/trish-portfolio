import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Sidebar = () => {

    const [activeSection, setActiveSection] = useState('Welcome')

    const handleScroll = () => {
    const sections = ['hero', 'about', 'projects', 'playground', 'contact'];
    const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            // Change to use a threshold for better detection
            return rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5;
        }
        return false;
    });
        
    switch (currentSection) {
        case 'hero':
            setActiveSection('Welcome 🖐');
            break;
        case 'about':
            setActiveSection('My Journey');
            break;
        case 'projects':
            setActiveSection('selected works');
            break;
        case 'playground':
            setActiveSection('my digital chaos');
            break;
        case 'contact':
            setActiveSection("drop me a line 😊");
            break;
        default:
            setActiveSection('Welcome');
    }
}


    useEffect(() => {
        handleScroll(); // Initial check in case the page isn't at the top when loaded
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section className='w-[80px] h-full flex flex-col justify-between items-center border-2
            border-zinc-900 gap-60 fixed inset-0 z-30 bg-zinc-300'>           
            <p className="text-zinc-300 text-[4rem] font-syne font-bold flex justify-center items-center w-full h-[78px] border-b-2 border-zinc-900 bg-zinc-900">
                <Link to="hero" className="w-full h-full flex justify-center items-center">T</Link>
            </p>
            
            <article className="flex justify-center" style={{ width: '200px' }}>
                <p className='text-zinc-900 font-syne text-lg font-semibold uppercase -rotate-90 '>
                    {activeSection}
                </p>
            </article>

            <article className='flex flex-col justify-evenly items-center w-full text-zinc-300 
                 bg-zinc-900 border-t-2 border-zinc-300'>
                <FaInstagram 
                    style={{ fontSize: '2rem',  cursor: 'pointer', transition: 'opacity 0.2s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 2} 
                />
                <FaLinkedin 
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                />
                <FaGithub
                    style={{ fontSize: '2rem', cursor: 'pointer', transition: 'opacity 0.3s' }}
                    onMouseOver={(e) => e.target.style.opacity = 0.65}
                    onMouseOut={(e) => e.target.style.opacity = 1}
                /> 
                
            </article>
            
        </section>
    )
}

export default Sidebar;

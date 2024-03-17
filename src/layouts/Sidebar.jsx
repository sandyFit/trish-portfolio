import React, { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Sidebar = () => {

    const [activeSection, setActiveSection] = useState('Welcome')

    const handleScroll = () => {
    const sections = ['hero', 'about', 'projects', 'contact'];
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
            setActiveSection('Welcome');
            break;
        case 'about':
            setActiveSection('My Journey');
            break;
        case 'projects':
            setActiveSection('Selected Works');
            break;
        case 'contact':
            setActiveSection('Get In Touch');
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
        <section className='w-[80px] min-h-full flex flex-col justify-between items-center border-2
            border-zinc-900 gap-60  fixed inset-0 z-30 bg-zinc-300'>
            <p className="text-zinc-300  text-[4rem] font-syne font-bold flex justify-center items-center w-full
                h-[78px] border-b-2 border-zinc-900 bg-zinc-900">
                T
            </p>

            <div className="flex">
                <p className='text-zinc-900 font-syne text-lg font-semibold uppercase -rotate-90'>{ activeSection }</p>
            </div>

            <div className='flex flex-col justify-evenly items-center w-full h-full text-zinc-300 bg-zinc-900  gap-10'>
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
                
            </div>
            
        </section>
    )
}

export default Sidebar;

import React from 'react';
import FeatureTitle from '../../components/features/FatureTitle';
import FeatureCard from '../../components/features/FeatureCard';
import FeatureParagraph from '../../components/features/FeatureParagraph';


const About = () => {

    const features = [
        {
            id: 'web-design',
            title: 'Web Design',
            description: 'I create captivating digital experiences that seamlessly blend aesthetics with functionality. \n\nWith meticulous attention to detail and a profound understanding of user experience, I create engaging websites that intuitively guide visitors through your content. \n\n My strategic approach focuses on setting specific goals to help each user take the expected action, ensuring a seamless journey that maximizes conversions.'
        },
        {
            id: 'web-dev',
            title: 'Web Development',
            description: "I rely on power of JavaScript frameworks like React, and Vue.js to create dynamic and responsive interfaces. I do APIs, optimize websites with Webpack, and ensure cross-browser compatibility, assuring your web website is not just functional—it's a captivating experience that leaves a lasting impression."
        },
        {
            id: 'motion',
            title: 'Motion Design',
            description: 'Motion design, encompassing everything from subtle animations to complex transitions, plays a pivotal role in enhancing user experience and guiding user actions. I recognize the significance of motion design and how it shapes the way users interact with websites.'

        },

        {
            id: 'seo',
            title: 'SEO',
            description: 'I take a comprehensive and tailored approach to SEO. Analyzing your website, industry, competition, and target audience to develop a strategy that aligns with your business and marketing goals.'
        }
    ]

    return (
        <section className='w-full min-h-screen px-24 flex gap-20'>
            <article className="w-full flex items-start gap-32 py-[50vh]">
                <ul className='w-full flex flex-col gap-60'>
                    {features.map((item) => (
                        <div key={item.id}>                           
                            <FeatureTitle>{item.title}</FeatureTitle>
                            <FeatureParagraph>{item.description}</FeatureParagraph>
                        </div>
                    ))}
                </ul>

                
            </article>
            <article className="w-full sticky top-0 h-screen flex items-center">
                <FeatureCard gradient='from-[#f7f0ff] to-[#a78afe]'/>
            </article>

            
            
        </section>
    )
}

export default About;

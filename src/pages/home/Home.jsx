import React from 'react';
import Hero from './Hero';
import About from './About';
import WhatIDo from './WhatIDo';


const Home = () => {
    return (
        <div>
            <section>
                <Hero/>
            </section>
            <section>
                <About/>
            </section>
            <section>
                <WhatIDo/>
            </section>

            
        </div>
    )
}

export default Home
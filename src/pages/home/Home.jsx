import React from 'react';
import Test from './Test';
import About from './About';
//import WhatIDo from './WhatIDo';


const Home = () => {
    return (
        <div>
            <section>
                <Test/>
            </section>
            <section>
                <About/>
            </section>
            {/* <section>
                <WhatIDo/>
            </section> */}

            
        </div>
    )
}

export default Home
import React from 'react'
import Hero from './Hero'
import About from './About'

const Home = () => {
    return (
        <div>
            <section>
                <Hero/>
            </section>
            <section>
                <About/>
            </section>
        </div>
    )
}

export default Home
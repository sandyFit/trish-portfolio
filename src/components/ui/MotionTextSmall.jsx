import React from 'react'

const MotionText = ({ icon, text }) => {
    
    const repetitions = Array(7).fill(null);

    return (
        <div className="w-full z-10"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-syne text-[4rem] font-[800] tracking-wider uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                        <span >
                            {icon}
                        </span>
                        <span className='text-zinc-900 mx-[100px]' >{text}</span>
                        </React.Fragment>
                    ))}
                </div>
            </h2>
        </div>
    )
}

export default MotionText
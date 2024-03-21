import React from 'react'

const MotionText = ({ icon, text }) => {
    
    const repetitions = Array(6).fill(null);

    return (
        <div className="w-full z-10 bg-zinc-300 border-b-2 pt-1"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-syne text-[2rem] font-[780] tracking-[-.1rem] uppercase'
                style={{animation: 'slideLeft 20s linear infinite'}}>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span  style={{color: '#151518'}}>
                                {icon}
                            </span>
                            <span className='text-zinc-900 mx-[60px]' >{text}</span>
                       </React.Fragment>
                    ))}
                </div>
            </h2>
        </div>
    )
}

export default MotionText
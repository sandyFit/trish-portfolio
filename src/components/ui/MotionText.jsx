import React from 'react'

const MotionText = ({ icon, text1, text2, text3 }) => {
    
    const repetitions = Array(4).fill(null);

    return (
        <div className="w-full z-10 border-b-2 border-zinc-900"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-syne text-[5rem] font-[950] tracking-[-.1rem] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                        <span  style={{color: '#151518'}}>
                            {icon}
                        </span>
                        <span className='text-zinc-900' >{text1}</span>
                        
                        <span className='text-salmon-400' style={{ margin: '0 1rem' }}>{text2}</span>              
                        
                        <span className='text-zinc-300' style={{ margin: '0 1rem' }}>{text3}</span>              
                                    
                        </React.Fragment>
                    ))}
                </div>
            </h2>
        </div>
    )
}

export default MotionText
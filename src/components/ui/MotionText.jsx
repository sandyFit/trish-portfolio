import React from 'react'

const MotionText = ({ icon, text1, text2, text3 }) => {
    
    const repetitions = Array(6).fill(null);

    return (
        <div className="w-[100vw] z-10 border-2 border-zinc-950"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text font-pragati text-[8rem] font-[900] tracking-tighter uppercase'>
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
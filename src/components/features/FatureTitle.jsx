import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';

const FatureTitle = ({ children }) => {
    const ref = useRef(null); // Removed TypeScript annotation
    const isInView = useInView(ref, {
        margin: '-30% 0px -40% 0px',
    });

    return (
        <p
            ref={ref}
            className={classNames(
                'font-syne text-[4rem] pb-2 font-[700] transition-colors tracking-[-.1rem] uppercase',
                isInView ? 'text-salmon-400' : 'text-salmon-900'
            )}
        >
            {children}
        </p>
    );
};

export default FatureTitle;

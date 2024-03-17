import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';

const FeatureParagraph = ({children}) => {
    const ref = useRef(null); // Removed TypeScript annotation
    const isInView = useInView(ref, {
        margin: '-50% 0px -20% 0px',
    });

    return (
        <p
            ref={ref}
            className={classNames(
                'font-syne text-3xl font-[400] transition-colors tracking-wider',
                isInView ? 'text-zinc-400' : 'text-zinc-700'
            )}
        >
            {children}
        </p>
    );
}

export default FeatureParagraph;

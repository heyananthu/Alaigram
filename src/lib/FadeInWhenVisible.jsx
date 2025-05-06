// src/components/AnimationCard.jsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInWhenVisible = ({ children, animationProps = {}, className = '', index = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8,
                ...animationProps,
            }}
            transition={{ duration: 0.9, delay: index * 0.2, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWhenVisible;

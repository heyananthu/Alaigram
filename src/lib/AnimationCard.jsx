import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Generic In-View Animation Component
const AnimationCard = ({ children, animationProps, className, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref); // Trigger animation when the element is in view

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
                ...animationProps,
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay for each item
        >
            {children}
        </motion.div>
    );
};

export default AnimationCard;

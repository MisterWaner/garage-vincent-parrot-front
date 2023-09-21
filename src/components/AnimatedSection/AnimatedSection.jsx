/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Component to animate the sections of home page mécanique and carrosserie using framer-motion
const sectionVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
        },
    },
};

const AnimatedSection = ({ children }) => {
    
    const control = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true,});

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    });

    return (
        <motion.div
            ref={ref}
            variants={sectionVariant}
            initial="hidden"
            animate={control}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;

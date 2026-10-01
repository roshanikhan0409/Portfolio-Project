import { motion } from "motion/react";

export default function Reveal({
    children,
    direction = "up",
    className = "",
}){
    const directions = {
        up: { y: 60 },
        down: { y: -50 },
        left: { x: -100 },
        right: { x: 100 },
    };
    return(
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
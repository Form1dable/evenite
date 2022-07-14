import {motion} from "framer-motion";

interface Props {
    children: JSX.Element;
}

const animations = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}
}

const AnimatedPage: React.FC<Props> = ({children}) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit"
                    transition={{duration: 0.3}}
        >
            {children}
        </motion.div>

    )
}

export default AnimatedPage
import { motion } from "framer-motion"

// variants
const stairsAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculate the reverse index of for the delay
const reverseIndex = (index) => {
    const totalSteps = 6; // total number of steps
    return totalSteps - index - 1;
};

const Stairs = () => {
    return <>

        {/* render & motion divs, each representing a step of the stairs.
    each div will have some animation defines by the stairsAnimation objectù
    the delay is calculated  dynamically 
    based on its index creating a 
    stagged effect with decreasing delay for each step
    */}

        {[...Array(6)].map((_, index) => {
            return (<motion.div
                key={index}
                variants={stairsAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={reverseIndex(index)}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.1,
                }}
                className="h-full w-full bg-white relative"
            />
            );
        })}
    </>
}

export default Stairs;
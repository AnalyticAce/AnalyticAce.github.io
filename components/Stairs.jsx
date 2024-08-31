import { animate, motion } from "framer-motion"
import { init } from "next/dist/compiled/webpack/webpack"

// variants
const stairsAnimation = {
    initial : {
        top : "0%",
    },
    animate : {
        top : "100%",
    },
    exit : {
        top : ["100%", "0%"],
    },
}

const Stairs = () => {
    return <div>Stairs</div>
}

export default Stairs;
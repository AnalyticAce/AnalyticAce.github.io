"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
        >
            <div className="relative w-[298px] h-[298px] xl:w-[490px] xl:h-[498px]">
            <Image
                src="./assets/photo_500.png"
                priority
                quality={100}
                fill
                alt=""
                className="object-contain"
            />
            <motion.svg
                className="absolute top-0 left-0 w-full h-full"
                fill="transparent"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                cx="50"
                cy="50"
                r="52" // Adjust the radius to make the circle smaller
                stroke="#00ff99"
                strokeWidth="1.5" // Adjust the stroke width to make the border thinner
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                />
            </motion.svg>
            </div>
        </motion.div>
        </div>
    );
};

export default Photo;

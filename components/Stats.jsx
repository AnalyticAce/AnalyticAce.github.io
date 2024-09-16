"use client";

import CountUp from "react-countup";

const stats = [
    {
        number: 3,
        text : "Years of experience"
    },
    {
        number: 131,
        text : "Projects completed"
    },
    {
        number: 9,
        text : "Technologies mastered"
    },
    {
        number: 889,
        text : "Code commits in 2024"
    }
]

const Stats = () => {
    return <section className="pt-2 pb-6 xl:pb-4"> {/* Adjusted pt-4 to pt-2 and pb-12 to pb-6 and xl:pb-4 and xl:pb-8*/}
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div key={index} className="flex-1 flex gap-4
                            items-center justify-center xl:justify-start">
                            <CountUp end={item.number} duration={5} delay={2} 
                            className="text-4xl xl:text-6xl font-extrabold" 
                            />
                            <p className={`${item.text.length < 15 
                                ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                            >{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
}

export default Stats
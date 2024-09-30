"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowDownRight} from 'react-icons/bs'

const services = [
    {
        num: '01',
        title: "Data Solutions & Analytics",
        description: "I provide end-to-end data solutions that encompass data engineering, data science, and analytics. From building robust data infrastructures to deriving actionable insights through advanced analytics and machine learning.",
        hrfe: 'https://google.com'
    },
    {
        num: '02',
        title: "Scripting & Automation",
        description: "Automate repetitive tasks and streamline workflows with custom scripts and automation solutions.",
        hrfe: 'https://google.com'
    },
    {
        num: '03',
        title: "API Integration",
        description: "Seamlessly connect your systems and applications with custom API integration services. I enable smooth data exchange, enhancing functionality and interoperability with third-party services.",
        hrfe: 'https://google.com'
    },
    {
        num: '04',
        title: "Development Operations (DevOps)",
        description: "Optimize your development lifecycle with my DevOps skills, which include CI/CD pipeline setup, cloud infrastructure management, and automated deployment. I can't accelerate your time to market while maintaining high-quality standards.",
        hrfe: 'https://google.com'
    },
    {
        num: '05',
        title: "Project Management",
        description: "I armed with project management skill, that enables be to make use of Agile frameworks, to ensuring adaptive planning, continuous improvement, and early delivery of valuable products.",
        hrfe: 'https://google.com'
    },
]


const Services = () => {
    return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
        <div className='container mx-auto'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {
                delay: 2.4, duration: 0.4, ease: "easeIn"}
            }}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
            {services.map((service, index) => {
                return (
                <div key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
                >
                    {/* top */}
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-5xl font-extrabold text-outline
                        text-transparent group-hover:text-outline-hover
                        transition-all duration-500'>
                            {service.num}
                        </div>
                        {/* {service.hrfe && (
                            <Link href={service.hrfe} className='w-[70px] h-[70px] rounded-full 
                            bg-white group-hover:bg-accent transition-all duration-500
                            flex justify-center items-center hover:-rotate-45'
                            >
                                <BsArrowDownRight className='text-primary text-3xl'/>
                            </Link>
                        )} */}
                    </div>
                    {/* heading */}
                    <h2 className='text-[42px] font-bold leading-none text-white
                    group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                    {/* description */}
                    <p className='text-white/60'>{service.description}</p>
                    {/* border */}
                    <div className='border-b border-white/20 w-full'></div>
                </div>
                );
            })}
            </motion.div>
        </div>
    </section>
    )
}

export default Services
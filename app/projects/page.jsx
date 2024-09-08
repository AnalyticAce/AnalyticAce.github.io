"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tabs, TabsContent, TabsList,
    TabsTrigger
} from "@/components/ui/tabs";
import {
    TooltipProvider, Tooltip,
    TooltipTrigger, TooltipContent
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Carter_One } from "next/font/google";
import WorkSliderBtns from '@/components/WorkSliderBtns';

const works = [
    {
        num: '01',
        category: 'Web Development',
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        stack: [{
            name: 'React',
            color: 'blue'
        }, {
            name: 'Next.js',
            color: 'black'
        }],
        image: './assets/work/thumb1.png',
        github: 'https://github.com',
        live: 'https://google.com'
    },
    {
        num: '02',
        category: 'Web Development',
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        stack: [{
            name: 'React',
            color: 'blue'
        }, {
            name: 'Next.js',
            color: 'black'
        }],
        image: './assets/work/thumb1.png',
        github: 'https://github.com',
        live: 'https://google.com'
    },
    {
        num: '03',
        category: 'Web Development',
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        stack: [{
            name: 'React',
            color: 'blue'
        }, {
            name: 'Next.js',
            color: 'black'
        }],
        image: './assets/work/thumb3.png',
        github: 'https://github.com',
        live: 'https://google.com'
    },
    {
        num: '04',
        category: 'Web Development',
        title: 'Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc.',
        stack: [{
            name: 'React',
            color: 'blue'
        }, {
            name: 'Next.js',
            color: 'black'
        }],
        image: './assets/work/thumb2.png',
        github: 'https://github.com',
        live: 'https://google.com'
    }
];

const Projects = () => {
    const [project, setProject] = useState(works[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state
        setProject(works[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}

            className="min-h-[80vh] flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] 
                        flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* Project Number */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* Project Category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/* Project Title */}
                            <p className="text-white/60">{project.description}</p>
                            {/* Project Stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((stack, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {stack.name}
                                            {/* Add comma if not last */}
                                            {index !== project.stack.length - 1 && ','}
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* borders */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {works.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group 
                                            flex justify-center items-center bg-pink-50/20">
                                            <div className='absolute top-0 
                                                bottom-0 w-full h-full bg-black/10 z-10'>
                                                </div>
                                            {/* Image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} alt={project.title} 
                                                fill className="object-cover"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* Swiper button */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0
                            bottom[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
                            xl:w-max xl:justify-none" btnStyles="bg-accent hover:b-accent-hover
                            text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                            items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;
"use client";

import { 
    FaCss3, FaJs, 
    FaPython, FaFigma, 
    FaReact, FaJenkins, 
    FaHtml5, FaDocker 
} from "react-icons/fa";

import { SiCplusplusbuilder, 
    SiAnsible, SiGnubash, 
    SiPandas, SiApachegroovy, SiYaml,
    SiApacheairflow, SiGooglecloud, SiLooker, SiMongodb } from "react-icons/si";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


// about data
const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Shalom DOSSEH"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+229) 55 20 24 24"
        },
        {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        },
        {
            fieldName: "Discord",
            fieldValue: "dossehshalom"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Beninesse"
        },
        {
            fieldName: "Email",
            fieldValue: "dossehdosseh14@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, Fon"
        },
    ]
}

// experience data
const experience = {
    icon: './asset/resume/badge.svg',
    title: "My experience",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    items: [
        {
            company: "Gozem - Africa's Super App",
            position: "E-Banking & Product Data Analyst (Intern)",
            duration: "July 2024 - Present"
        },
        {
            company: "Gozem - Africa's Super App",
            position: "Transport Data Analyst (Intern)",
            duration: "Sept 2023 - Jan 2024"
        },
        {
            company: "Epitech X Impact",
            position: "Social Data Analyst",
            duration: "Sept 2023 - Present"
        },
        {
            company: "Epitech Student Bureau",
            position: "Lead Project Manager",
            duration: "Mar 2024 - Present"
        },
        {
            company: "Epitech Benin",
            position: "Student Assitant to the Career Center",
            duration: "Jan 2024 - Jun 2024"
        },
        {
            company: "Google Student Developer Club",
            position: "Lead Event Organizer",
            duration: "Jun 2023 - Jun 2024"
        }
    ]
}

// education data
const education = {
    icon: './asset/resume/cap.svg',
    title: "My education",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    items: [
        {
            company: "EPITECH",
            position: "Bachelor in Computer Science",
            duration: "2022 - Present"
        },
        {
            company: "DataCamp",
            position: "Data Analyst Certification",
            duration: "2024 - Present"
        },
        {
            company: "Project Management Institute",
            position: "Certified Associate in Project Management",
            duration: "2024 - Present"
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    skilllist: [
        {
            icon: <FaPython />,
            name: "Python"
        },
        {
            icon: <SiCplusplusbuilder />,
            name: "C ++"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <SiGnubash />,
            name: "Bash"
        },
        {
            icon: <SiApachegroovy />,
            name: "Groovy"
        },
        {
            icon: <SiYaml />,
            name: "YAML"
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn",
                },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-y-4">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 description">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10
                                                    rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] 
                                                    text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] 
                                                        rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 description">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10
                                                    rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] 
                                                    text-center lg:text-left">
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] 
                                                        rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skill */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[400px] text-white/60 mx-auto xl:mx-0 description">
                                    {skills.description}
                                </p>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                                xl:gap-[30px]">
                                    {skills.skilllist.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px]
                                                        bg-[#232329] rounded-xl flex justify-center items-center
                                                        group">
                                                            <div className="text-6xl group-hover:text-accent
                                                            transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    }
                                )}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 description">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6
                                max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center 
                                            justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        );
                                    }
                                )}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume
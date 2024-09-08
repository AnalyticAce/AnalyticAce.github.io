"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectContent, 
    SelectGroup, SelectItem, 
    Select, SelectTrigger, 
    SelectLabel, SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+229) 55 20 24 24"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "dossehdosseh14@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Cotonou, Benin"
    },
]

const Contact = () => {
    return <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="py-6"
    >
    <div className="container mx-auto">
        <div className="flex flex-co xl:flex-row gap-[30px]">
            {/* contact form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c]
                rounded-xl">
                    <h3 className="text-4xl text-accent">Let's work together</h3>
                    <p className="text-white/60">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad natus nostrum tempore rerum quia nisi veritatis deleniti nam vero? Possimus omnis similique dolorum fugit aliquam sequi, rerum eaque perspiciatis nobis!</p>
                    {/* name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input type="firstname" placeholder="Firstname"/>
                        <Input type="Lastname" placeholder="Lastname"/>
                        <Input type="email" placeholder="Email address"/>
                        <Input type="phone" placeholder="Phone number"/>
                    </div>
                    {/* select */}
                    <Select>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder="Select a service"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>
                                    Select a service
                                </SelectLabel>
                                <SelectItem value="est">Scripting & Autmomation</SelectItem>
                                <SelectItem value="cst">Developement Operations</SelectItem>
                                <SelectItem value="ms">Project Management</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* message */}
                    <Textarea className="h-[200px]" 
                    placeholder="Type your message here :)" />
                    {/* submit button */}
                    <Button size="md" className="max-w-40">
                        Send Message
                    </Button>
                </form>
            </div>

            {/* contact info */}
            <div className="flex-1 flex items-center xl:justify-end order-1
            xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                    {info.map((item, index) => {
                        return (
                            <li key={index} className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px]
                                xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center
                                justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.description}</h3>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>
    </motion.section>
    ;
}

export default Contact;
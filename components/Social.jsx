import Link from "next/link"

import {FaGithub, FaLinkedin, FaDiscord, FaWhatsapp} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedin />, path: ""},
    {icon: <FaDiscord />, path: ""},
    {icon: <FaWhatsapp />, path: ""},
]

const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((items, index) => {
            return (
                <Link key={index} href={items.path} className={iconStyles}>
                    {items.icon}
                </Link>
            );
        })}
    </div>
    )
}

export default Social
import Link from "next/link"

import {FaGithub, FaLinkedin, FaDiscord, FaWhatsapp} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/AnalyticAce"},
    {icon: <FaLinkedin />, path: "www.linkedin.com/in/shalom-dosseh-4a484a262"},
    {icon: <FaDiscord />, path: "https://discord.com/channels/shalomdosseh"},
    {icon: <FaWhatsapp />, path: "https://wa.link/w1xzaf"},
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
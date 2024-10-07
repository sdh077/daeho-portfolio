import Link from "next/link"

import { FaGithub, FaInstagram } from "react-icons/fa"

const socials = [
  { icon: <FaGithub />, path: "git" },
  { icon: <FaInstagram />, path: "insta" },
]

const Socials = ({ containerStyles, iconStyles }: { containerStyles: string, iconStyles: string }) => {
  return (
    <div className={containerStyles}>
      {socials.map(social =>
        <Link href={social.path} key={social.path} className={iconStyles} target="_blank">
          {social.icon}
        </Link>
      )}
    </div>
  )
}

export default Socials
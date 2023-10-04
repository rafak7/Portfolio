import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/social.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> },
]

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href="#" className="social-btn" id={network.name}></a>
    ))}
  </section>

}

export default SocialNetworks
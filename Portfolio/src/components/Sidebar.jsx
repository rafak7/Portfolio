import SocialNetworks from './SocialNetworks'

import Avatar from '../img/port.jpg'

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return ( 
  <aside id="sidebar">
    <img src={Avatar} alt="Rafael Lino" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <p>informações de contato</p>
    <a href="" className="btn">
      Download currículo
    </a>
  </aside>
  )
}

export default Sidebar
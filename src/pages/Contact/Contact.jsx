import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import WhatsAppIcon from '../../assets/img/icons8-whatsapp.svg';
import InstagramIcon from '../../assets/img/instagramicon.svg';

function Contact() {
  return (
    <>

      <div className='containerContact'>
        <SideBar />
        <div className='contentContact'>
          <NavBar />
          <div className='conntainerCardsContatos'>
            <h1>Contatos</h1>

            <ul>
              <div className='card'>
                <div className='iconCard'>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="" />
                </div>
                <h5>GitHub</h5>
                <p>VictorBrasileiroo</p>
              </div>

              <div className='card'>
                <div className='iconCard'>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"alt="" />
                </div>
                <h5>Linkedin</h5>
                <p>victorbrasileirooo</p>
              </div>

              <div className='card'>
                <div className='iconCard'>
                  <img src={WhatsAppIcon} alt="" />
                </div>
                <h5>WhatsApp</h5>
                <p>+55 (82) 99617-2566</p>
              </div>

              <div className='card'>
                <div className='iconCard'>
                  <img src={InstagramIcon} alt="" />
                </div>
                <h5>Instagram</h5>
                <p>@victorbrasileiroo</p>
              </div>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

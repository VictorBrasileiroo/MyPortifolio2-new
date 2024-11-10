import React from 'react';
import Skills from '../../assets/img/Vector-1.svg';
import Projects from '../../assets/img/Vector-2.svg';
import Home from '../../assets/img/Vector-3.svg';
import Contact from '../../assets/img/Vector.svg';
import Logo from '../../assets/img/logo.svg'
import GitHubIcon from '../../assets/img/githubicon.svg';
import LinkedInIcon from '../../assets/img/likedinicon.svg';
import InstagramIcon from '../../assets/img/instagramicon.svg';
import { Link } from 'react-router-dom';

export default function SideBar() {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };
    
    return (
        <div 
            className={`sideBar ${isExpanded ? 'expanded' : ''}`} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className='logo'>
                <img src={Logo} alt="" />
                <h2>Victor <span className='green'>Brasileiro</span></h2>
                <span>Desenvolvedor Web</span>
            </div>
            <div className='pagesContainer'>
                <div className='pages'>
                    <Link to="/"><img src={Home} alt="" /><span>Home</span></Link>
                    <Link to="/projects"><img src={Projects} alt="" /><span>Projetos</span></Link>
                    <Link to="/skills"><img src={Skills} alt="" /><span>Techs</span></Link>
                    <Link to="/contact"><img src={Contact} alt="" /><span>Contato</span></Link>
                </div>
                <div className="redesSociais">
                    <a href="https://github.com/VictorBrasileiroo"><img src={GitHubIcon} alt="" /></a>
                    <a href="https://www.linkedin.com/in/victorbrasileirooo/"><img src={LinkedInIcon} alt="" /></a>
                    <a href="https://www.instagram.com/victorbrasileiroo/"><img src={InstagramIcon} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

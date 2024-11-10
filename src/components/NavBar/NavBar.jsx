import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='navBarContainer' data-aos="fade-down">
            <ul>
                <div>
                    <Link to="/">Sobre Mim</Link>
                    <Link to="/projects">Projetos</Link>
                </div>
                <div>
                    <Link to="/skills">Tecnologias</Link>
                    <Link to="/contact">Contato</Link>
                </div>
            </ul>
        </nav>
    )
}

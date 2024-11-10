import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarHome() {
    return (
        <nav className='navBarContainer'>
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

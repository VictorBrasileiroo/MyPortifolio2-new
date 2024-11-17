import React from 'react';
import axios from 'axios';

/**
 * ProjectsArea component fetches and displays a list of projects.
 * 
 * This component uses the `useState` and `useEffect` hooks from React to manage the state and side effects.
 * It fetches project data from an API and displays it in a card layout.
 * 
 * @component
 * @example
 * return (
 *   <ProjectsArea />
 * )
 * 
 * @returns {JSX.Element} A section containing a list of project cards.
 */

export default function ProjectsArea() {
    const projects = [
        {
            "id": 1,
            "title": "BlueBank",
            "description": "BlueBank é um projeto de site para um banco digital fictício. O site oferece informações sobre os serviços do banco, como conta digital, cartões, transferências, e suporte ao cliente. Este repositório contém o código-fonte do site, desenvolvido com HTML, CSS e JavaScript.",
            "technologies": [
                {
                    "name": "JavaScript",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                },
                {
                    "name": "CSS",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
                },
                {
                    "name": "HTML",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
                },
                {
                    "name": "Sass",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                }
            ],
            "github": "https://github.com/VictorBrasileiroo/BlueBank",
            "demo": "https://victorbrasileiroo.github.io/BlueBank/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-1/img.svg"
        },
        {
            "id": 2,
            "title": "Meu Portifólio 2.0",
            "description": "Este é um projeto de uma tela de login simples e responsiva desenvolvida usando React, Tailwind CSS, Vite e Shadcn. A aplicação foi criada com o objetivo de fornecer uma interface de login elegante e eficiente para autenticação de usuários.",
            "technologies": [
                {
                    "name": "React",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    "name": "Node.js",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                },
                {
                    "name": "Sass",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                },
                {
                    "name": "Figma",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                }
            ],
            "github": "https://github.com/VictorBrasileiroo/MyPortifolio2.0",
            "demo": "https://victorbrasileiroo.github.io/MyPortifolio2.0/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-6/img.svg"
        },
        {
            "id": 3,
            "title": "Clients Registration",
            "description": "StoreRegistration é um projeto React desenvolvido para o registro e manutenção de informações de clientes. O sistema é direcionado a pequenas empresas que precisam de uma solução prática para visualizar, registrar e editar facilmente os dados de seus clientes. Esta aplicação foi construída utilizando React.js e Node.js.",
            "technologies": [
                {
                    "name": "React",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    "name": "Node.js",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
                },
                {
                    "name": "Tailwind",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                },
                {
                    "name": "Figma",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                }
            ],
            "github": "https://github.com/VictorBrasileiroo/ProjectRegistration",
            "demo": "https://projectregistrationstore.netlify.app/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-7/img.svg"
        },
        {
            "id": 7,
            "title": "My Portifolio 1.0",
            "description": "Esse Projeto é um portfólio pessoal e foi desenvolvido em React, utilizando Sass para uma estilização modular e eficiente, com o design previamente planejado no Figma. A estrutura do projeto é baseada nos principais pilares da web: HTML, CSS e JavaScript, garantindo uma interface moderna, responsiva e de fácil navegação, com foco na apresentação de habilidades e projetos de forma dinâmica e atraente.",
            "technologies": [
                {
                    "name": "React",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    "name": "CSS",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
                },
                {
                    "name": "Sass",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                },
                {
                    "name": "Figma",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg"
                }
            ],
            "github": "https://github.com/VictorBrasileiroo/MyPortifolio/",
            "demo": "https://victorbrasileiroo.github.io/MyPortifolio/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-2/img.svg"
        },
        {
            "id": 4,
            "title": "FitFinder",
            "description": "FitFinder é uma aplicação web projetada para facilitar a busca por exercícios físicos. Através da integração com uma API de exercícios, ela oferece uma lista personalizada de atividades com base nos filtros selecionados pelo usuário, garantindo uma experiência de pesquisa eficiente e direcionada às suas necessidades.",
            "technologies": [
                {
                    "name": "React",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    "name": "Sass",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                }
                
            ],
            "github": "https://github.com/VictorBrasileiroo/FitFinder",
            "demo": "https://victorbrasileiroo.github.io/FitFinder/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-3/img.svg"
        },
        {
            "id": 5,
            "title": "Weather Watch",
            "description": "Esta aplicação web permite a verificação das condições climáticas atuais. O projeto é um estudo focado em diversos conceitos e tecnologias, incluindo APIs, HTTP, requisições, promises, AJAX e Axios, entre outros. Desenvolvido exclusivamente para fins educativos, visa proporcionar uma compreensão prática e aplicada dessas ferramentas e técnicas.",
            "technologies": [
                {
                    "name": "JavaScript",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
                },
                {
                    "name": "CSS",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg"
                },
                {
                    "name": "HTML",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg"
                }
            ],
            "github": "https://github.com/VictorBrasileiroo/WeatherWatch",
            "demo": "https://victorbrasileiroo.github.io/WeatherWatch/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-4/img.svg"
        },
        {
            "id": 6,
            "title": "Login Screen",
            "description": "Este é um projeto de uma tela de login simples e responsiva desenvolvida usando React, Tailwind CSS, Vite e Shadcn. A aplicação foi criada com o objetivo de fornecer uma interface de login elegante e eficiente para autenticação de usuários.",
            "technologies": [
                {
                    "name": "React",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                },
                {
                    "name": "Tailwind CSS",
                    "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
                }
            ],
            "github": "https://github.com/VictorBrasileiroo/LoginScreen",
            "demo": "https://victorbrasileiroo.github.io/LoginScreen/",
            "image": "https://raw.githubusercontent.com/VictorBrasileiroo/APIPortifolio/main/assets/id-5/img.svg"
        }
    ]

    return (
        <section className='projectsContainer'>
            <h1 data-aos="fade-up">Projetos</h1>
            <div className='projectArea'>
                <div className='cardGrid' data-aos="fade-up">
                    <ul>
                        {projects.map((project) => (
                                <div className='card'>
                                    <div className='cardImage'>
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className='cardContent'>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className='tecsContainer'>
                                            {project.technologies.map((tech) => (
                                                <img src={tech.img} alt={tech.name} style={{ width: '30px', height: '30px' }}></img>
                                            ))}
                                        </div>
                                        <div className='buttonsContainer'>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

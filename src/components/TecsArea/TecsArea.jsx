import React from 'react';

export default function TecsArea() {

    const [tecnologia, setTecs] = React.useState({
        name: "",
        description: ""
    });

    function handleName(name, description){
        setTecs({name: name, description: description});
    }


    const tecs = [
        {
            "name": "JavaScript",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
            "description": "JavaScript é uma linguagem de programação versátil e essencial para o desenvolvimento web. Utilizada tanto no front-end quanto no back-end, ela permite criar interfaces dinâmicas e interativas. Com JavaScript, é possível manipular o DOM, responder a eventos do usuário, e integrar APIs, proporcionando uma experiência de usuário fluida. Além disso, com frameworks como React e bibliotecas como Node.js, JavaScript se tornou uma tecnologia fundamental para a criação de aplicações modernas e escaláveis."
        },
        {
            "name": "CSS",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg",
            "description": "CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas da web. Ela permite o controle da aparência visual de elementos HTML, definindo cores, layouts, tipografia e espaçamento. Com CSS, é possível criar desde designs simples até interfaces complexas e responsivas, adaptando-se a diferentes dispositivos e tamanhos de tela."
        },
        {
            "name": "HTML",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg",
            "description": "HTML (HyperText Markup Language) é a linguagem de marcação base para a construção de páginas web. Ele define a estrutura e o conteúdo de uma página, organizando elementos como texto, imagens, links e vídeos. HTML é essencial para a criação de qualquer website, funcionando como a base sobre a qual CSS e JavaScript aplicam estilos e funcionalidades."
        },
        {
            "name": "React",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
            "description": "React é uma biblioteca JavaScript para construir interfaces de usuário dinâmicas e componentes reutilizáveis. Ele permite o desenvolvimento de aplicações web interativas e escaláveis, com atualizações rápidas no DOM por meio de seu sistema de renderização eficiente."
        },
        {
            "name": "Sass",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
            "description": "Sass é um pré-processador de CSS que permite o uso de variáveis, aninhamentos e funções, tornando o código CSS mais organizado e eficiente. Ele facilita o desenvolvimento de estilos complexos e melhora a manutenção em projetos de grande escala."
        },
        {
            "name": "Bootstrap",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
            "description": "Bootstrap é um framework front-end que facilita a criação de layouts responsivos e móveis rapidamente. Com componentes prontos, como botões e grids, ele acelera o desenvolvimento de interfaces, garantindo compatibilidade entre dispositivos e navegadores."
        },
        {
            "name": "Tailwind",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
            "description": "Tailwind é um framework CSS utilitário que permite criar designs diretamente no HTML, com classes prontas para controle de espaçamento, cores e alinhamento. Ele oferece grande flexibilidade e agilidade na criação de interfaces personalizadas, mantendo o código organizado."
        },
        {
            "name": "Figma",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
            "description": "Figma é uma ferramenta de design colaborativa usada para criar interfaces e protótipos de alta fidelidade. Ideal para trabalho em equipe, permite a criação de layouts e fluxos de interface, além de facilitar a interação entre designers e desenvolvedores com seus recursos de compartilhamento em tempo real."
        },
        
        {
            "name": "Git",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
            "description": "Git é um sistema de controle de versão distribuído que permite a colaboração em projetos de desenvolvimento de software. Com Git, é possível rastrear alterações, reverter para versões anteriores e trabalhar em equipe de forma eficiente."
        },
        {
            "name": "GitHub",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
            "description": "GitHub é uma plataforma de hospedagem de código baseada em Git, que permite controle de versão, colaboração em projetos e compartilhamento de repositórios. É uma ferramenta essencial para desenvolvedores, facilitando o trabalho em equipe e o gerenciamento de projetos open-source."
        },
        {
            "name": "Node",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
            "description": "Node.js é um ambiente de execução JavaScript do lado do servidor. Ele permite a criação de aplicações web escaláveis e eficientes, utilizando uma arquitetura orientada a eventos e não bloqueante, ideal para aplicativos em tempo real."
        },
        {
            "name": "Python",
            "img": "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            "description": "Python é uma linguagem de programação de alto nível, amplamente utilizada para desenvolvimento web, automação, análise de dados e aprendizado de máquina. É conhecida por sua sintaxe clara e legibilidade, facilitando o aprendizado e a colaboração."
        }
    ];


    return (
        <section className="container-tecs" id="skills">
            <h1  data-aos="fade-down">Conhecimentos</h1>
            <div className="container" data-aos="fade-up">
                <div className="text-area">
                    <h2 data-aos="fade-left">{tecnologia.name ? tecnologia.name : "Tecnologias que tenho domínio"}</h2>
                    <div>
                        <p data-aos="fade-right">{tecnologia.description ? tecnologia.description : "Clique em uma das tecnologias ao lado para descobrir suas funcionalidades, aplicações práticas e como elas podem potencializar seus projetos"}</p>
                        <h5 data-aos="fade-down">{tecnologia.description ? "" : "Clique e veja suas funções!"}</h5>
                    </div>
                </div>
                <div className="grid-area">
                    {tecs.map((tech) => ( 
                        <div className="card-tecs" key={tech.name} onClick={() => handleName(tech.name, tech.description)}  data-aos="fade-up">
                            <img src={tech.img} alt={tech.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

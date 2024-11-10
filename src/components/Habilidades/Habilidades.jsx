import React from 'react'
import CodeIcon from '../../assets/img/codeicon.svg';
import ComputerIcon from '../../assets/img/computericon.svg';
import DataIcon from '../../assets/img/dataicon.svg';


export default function Habilidades() {
  return (
    <section className='habilidadesContainer'>
        <h1 data-aos="fade-up">Serviços</h1>
        <div className='servicosContainer'>
            <div className='servico' data-aos="fade-right">
                <img src={CodeIcon} alt="" />
                <h2>Desenvolvimento Web</h2>
                <p>Sou um desenvolvedor web especializado em criar experiências digitais inovadoras e funcionais. Trabalho com uma variedade de tecnologias e frameworks para entregar sites e aplicativos responsivos, otimizados e com uma ótima experiência do usuário. </p>
            </div>
            <div className='servico'  data-aos="fade-up">
                <img src={ComputerIcon} alt="" />
                <h2>UX/UI Design</h2>
                <p>Sou designer UX/UI com foco na criação de interfaces intuitivas e envolventes que proporcionem uma experiência positiva para o usuário. Meu trabalho é guiado por princípios de design centrado no usuário, com o objetivo de transformar ideias em soluções visuais que sejam ao mesmo tempo funcionais e atraentes.</p>
            </div>
            <div className='servico'  data-aos="fade-left">
                <img src={DataIcon} alt="" />
                <h2>Data Science</h2>
                <p>Sou cientista de dados com experiência em transformar dados brutos em insights acionáveis, utilizando técnicas de análise estatística, aprendizado de máquina e visualização. Meu objetivo é ajudar empresas e projetos a tomarem decisões informadas, baseadas em dados precisos e análises profundas.</p>
            </div>
        </div>
    </section>
  )
}

import React from 'react'
import PhotoAbout from '../../assets/img/photoabout.svg'
import ComputerUserIcon from '../../assets/img/computerusericon.svg'

export default function AboutMe() {
  return (
    <section className="container-about" id="about-me">
                <div className="container-photo" data-aos="fade-right">
                    <img src={PhotoAbout} alt="Victor André Lopes Brasileiro" />
                </div>
                <div className="container-text" data-aos="fade-left">
                    <h2>Sobre Mim <span><img src={ComputerUserIcon} alt="About Me Icon" /></span></h2>
                    <p>
                        Olá, meu nome é Victor André Lopes Brasileiro, tenho 19 anos e sou estudante de <span style={{ fontWeight: 'bold' }}>Ciência da Computação</span> na Universidade Federal de Alagoas (UFAL - IC). Desde pequeno, sempre fui apaixonado pela computação, e hoje tenho a oportunidade de trabalhar com o que sempre sonhei. Sou desenvolvedor web com ênfase em <span style={{ fontWeight: 'bold' }}>React.js</span> e também tenho experiência em <span style={{ fontWeight: 'bold' }}>Data Science</span>.
                    </p>

                    <p>
                        Busco constantemente novos desafios que me permitam aplicar e expandir meus conhecimentos. Sou <span style={{ fontWeight: 'bold' }}>comunicativo</span>, <span style={{ fontWeight: 'bold' }}>colaborativo</span> e valorizo o <span style={{ fontWeight: 'bold' }}>trabalho em equipe</span>, pois acredito que a diversidade de ideias enriquece o resultado final. Estou sempre atualizado sobre novas tecnologias e técnicas, focando em aprimorar minha <span style={{ fontWeight: 'bold' }}>criatividade</span>, <span style={{ fontWeight: 'bold' }}>resolução de problemas</span> e <span style={{ fontWeight: 'bold' }}>pensamento crítico</span>, fundamentais para o desenvolvimento de soluções inovadoras.
                    </p>

                    <p>
                        Estou animado para contribuir em projetos significativos e crescer profissionalmente, sempre com a meta de entregar resultados de qualidade e impactar positivamente as equipes com as quais trabalho.
                    </p>
                </div>
            </section>
  )
}

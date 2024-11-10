import GitHubIcon from '../../assets/img/githubicon.svg';
import LinkedInIcon from '../../assets/img/likedinicon.svg';
import InstagramIcon from '../../assets/img/instagramicon.svg';
import MaozinhaIcon from '../../assets/img/maozinha.svg';
import React, { useState, useEffect } from 'react'

/**
 * WordChanger component gradually displays a word one character at a time.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.word - The word to be displayed character by character.
 * @param {number} [props.speed=50] - The speed at which characters are displayed (in milliseconds).
 * @returns {JSX.Element} The rendered component.
 */

const WordChanger = ({ word, speed = 50 }) => {
    const [displayedWord, setDisplayedWord] = useState('');

    useEffect(() => {
        setDisplayedWord('');
        let index = -1;
        const intervalId = setInterval(() => {
            index++;
            if (index < word.length) {
                setDisplayedWord((prev) => prev + word[index]);
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [word, speed]);

    return <span>{displayedWord}</span>;
};

function Hero() {
    const words = ['web', 'react'];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setCurrentWord(words[(wordIndex + 1) % words.length]);
        }, 8000);

        return () => clearInterval(intervalId);
    }, [words]);

    return (
        <>
            <section className='heroContainer'>
                <div className="container-text">
                    <div className="row1">
                        <h2>hi <span><img src={MaozinhaIcon} alt="maozinha" /></span> i'm victor!</h2>
                    </div>
                    <div className="row2">
                        <h1>
                            <WordChanger word={currentWord} speed={300} />
                        </h1>
                        <div className="container-links">
                            <a href="https://www.linkedin.com/in/victorbrasileirooo/"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                            <a href="https://www.instagram.com/victorbrasileiroo/"><img src={InstagramIcon} alt="Instagram" /></a>
                            <a href="https://github.com/VictorBrasileiroo"><img src={GitHubIcon} alt="GitHub" /></a>
                        </div>
                    </div>
                    <div className="row3">
                        <h1>developer</h1>
                    </div>
                    <div className="row4">
                        <p>Desenvolvedor web que cria <span>soluções</span> digitais, com foco em <span>inovação, desempenho e experiência de usuário</span>.</p>
                    </div>
                </div>
                <div className="container-card">
                    <div className="card"></div>
                </div>
            </section>
        </>
    );
}

export default Hero;

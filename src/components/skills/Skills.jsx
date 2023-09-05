import style from './Skills.module.css'
import { motion, } from "framer-motion"
import javascript from '../../assets/img/javascript.png'
import node from '../../assets/img/node.png'
import express from '../../assets/img/express.png'
import sequelize from '../../assets/img/sequelize.png'
import postgre from '../../assets/img/postgre.png'
import react from '../../assets/img/react.png'
import redux from '../../assets/img/redux.png'
import angular from '../../assets/img/angular.png'
import mongo from '../../assets/img/mongo.png'
import css from '../../assets/img/css.png'
import html from '../../assets/img/html.png'
import typescript from '../../assets/img/typescript.png'
import git from '../../assets/img/git.png'
import bootstrap from '../../assets/img/bootstrap.png'
import mysql from '../../assets/img/mysql.png'
import ngrx from '../../assets/img/ngrx.png'
import AOS from 'aos'
import { useEffect, useState } from "react"


const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [isHovered, setIsHovered] = useState(false);
    const [languageName, setLanguageName] = useState('');


    return (
        <div className={style.container} id='skills'>
            <div className={style.title} data-aos="zoom-in">
                <motion.h1
                    className={style.titleRepeated}
                >
                    Skills
                </motion.h1>
                <motion.h1
                    className={style.principalTitle}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 7, repeat: Infinity }}
                >Skills</motion.h1>
            </div>
            <div className={style.containerSkills}>
                <div className={style.secondContainerSkills}>
                    <ul>
                        <motion.li data-aos="zoom-in"
                        ><motion.img onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Javascript');
                        }}
                            onMouseLeave={() => setIsHovered(false)} src={javascript} alt="Javascript" /> <p>{languageName === 'Javascript' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={node} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Node');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Node" /> <p>{languageName === 'Node' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={express} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Express');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Express" /> <p>{languageName === 'Express' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={sequelize} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Sequelize');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Sequelize" /> <p>{languageName === 'Sequelize' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={postgre} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('PostgreSQL');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="PostgreSQL" /> <p>{languageName === 'PostgreSQL' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={react} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('React');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="React" /> <p>{languageName === 'React' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={redux} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Redux');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Redux" /> <p>{languageName === 'Redux' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={angular} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Angular');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Angular" /> <p>{languageName === 'Angular' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={ngrx} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('NgRx');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="NgRx" /> <p>{languageName === 'NgRx' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={mongo} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('MongoDB');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="MongoDB" /> <p>{languageName === 'MongoDB' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={css} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('CSS');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="CSS" /> <p>{languageName === 'CSS' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={html} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('HTML');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="HTML" /> <p>{languageName === 'HTML' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={typescript} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Typescript');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Typescript" /> <p>{languageName === 'Typescript' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src={git} onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Git');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Git" /> <p>{languageName === 'Git' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Bootstrap');
                        }}
                            onMouseLeave={() => setIsHovered(false)} src={bootstrap} alt="Bootstrap" /> <p>{languageName === 'Bootstrap' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('MySQL');
                        }}
                            onMouseLeave={() => setIsHovered(false)} src={mysql} alt="MySQL" /> <p>{languageName === 'MySQL' && isHovered ? languageName : null}</p></motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
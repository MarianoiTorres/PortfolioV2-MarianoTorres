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
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Javascript');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={javascript} alt="Javascript" /> <p>{languageName === 'Javascript' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Node');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={node} alt="Node" /> <p>{languageName === 'Node' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Express');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={express} alt="Express" /> <p>{languageName === 'Express' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Sequelize');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={sequelize} alt="Sequelize" /> <p>{languageName === 'Sequelize' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('PostgreSQL');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={postgre} alt="PostgreSQL" /> <p>{languageName === 'PostgreSQL' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('React');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={react} alt="React" /> <p>{languageName === 'React' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Redux');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={redux} alt="Redux" /> <p>{languageName === 'Redux' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Angular');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={angular} alt="Angular" /> <p>{languageName === 'Angular' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('NgRx');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={ngrx} alt="NgRx" /> <p>{languageName === 'NgRx' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('MongoDB');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={mongo} alt="MongoDB" /> <p>{languageName === 'MongoDB' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('CSS');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={css} alt="CSS" /> <p>{languageName === 'CSS' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('HTML');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={html} alt="HTML" /> <p>{languageName === 'HTML' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Typescript');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={typescript} alt="Typescript" /> <p>{languageName === 'Typescript' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Git');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={git} alt="Git" /> <p>{languageName === 'Git' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('Bootstrap');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={bootstrap} alt="Bootstrap" /> <p>{languageName === 'Bootstrap' && isHovered ? languageName : null}</p></motion.li>
                        <motion.li data-aos="zoom-in"
                            onMouseEnter={() => {
                                setIsHovered(true);
                                setLanguageName('MySQL');
                            }}
                            onMouseLeave={() => setIsHovered(false)}><img src={mysql} alt="MySQL" /> <p>{languageName === 'MySQL' && isHovered ? languageName : null}</p></motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
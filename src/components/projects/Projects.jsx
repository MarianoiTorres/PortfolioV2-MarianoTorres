import style from './Projects.module.css'
import { motion } from "framer-motion"
import { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';


const Projects = () => {

    const [isHovered, setIsHovered] = useState(false)
    const [projectName, setProjectName] = useState('')

    return (
        <div className={style.container} id='projects'>
            <div className={style.title} data-aos="zoom-in">
                <motion.h1
                    className={style.titleRepeated}
                >
                    Mis Proyectos
                </motion.h1>
                <motion.h1
                    className={style.principalTitle}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 7, repeat: Infinity }}
                >Mis Proyectos</motion.h1>
            </div>
            <div className={style.containerProjects}>
                <motion.div className={style.projectsDiv}>
                    <motion.div className={style.projectTitle} >
                        <div className={style.titleProject} data-aos="fade-right"><b>Proyecto Personal</b><p>Trello Clone</p></div>
                        <div className={style.info} data-aos="fade-right">
                            <p>Angular</p>
                            <p>Express</p>
                            <p>Typescript</p>
                            <p>NgRx</p>
                            <p>MongoDB</p>
                        </div>
                    </motion.div>
                    <div className={style.containerImage} data-aos="fade-left">
                        <div className={style.linksDiv}>
                            <a href='https://github.com/MarianoiTorres/Trello-Clone' target='_blank' className={style.button}>
                                <AiFillGithub className={style.icon} />
                            </a>
                            <a href='https://www.linkedin.com/posts/mariano-torres-1b717b236_angular-mongodb-typescript-activity-7102061860497031171-PcRA?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.button}>
                                <AiFillLinkedin className={style.icon} />
                            </a>
                            <a href='https://trello-clone-two-rouge.vercel.app/' target='_blank' className={style.button}>
                                <BiLinkExternal className={style.icon} />
                            </a>
                        </div>
                        <motion.div
                            className={style.imageOrGif}

                            onMouseEnter={() => {
                                setIsHovered(true)
                                setProjectName('trello')
                            }}
                            onMouseLeave={() => { setIsHovered(false) }}
                        >
                            {
                                isHovered && projectName === 'trello'
                                    ? <motion.img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTE5YjdxbTY3dXp1OTFiajVlOWl2OTlyejYwMWZmOGc4NXI2czhxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xD2LpyyJBLisrFlYnx/giphy.gif'
                                        key='trelloGif'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 1 }}
                                    />
                                    : <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1693277282/1_udblnq.png'
                                        key='trelloImg'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 0.3 }}
                                    />
                            }
                        </motion.div>
                    </div>
                    <motion.div className={style.projectInfo} data-aos="fade-right">Aplicacion para la gestión de proyectos y tareas. Permite crear tableros con listas y tarjetas que representan tareas. Puedes mover tarjetas entre listas. Incluye funciones de colaboración en tiempo real y asignación de tareas</motion.div>
                </motion.div>
                <motion.div className={style.projectsDivReverse}>
                    <motion.div className={style.projectTitleReverse}>
                        <div className={style.titleProject} data-aos="fade-left"><b>Proyecto Grupal</b><p>The Chocolate Hub</p></div>
                        <div className={style.infoReverse} data-aos="fade-left">
                            <p>React</p>
                            <p>Express</p>
                            <p>PostgreSQL</p>
                            <p>Sequelize</p>
                            <p>Tailwind</p>
                        </div>
                    </motion.div>
                    <div className={style.containerImage} data-aos="fade-right">
                        <div className={style.linksDivReverse}>
                            <a className={style.button} href='https://github.com/TomasMallar/ProyectoFinalHenry' target='_blank'>
                                <AiFillGithub className={style.icon} />
                            </a>
                            <a className={style.button} href='https://www.linkedin.com/posts/mariano-torres-1b717b236_react-redux-nodejs-activity-7060976571414646784-GtMv?utm_source=share&utm_medium=member_desktop' target='_blank'>
                                <AiFillLinkedin className={style.icon} />
                            </a>
                            <a className={style.button} href='https://deploy-front2.vercel.app/home' target='_blank'>
                                <BiLinkExternal className={style.icon} />
                            </a>
                        </div>
                        <motion.div
                            className={style.imageOrGif}
                            onMouseEnter={() => {
                                setIsHovered(true)
                                setProjectName('chocolat')
                            }}
                            onMouseLeave={() => { setIsHovered(false) }}
                        >
                            {
                                isHovered && projectName === 'chocolat'
                                    ? <motion.img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXQyZHo3ZWlqMW1wcG9wYnZ6d3VqbHpjb3h1bGc5enBseHVjNW9zNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wDPoUyW9a1y6fzFI7R/giphy.gif'
                                        key='chocolateGif'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 1 }}
                                    />
                                    : <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1684008128/Captura_xfpyjd.png'
                                        key='chocolateImg'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 0.3 }}
                                    />
                            }
                        </motion.div>
                    </div>
                    <motion.div className={style.projectInfoReverse} data-aos="fade-left">E-commerce de venta de chocolates, Aceptamos pasarelas seguras de pago como MercadoPago y criptomonedas, y ofrecemos un registro fácil con cuentas de Google o Facebook. Los usuarios pueden valorar y comentar productos.</motion.div>
                </motion.div>
                <motion.div className={style.projectsDiv}>
                    <motion.div className={style.projectTitle}>
                        <div className={style.titleProject} data-aos="fade-right"><b>Proyecto Personal</b><p>Videogames App</p></div>
                        <div className={style.info} data-aos="fade-right">
                            <p>React</p>
                            <p>Express</p>
                            <p>PostgreSQL</p>
                            <p>Sequelize</p>
                            <p>CSS</p>
                        </div>
                    </motion.div>
                    <div className={style.containerImage} data-aos="fade-left">
                        <div className={style.linksDiv}>
                            <a className={style.button} href='https://github.com/MarianoiTorres/PI-Videogames' target='_blank'>
                                <AiFillGithub className={style.icon} />
                            </a>
                            <a className={style.button} href='https://www.linkedin.com/posts/mariano-torres-1b717b236_soyhenry-bootcamp-frontend-activity-7049603269748269056-sVvl?utm_source=share&utm_medium=member_desktop' target='_blank'>
                                <AiFillLinkedin className={style.icon} />
                            </a>
                            <a className={style.button} href='https://pi-videogames-mdjn.vercel.app/' target='_blank'>
                                <BiLinkExternal className={style.icon} />
                            </a>
                        </div>
                        <motion.div
                            className={style.imageOrGif}
                            onMouseEnter={() => {
                                setIsHovered(true)
                                setProjectName('videogames')
                            }}
                            onMouseLeave={() => { setIsHovered(false) }}
                        >
                            {
                                isHovered && projectName === 'videogames'
                                    ? <motion.img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDhlYThsd2g1Mnd0aWI2cnh3bnAzNTZwZmJqYXczeWhuM2I4MWdrbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/18uVlBBk1oxDUqFhGl/giphy.gif'
                                        key='videogamesGif'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 1 }}
                                    />
                                    : <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1684008036/Captura_ktt5bg.png'
                                        key='videogamesImg'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 0.3 }}
                                    />
                            }
                        </motion.div>
                    </div>
                    <motion.div className={style.projectInfo} data-aos="fade-right">Single-page application que consume información sobre videojuegos de la API RAWG, cuenta con las siguiente funcionalidades: -Paginado -Filtrar por género/origen -Ordenar por rating/alfabéticamente-Buscar juegos -Crear un juego</motion.div>
                </motion.div>
                <motion.div className={style.projectsDivReverse}>
                    <motion.div className={style.projectTitleReverse}>
                        <div className={style.titleProject} data-aos="fade-left"><b>Proyecto Personal</b><p>Mi Portfolio</p></div>
                        <div className={style.infoReverse} data-aos="fade-left">
                            <p>React</p>
                            <p>CSS</p>
                            <p>F. Motion</p>
                            <p>AOS</p>
                        </div>
                    </motion.div>
                    <div className={style.containerImage} data-aos="fade-right">
                        <div className={style.linksDivReverse}>
                            <a className={style.button} href='https://github.com/MarianoiTorres/PortfolioV2-MarianoTorres' target='_blank'>
                                <AiFillGithub className={style.icon} />
                            </a>
                            <a className={style.button} href='https://www.linkedin.com/posts/mariano-torres-1b717b236_portfolio-developer-activity-7107028608522579969-QQJ3?utm_source=share&utm_medium=member_desktop' target='_blank'>
                                <AiFillLinkedin className={style.icon} />
                            </a>
                            <a className={style.button} href='https://portfolio-marianotorres.vercel.app/' target='_blank'>
                                <BiLinkExternal className={style.icon} />
                            </a>
                        </div>
                        <motion.div
                            className={style.imageOrGif}
                            onMouseEnter={() => {
                                setIsHovered(true)
                                setProjectName('portfolio')
                            }}
                            onMouseLeave={() => { setIsHovered(false) }}
                        >
                            {

                                isHovered && projectName === 'portfolio'
                                    ? <motion.img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3c5MzhqdzNpcjEzaWY3YzR6NndiNnN3cWtmb3VsYzlzbjdzcDB1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mAsZuiUiHeziqNbtde/giphy.gif'
                                        key='portfolioGif'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 1 }}
                                    />
                                    : <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1693775336/2_knx7vp.png'
                                        key='portfolioImg'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ ease: 'easeIn', duration: 0.3 }}
                                    />
                            }
                        </motion.div>
                    </div>
                    <motion.div className={style.projectInfoReverse} data-aos="fade-left">Un vistazo a mi trayectoria y habilidades en diseño web y desarrollo. Quien soy, Mis proyectos y mi formacion académica.</motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects
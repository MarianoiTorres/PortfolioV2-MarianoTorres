import style from './Projects.module.css'
import { motion, } from "framer-motion"

const Projects = () => {
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
                        <motion.div className={style.projectInfo} data-aos="fade-right">Aplicacion para la gestión de proyectos y tareas. Permite crear tableros con listas y tarjetas que representan tareas. Puedes mover tarjetas entre listas. Incluye funciones de colaboración en tiempo real y asignación de tareas</motion.div>
                    </motion.div>
                    <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1693277282/1_udblnq.png' data-aos="fade-left"></motion.img>
                </motion.div>
                <motion.div className={style.projectsDiv}>
                    <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1684008128/Captura_xfpyjd.png' data-aos="fade-right"></motion.img>
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
                    <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1684008036/Captura_ktt5bg.png' data-aos="fade-left"></motion.img>
                    <motion.div className={style.projectInfo} data-aos="fade-right">Single-page application que consume información sobre videojuegos de la API RAWG, cuenta con las siguiente funcionalidades: -Paginado -Filtrar por género/origen -Ordenar por rating/alfabéticamente-Buscar juegos -Crear un juego</motion.div>
                </motion.div>
                <motion.div className={style.projectsDiv}>
                    <motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1693775336/2_knx7vp.png' data-aos="fade-right"></motion.img>
                    <motion.div className={style.projectTitleReverse}>
                        <div className={style.titleProject} data-aos="fade-left"><b>Proyecto Personal</b><p>Mi Portfolio :D</p></div>
                        <div className={style.infoReverse} data-aos="fade-left">
                            <p>React</p>
                            <p>CSS</p>
                            <p>F. Motion</p>
                            <p>AOS</p>
                        </div>
                    </motion.div>
                    <motion.div className={style.projectInfoReverse} data-aos="fade-left">good</motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Projects
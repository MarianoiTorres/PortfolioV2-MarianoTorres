import style from './Projects.module.css'
import { motion, } from "framer-motion"

const Projects = () => {
    return (
        <div className={style.container}>
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
            <div>
                
            </div>
        </div>
    )
}

export default Projects
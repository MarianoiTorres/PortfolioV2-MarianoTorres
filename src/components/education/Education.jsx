import style from './Education.module.css'
import { motion, } from "framer-motion"
import utn from '../../assets/img/utn.png'
import henry from '../../assets/img/henry2.png'
import Particle from '../particles/particle'

const Education = () => {

    return (
        <div className={style.container} id='education'>
            <div className={style.title} data-aos="zoom-in">
                <motion.h1
                    className={style.titleRepeated}
                >
                    Estudios
                </motion.h1>
                <motion.h1
                    className={style.principalTitle}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 7, repeat: Infinity }}
                >Estudios</motion.h1>
            </div>
            <div className={style.containerEducation}>
                <div className={style.secondContainerEducation} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                    <motion.div
                        className={style.education}
                        transition={{duration: 0.4}}
                        whileHover={{ scale: 1.05, cursor: 'pointer' }}
                    >
                        <b className={style.titleEducation}>Universidad Tecnologica Nacional</b>
                        <motion.img src={utn} alt="UTN" />
                        <b>Tecnicatura Universitaria en Programacion</b>
                        <p>Abr 2022 – Actualidad</p>

                    </motion.div>
                    <motion.div
                        className={style.education}
                        transition={{duration: 0.4}}
                        whileHover={{ scale: 1.05, cursor: 'pointer' }}
                    >
                        <b className={style.titleEducation}>Soy Henry</b>
                        <motion.img src={henry} alt="SOYHENRY"/>
                        <b>Full Stack Web Developer</b>
                        <p>Ene 2023 – Mayo 2023</p>
                    </motion.div>
                </div>
            </div>
            
        </div>
    )
}

export default Education
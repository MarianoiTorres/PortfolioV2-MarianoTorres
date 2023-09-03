import style from './Nav.module.css'
import { motion } from "framer-motion"
import { BiArrowFromRight } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate()

    const backPage = () => {
        navigate('/landing')
    }

    return (
        <div className={style.containerNav}>
            <motion.div
                className={style.backContainer}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                variants={
                    {
                        hidden: { x: -100, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                    }
                }
            >
                <motion.div
                    className={style.back}
                    initial={{ x: 0 }}
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    onClick={backPage}
                >
                    <BiArrowFromRight className={style.iconBack} />
                </motion.div>
            </motion.div>
            <motion.div
                className={style.secondContainer}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1 , x:  0  }}
                transition={{ delay: 0.5, duration: 0.4 }}
                variants={
                    {
                        hidden: { x: -100, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                    }
                }
            >
                <a href="#home">Inicio</a>
                <a href="#about">Sobre Mi</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Proyectos</a>
                <a href="">Educacion</a>
                <a href="">Contacto</a>
            </motion.div>
        </div>
    )
}

export default Nav
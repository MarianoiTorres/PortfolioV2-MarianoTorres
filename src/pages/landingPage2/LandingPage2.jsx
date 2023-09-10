import { motion } from "framer-motion"
import Particle2 from "../../components/particle/Particle2";
import style from './LandingPage2.module.css'
import { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import cv from '../../assets/file/CV.pdf'


const LandingPage2 = () => {
    

    const navigate = useNavigate()

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(true);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, [])

    const redirectPage = () => {
        navigate('/home')
    }

    return (
        <motion.div
            className={style.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", ease: 'easeIn', duration: 0.5 }}
        >
            <Particle2 />
            {visible && <div className={style.containerInfo}>
                <motion.h1
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    variants={
                        {
                            hidden: { x: -300, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }
                    }
                >
                    Mariano Torres
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    variants={
                        {
                            hidden: { x: -300, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }
                    }
                >
                    Full Stack Web Developer
                </motion.p>
                <motion.div
                    className={style.containerButtonsLink}
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
                    transition={{ delay: 0.78 , duration: 0.4 }}
                    variants={
                        {
                            hidden: { x: -300, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }
                    }
                >
                    <a href="https://www.linkedin.com/in/mariano-torres-1b717b236/" target="_blank" className={style.buttonLink}>
                        Linkedin
                    </a>
                    <a href="https://github.com/MarianoiTorres" target="_blank" className={style.buttonLink}>
                        GitHub
                    </a>
                    <a href={cv} download="CV-Mariano Torres.pdf" type="application/pdf" className={style.buttonLink}>
                        CV
                        <AiOutlineDownload className={style.iconDownload}/>
                    </a>
                </motion.div>
            </div>}
            {visible && <motion.div
                className={style.secondContainer}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -50 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                variants={
                    {
                        hidden: { x: -100, opacity: 0 },
                        visible: { x: 0, opacity: 1 }
                    }
                }
            >
                <motion.div
                    className={style.next}
                    initial={{ x: 0 }}
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    onClick={redirectPage}
                >
                    <FiArrowRight className={style.iconNext} />
                </motion.div>
            </motion.div>}
        </motion.div>
    )
}

export default LandingPage2
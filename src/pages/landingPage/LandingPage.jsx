import { motion } from "framer-motion"
import Particle from '../../components/particles/particle'
import style from './landingPage.module.css'
import { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi";


const LandingPage = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [])

    return (
        <motion.div
            className={style.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", ease: 'easeIn', duration: 0.5 }}
        >
            <Particle />
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
                    <a href="" className={style.buttonLink}>
                        Curriculum
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
                >
                    <FiArrowRight className={style.iconNext} />
                </motion.div>
            </motion.div>}
        </motion.div>
    )
}

export default LandingPage
import { useEffect, useState } from 'react'
import style from './Intro.module.css'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'

const Intro = () => {

    const [visible, setVisible] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(false);
        }, 2000);

        const redirectPage = setTimeout(() => {
           navigate('/landing')
        }, 3400)

        return () => clearTimeout(timeoutId);
    }, []);



    return (
        <div className={style.container}>

            <div className={style.containerName}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -50 }}
                    transition={{ delay: 0.1, duration: 1 }}

                    variants={
                        {
                            hidden: { y: -100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }
                    }
                >Mariano </motion.h1>
                <motion.h1

                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -50 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    variants={
                        {
                            hidden: { y: -100, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }
                    }
                >
                    Torres
                </motion.h1>
            </div>
            <motion.div
                className={style.secondContainer}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, duration: 3 }}
            ></motion.div>
        </div>

    )
}

export default Intro
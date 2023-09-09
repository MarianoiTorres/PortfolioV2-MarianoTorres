import { useEffect, useState } from 'react';
import style from './Nav.module.css'
import { motion } from "framer-motion"
import { BiArrowFromRight } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'


const Nav = () => {

    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)

    const backPage = () => {
        navigate('/landing')
    }

    const handleResize = () => {
        setIsMobile(window.innerWidth < 650);
    };

    // Suscribirse al evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);


    useEffect(() => {
        handleResize();
        // Limpia el evento de cambio de tamaño cuando el componente se desmonta
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openMenuHandler = () => {
        setOpenMenu(!openMenu)
    }
    const animate = isMobile && !openMenu
        ? { y: -500 }  
        : { y: 0 };
    return (
        <div className={style.containerNav}>
            {
                isMobile && <GiHamburgerMenu className={style.buttonBurger} onClick={openMenuHandler} />
            }
            
                <motion.div
                    className={style.nav}
                    initial={{ y: 0 }}
                    animate={animate}
                    exit={{y: -100 }}
                    transition={{ ease: 'circOut', duration: 0.3 }}
                >
                    <motion.div className={style.backContainer}>
                        <motion.div className={style.back}>
                            {isMobile
                                ? <motion.div
                                    className={style.containerBackLanding}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.4 }}
                                    variants={
                                        {
                                            hidden: { x: -100, opacity: 0 },
                                            visible: { x: 0, opacity: 1 }
                                        }
                                    }>
                                    <Link to='/landing' className={style.backLandingButton}>Salir</Link>
                                </motion.div>

                                : <motion.di initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.4 }}
                                    variants={
                                        {
                                            hidden: { x: -100, opacity: 0 },
                                            visible: { x: 0, opacity: 1 }
                                        }
                                    }>
                                    <motion.div
                                        className={style.containerIconBack}
                                        initial={{ x: 0 }}
                                        animate={{ x: [0, -5, 0], }}
                                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                                        onClick={backPage}><BiArrowFromRight className={style.iconBack} />
                                    </motion.div>

                                </motion.di>
                            }
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className={style.secondContainer}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        variants={
                            {
                                hidden: { x: -100, opacity: 0 },
                                visible: { x: 0, opacity: 1 }
                            }
                        }
                    >
                        <Link to='home' spy={true} smooth={true}>Inicio</Link>
                        <Link to='about' spy={true} smooth={true}>Sobre Mi</Link>
                        <Link to='skills' spy={true} smooth={true}>Skills</Link>
                        <Link to='projects' spy={true} smooth={true}>Proyectos</Link>
                        <Link to='education' spy={true} smooth={true}>Estudios</Link>
                        <Link to='contact' spy={true} smooth={true}>Contacto</Link>
                    </motion.div>

                </motion.div>
            
        </div>
    )
}

export default Nav
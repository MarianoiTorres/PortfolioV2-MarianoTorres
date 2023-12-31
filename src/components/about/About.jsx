import { easeIn, motion, } from "framer-motion"
import style from './About.module.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react"

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <motion.div className={style.container} id="about">
            <div className={style.title}>
                <div className={style.containerAboutMe} data-aos="zoom-in">
                    <motion.h1
                        className={style.titleRepeated}

                    >
                        Sobre mi
                    </motion.h1>
                    <motion.h1
                        className={style.principalTitle}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 7, repeat: Infinity }}
                    >Sobre mi</motion.h1>
                </div>
                <div className={style.info2} data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="900"
                    data-aos-duration="900">
                    <p className={style.titleInfo}><b>1. </b>¿Quien soy?</p>
                    <p>Soy un desarrollador Web Full Stack en constante crecimiento.
                        <br />
                        Tengo 19 años, soy de Tucumán, Argentina. Desde niño, siempre estuve muy relacionado con la tecnología. En los últimos dos años, descubrí mi pasión por el desarrollo web y lo mucho que disfruto resolver los desafíos que se me presentan.
                    </p>
                </div>
            </div>
            <div className={style.secondContainer}>
                <div className={style.info} data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="1000"
                    data-aos-duration="1000">
                    <p className={style.titleInfo}><b>2. </b>¿Cuales son mis objetivos?</p>
                    <p>
                        Busco adquirir nuevas habilidades y fortalecer las que ya he tenido la oportunidad de aprender. <br /> Deseo conocer y trabajar con personas apasionadas de las cuales pueda aprender, y seguir desarrollando mi carrera en el mundo del desarrollo web.
                    </p>
                </div>
                <div className={style.image} data-aos="fade-up-right">
                    <motion.img initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 7, repeat: Infinity }} src="https://static.vecteezy.com/system/resources/previews/019/900/785/original/3d-render-rocker-cartoon-3d-space-rocket-icon-spaceship-icon-3d-render-of-rocket-on-transparent-background-3d-render-illustration-png.png" alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default About
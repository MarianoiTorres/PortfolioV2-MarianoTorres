import { motion, } from "framer-motion"
import style from './About.module.css'

const About = () => {
    return (
        <motion.div className={style.container}>
            <div className={style.title}>
                <h1>Sobre mi</h1>
                <div className={style.info}>
                    <p>¿Quien soy?</p>
                    <p>Soy un desarrollador Web Full Stack en constante crecimiento.
                        <br />
                        Tengo 19 años y soy de Tucumán, Argentina. Desde niño, siempre estuve muy relacionado con la tecnología. En los últimos dos años, descubrí mi pasión por el desarrollo web y disfruto mucho resolviendo los desafíos que se me presentan.
                    </p>
                </div>
            </div>
            <div className={style.secondContainer}>
                <div className={style.info}>
                    <p>¿Cuales son mis objetivos?</p>
                    <p>
                    Busco adquirir nuevas habilidades y fortalecer las que ya he tenido la oportunidad de aprender. <br /> Deseo conocer y trabajar con personas apasionadas de las cuales pueda aprender, y seguir desarrollando mi carrera en el mundo del desarrollo web.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About
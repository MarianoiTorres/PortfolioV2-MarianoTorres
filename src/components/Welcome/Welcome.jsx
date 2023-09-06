import { motion } from "framer-motion"
import Particle from "../particles/particle"
import style from './Welcome.module.css'

const Welcome = () => {
    return (
        <motion.div className={style.container} id="home">
            <Particle />
            <motion.div className={style.containerTitle}>
                <p className={style.html}>{"<html>"}</p>
                <div className={style.body}>
                    <p>{"<body>"}</p>
                    <p>{"<h1>"}</p>
                </div>
                
                <div className={style.title}>
                    <h1>Bienvenidos</h1>
                    <h2>A mi</h2>
                    <h1>Portfolio</h1>
                </div>

                <div className={style.body}>
                    <p>{"</h1>"}</p>
                    <p>{"</body>"}</p>
                </div>
                <p className={style.html}>{"</html>"}</p>
            </motion.div>
            <div className={style.containerMotiondiv}>
            <motion.div 
            className={style.containerImage}
            initial={{scale: 1}}
            animate={{ scale: [1, 1.1, 1] }}
            exit={{scale: 0}}
            transition={{duration: 7, repeat: Infinity}}
            style={{ transformOrigin: "center center", scale: 1 }}
            >
                <img src="https://www.motionspace.cz/wp-content/uploads/2019/03/ilustracka.png" alt="" />
            </motion.div>
            </div>



        </motion.div>
    )
}

export default Welcome
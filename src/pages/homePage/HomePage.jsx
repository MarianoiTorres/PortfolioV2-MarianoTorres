import { motion,  } from "framer-motion"
import style from './HomePage.module.css'
import Welcome from "../../components/Welcome/Welcome"
import Nav from "../../components/navBar/Nav"
import About from "../../components/about/About"

const HomePage = () => {
    return (
        <motion.div
            className={style.container}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
        >
            <Nav />
            <motion.div>
                <Welcome />
            </motion.div>
            <motion.div>
                <About />
            </motion.div>
        </motion.div>
    )
}

export default HomePage
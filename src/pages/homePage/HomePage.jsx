import { motion } from "framer-motion"
import style from './HomePage.module.css'
import Welcome from "../../components/Welcome/Welcome"

const HomePage = () => {
    return (
        <motion.div
            className={style.container}
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
        >
            <motion.div>
                <Welcome />
            </motion.div>
        </motion.div>
    )
}

export default HomePage
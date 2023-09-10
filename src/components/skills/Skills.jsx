import style from './Skills.module.css'
import { motion, } from "framer-motion"

import AOS from 'aos'
import { useEffect, useState } from "react"


const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    const [isHovered, setIsHovered] = useState(false);
    const [languageName, setLanguageName] = useState('');


    return (
        <div className={style.container} id='skills'>
            <div className={style.title} data-aos="zoom-in">
                <motion.h1
                    className={style.titleRepeated}
                >
                    Skills
                </motion.h1>
                <motion.h1
                    className={style.principalTitle}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 7, repeat: Infinity }}
                >Skills</motion.h1>
            </div>
            <div className={style.containerSkills}>
                <div className={style.secondContainerSkills}>
                    <ul>
                        <motion.li data-aos="zoom-in"
                        ><motion.img onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Javascript');
                        }}
                            onMouseLeave={() => setIsHovered(false)} src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376273/portfolio/javascript_oivdzr.png' alt="Javascript" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Javascript' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376438/portfolio/node_n5hime.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Node');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Node" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease:  'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Node' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376486/portfolio/express_mgj843.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Express');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Express" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease:  'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Express' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376463/portfolio/sequelize_qxyuwh.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Sequelize');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Sequelize" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Sequelize' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376563/portfolio/postgre_jxnzv7.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('PostgreSQL');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="PostgreSQL" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'PostgreSQL' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376570/portfolio/react_ni0xyw.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('React');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="React" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'React' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376585/portfolio/redux_gphyac.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Redux');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Redux" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Redux' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376548/portfolio/angular_qlybre.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Angular');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Angular" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Angular' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376608/portfolio/ngrx_nekolf.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('NgRx');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="NgRx" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'NgRx' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376591/portfolio/mongo_cacgk2.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('MongoDB');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="MongoDB" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'MongoDB' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376599/portfolio/css_mha7qd.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('CSS');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="CSS" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'CSS' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376596/portfolio/html_wj0owy.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('HTML');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="HTML" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'HTML' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376593/portfolio/typescript_ef9jqk.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Typescript');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Typescript" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Typescript' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376602/portfolio/git_lmlqgk.png' onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Git');
                        }}
                            onMouseLeave={() => setIsHovered(false)} alt="Git" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Git' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('Bootstrap');
                        }}
                            onMouseLeave={() => setIsHovered(false)} src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376606/portfolio/bootstrap_lwmx3l.png' alt="Bootstrap" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'Bootstrap' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                        <motion.li data-aos="zoom-in"
                        ><motion.img onMouseEnter={() => {
                            setIsHovered(true);
                            setLanguageName('MySQL');
                        }}
                            onMouseLeave={() => setIsHovered(false)} src='https://res.cloudinary.com/djdqwkavb/image/upload/v1694376604/portfolio/mysql_sgdrht.png' alt="MySQL" /> <motion.p
                                initial={{ opacity: 0 }}
                                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                                transition={isHovered ? { ease: 'easeIn', duration: 0.3 } : null}
                            >{languageName === 'MySQL' && isHovered ? languageName : null}</motion.p>
                        </motion.li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills
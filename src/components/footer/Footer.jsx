import style from './Footer.module.css'
import { Link } from 'react-scroll'
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.copy}>
                <div className={style.footerNavigate}>
                    <Link to='home' spy={true} smooth={true}>Inicio</Link>
                    <Link to='about' spy={true} smooth={true}>Sobre Mi</Link>
                    <Link to='skills' spy={true} smooth={true}>Skills</Link>
                    <Link to='projects' spy={true} smooth={true}>Proyectos</Link>
                    <Link to='education' spy={true} smooth={true}>Estudios</Link>
                    <Link to='contact' spy={true} smooth={true}>Contacto</Link>
                </div>
                <div className={style.copyright}>
                    © 2023 Desarrollado por Mariano Torres.
                    <br />
                    Derechos Reservados.
                </div>
            </div>
            <div className={style.links}>
                <a href="https://www.linkedin.com/in/mariano-torres-1b717b236/" target='_blank' className={style.button}><AiOutlineLinkedin className={style.icon}/></a>
                <a href="https://github.com/MarianoiTorres" target='_blank' className={style.button}><AiFillGithub className={style.icon}/></a>
                <a href="mailto:marianxtorres@gmail.com" target='_blank' className={style.button}><BiLogoGmail className={style.icon}/></a>
            </div>
        </footer>
    )
}

export default Footer
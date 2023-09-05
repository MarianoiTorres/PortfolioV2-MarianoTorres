import style from './Contact.module.css'
import { motion, } from "framer-motion"
import emailjs from 'emailjs-com';
import { useState } from 'react';
const Contact = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitHandler = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                "service_hp31hl5",
                "template_93rbe2h",
                event.target,
                "GQSlXjKIa8g38Q47P"
            )
        //.then((res) => {
        //    handleShow()
        //});
    }

    return (
        <div className={style.container} id='contact'>
            <div className={style.title} data-aos="zoom-in">
                <motion.h1
                    className={style.titleRepeated}
                >
                    Contacto
                </motion.h1>
                <motion.h1
                    className={style.principalTitle}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 7, repeat: Infinity }}
                >Contacto</motion.h1>
            </div>
            <div className={style.containerForm}>
                <div className={style.secondContainerForm} >
                    <form onSubmit={submitHandler} data-aos="fade-up">
                        <p>¡Contactame!</p>
                        <input autocomplete="off" placeholder='Nombre' type="text" name="name" required />

                        <input autocomplete="off" placeholder='Email' type="email" name="email" required />

                        <input autocomplete="off" placeholder='Asunto' type="text" name="subject" required />

                        <textarea placeholder='Mensaje' id="message" name="message" required></textarea>

                        <input className={style.submit} type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
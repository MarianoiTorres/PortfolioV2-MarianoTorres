import Particle from '../../components/particles/particle'
import style from './landingPage.module.css'


const LandingPage = () => {

    return (
        <div className={style.container}>
            <Particle />
            <div className={style.containerInfo}>
                <p>Mariano Torres</p>
            </div>
        </div>
    )
}

export default LandingPage
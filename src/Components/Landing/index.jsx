import styles from './style.module.css'
import Navbar from '../Navbar'
import Caption from "../Caption"

function Landing() {
    return (
        <main id="home" className={styles.landing}>
            <div className={styles.overlay}>
                <Navbar />
                <Caption />
            </div>
        </main>
    )
}

export default Landing;
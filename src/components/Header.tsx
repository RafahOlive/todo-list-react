import styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLogo}>
                <img src={logo} alt="" />
            </div>
        </div>
    )
}
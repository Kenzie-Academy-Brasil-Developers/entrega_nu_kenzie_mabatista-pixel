import  logo  from "../../assets/logo.svg"
import styles from "./styles.module.scss"

export const Header = () => {
    return(
        <header className={styles.headerBox}>
            <div>
                <img className={styles.logo} src={logo} alt="Nu Kenzie Logo" />
            </div>
        </header>
    )
}
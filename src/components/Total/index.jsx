import styles from "./style.module.scss"

export const Total = ({ total }) => {

    return (
        <div className={styles.numberContainer}>
            <div className={styles.numberBox}>
                <h3 className="title3">Valor total:</h3>
                <p className="title3">R${total}</p>
            </div>
            <p className="body"><small>O valor se refere ao saldo</small></p>
        </div>
    )
}
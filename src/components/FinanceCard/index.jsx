import styles from "./style.module.scss"

export const FinanceCard = ({ title, value, type, id, removeNote }) => {

    return (
        <div className={type === "Entrada" ? styles.infoBox : styles.active}>
            <div className={styles.titleBox}>
                <h3 className="title3">{title}</h3>
                <p className="body"><small>{type}</small></p>
            </div>
            <div className={styles.valueBox}>
                <p className="body">{value.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})}</p>
                <button onClick={() => removeNote(id)} className="btn remove">Excluir</button>
            </div>
        </div>
    )
}
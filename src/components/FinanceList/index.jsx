import { FinanceCard } from "../FinanceCard";
import { Total } from "../Total";
import styles from "./style.module.scss"

export const FinanceList = ({ listNotes, removeNote }) => {
    console.log(listNotes)

    return (

        <div className={styles.cardList}>
            <h3 className="title3">Resumo financeiro</h3>

            {listNotes.length > 0 ? (

                <ul>
                    {listNotes.map((note) => {
                        const { title, value, type, id } = note;

                        return <FinanceCard key={id} id={id} title={title} value={value} type={type} removeNote={removeNote} />
                    })}
                </ul>


            ) :
                <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
            }
        </div>

    )
}
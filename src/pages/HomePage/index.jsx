import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { Header } from "../../components/Header"
import { Total } from "../../components/Total"
import styles from "./style.module.scss"

export const HomePage = ({ listNotes, addNote, removeNote }) => {

    const total = listNotes.reduce((acc, note) => 
    note.type === "Entrada" ?  acc + note.value : acc - note.value
     , 0)

    return (
        <>
            <Header />
            <main className={styles.container}>
                <div className={styles.flexBox}>
                    <FinanceForm addNote={addNote} />
                    <FinanceList listNotes={listNotes} removeNote={removeNote} />
                </div>
                    {listNotes.length > 0 && <Total total={total} />}
            </main>
        </>
    )
}
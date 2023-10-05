import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { Header } from "../../components/Header"
import { Total } from "../../components/Total"
import styles from "./style.module.scss"

export const HomePage = ({ listNotes, addNote, removeNote }) => {
    const total = listNotes.length > 0 ? listNotes.reduce((acc, note) => acc + note.value, 0) : 0;
    return (
        <>
            <Header />
            <main className={styles.container}>
                <FinanceForm addNote={addNote} />
                <FinanceList listNotes={listNotes} removeNote={removeNote} />
            </main>
            {/* <Total/> */}
            {listNotes.length > 0 && <Total total={total} /> }
        </>
    )
}
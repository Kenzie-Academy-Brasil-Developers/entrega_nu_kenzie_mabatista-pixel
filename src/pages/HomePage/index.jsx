import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
// import { Footer } from "../../components/Total"
import { Header } from "../../components/Header"
import { Total } from "../../components/Total"
import styles from "./style.module.scss"

export const HomePage = ({ listNotes, addNote, removeNote }) => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <FinanceForm addNote={addNote} />
                <FinanceList listNotes={listNotes} removeNote={removeNote} />
            </main>
            {listNotes.length > 0 ? <Total/> : null }
        </>
    )
}
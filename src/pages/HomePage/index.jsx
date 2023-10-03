import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import styles from "./style.module.scss"

export const HomePage = ({listNotes, addNote, removeNote}) => {
    return(
        <>
        <Header/>
        <main className={styles.container}>
            <FinanceForm addNote={addNote}/>     
            <FinanceList listNotes={listNotes} removeNote={removeNote} />
        </main>  
        <Footer listNotes={listNotes}/>
        </>
    )
}
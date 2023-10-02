import { FinanceForm } from "../../components/FinanceForm"
import { FinanceList } from "../../components/FinanceList"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const HomePage = ({listNotes, addNote, removeNote}) => {
    return(
        <>
        <Header/>
        <main>
            <FinanceForm addNote={addNote}/>     
            <FinanceList listNotes={listNotes} removeNote={removeNote} />
        </main>  
        {/* <Footer/> */}
        </>
    )
}
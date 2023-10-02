import { FinanceCard } from "../FinanceCard"

export const FinanceList = ({ listNotes, removeNote }) => {

    return (
        <div>
            <h3 className="title3">Resumo financeiro</h3>
            <ul>
                {listNotes.map((note) => {
                    const { title, value, type, id } = note;

                    return <FinanceCard key={id} id={id} title={title} value={value} type={type} removeNote={removeNote} />
                })}
            </ul>
        </div>
    )
}
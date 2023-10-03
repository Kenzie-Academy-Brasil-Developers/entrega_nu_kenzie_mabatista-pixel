import { FinanceNumber } from "../../FinanceNumber";

export const Footer = ({ listNotes }) => {

    const getSum = listNotes.length > 0 ? listNotes.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.value;
    })

        : 0;

    return (
        <footer>
            <FinanceNumber listNotes={listNotes}/>
        </footer>
    )
}
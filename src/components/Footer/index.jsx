export const Footer = ({ listNotes }) => {

    const getSum = listNotes.length > 0 ? listNotes.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.value;
    }, 0)

        : 0;

    return (
        <footer>
            <div>
                <h2>Valor total:</h2>
                <p>R${getSum}</p>
            </div>
            <p><small>O valor se refere ao saldo</small></p>
        </footer>
    )
}
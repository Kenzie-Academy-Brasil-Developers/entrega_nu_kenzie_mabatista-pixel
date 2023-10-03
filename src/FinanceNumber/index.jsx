import styles from "./style.module.scss"

export const FinanceNumber = ({ listNotes }) => {

    // const getSum = listNotes.length > 0 ? listNotes.reduce((accumulator, currentObject) => {
    //     return accumulator + currentObject.value;
    // }, 0 )

    //     : 0;

    const getTotalValue = () =>  {
        return listNotes.reduce((total, item) => total + item.value, 0);
    }

    const getSum = getTotalValue(); 

    return (
        <>
            <div className={styles.numberContainer}>
                <div className={styles.numberBox}>
                    <h3 className="title3">Valor total:</h3>
                    <p className="title3">R${getSum}</p>
                </div>
                <p className="body"><small>O valor se refere ao saldo</small></p>
            </div>
        </>

    )
}
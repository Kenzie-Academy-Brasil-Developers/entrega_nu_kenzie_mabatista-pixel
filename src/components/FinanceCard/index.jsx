export const FinanceCard = ({ title, value, type, id, removeNote }) => {

    // const formatedValue = value.toLocaleString('pt-BR', {
    //     style: 'currency',
    //     currency: 'BRL'
    // });

    return (
        <div>
            <div>
                <h3 className="title3">{title}</h3>
                <p className="body"><small>{type}</small></p>
            </div>
            <div>
                <p className="body">R$ {value}</p>
                <button onClick={() => removeNote(id)} className="btn remove">Excluir</button>
            </div>
        </div>
    )
}
export const FinanceCard = ({ title, value, type, id, removeNote }) => {
    return (
        <div>
            <div>
                <h3 className="title3">{title}</h3>
                <p className="body"><small>{type}</small></p>
            </div>
            <div>
                <p className="body">{value}</p>
                <button onClick={() => removeNote(id)}  className="btn remove">Excluir</button>
            </div>
        </div>

    )
}
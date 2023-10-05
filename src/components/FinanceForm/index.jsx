import { useState } from "react"
import { Input } from "../Input"
import { Select } from "../Select"
import styles from "./style.module.scss"

export const FinanceForm = ({addNote}) => {

    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")

    const selectOptions = [
        { label: "Entrada", value: "Entrada" },
        { label: "Despesa", value: "Despesa" }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();

        addNote(title, value, type )

        setTitle("")
        setValue("")
    }


    return (
        <section className={styles.formBox}>

            <form onSubmit={handleSubmit}>

                <Input label="Descrição" placeholder="Digite aqui sua descrição" type="text" id="ftext" value={title} setValue={setTitle} />
                <p className="helper"><small>Ex: Compra de roupas</small></p>

                <Input label="Valor (R$)" placeholder="1" type="text" id="fnumber" value={value} setValue={setValue} />


                <Select label="Tipo de valor" value={type} id="fselect" setValue={setType} options={selectOptions} />

                <button className="btn">Inserir valor</button>

            </form>

        </section>
    )
}
import { useState } from "react"
import { Input } from "../Input"
import { Select } from "../Select"

export const FinanceForm = () => {

    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")

    const selectOptions = [
        { label: "Entrada", value: "entrada" },
        { label: "Despesa", value: "despesa" }
    ]


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, message, type })

        setTitle("")
        setValue("")
        setType("Entrada")
    }

    return (
        <section>

            <form onSubmit={handleSubmit}>

                <Input label="Descrição" placeholder="Digite aqui sua descrição" type="text" id="ftext" value={title} setValue={setTitle} />
                <p><small>Ex: Compra de roupas</small></p>

                <Input label="Valor (R$)" placeholder="1" type="number" id="fnumber" value={value} setValue={setValue} />


                <Select label="Tipo de valor" value={type} id="fselect" setValue={setType} options={selectOptions} />

                <button>Inserir valor</button>

            </form>

        </section>
    )
}
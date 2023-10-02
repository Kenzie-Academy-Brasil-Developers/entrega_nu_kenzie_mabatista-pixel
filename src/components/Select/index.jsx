export const Select = ({ options, label,  value, setValue, id }) => {
    return (
        <div>
            <label className="label" htmlFor={id}>{label}</label>
            <select className="select" id={id} value={value} onChange={(e) => setValue(e.target.value)} >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div >
    )
}
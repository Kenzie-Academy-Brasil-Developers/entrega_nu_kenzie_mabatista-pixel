export const Input = ({ label, id, type, placeholder, value, setValue }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={id} id={id} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

    )
}
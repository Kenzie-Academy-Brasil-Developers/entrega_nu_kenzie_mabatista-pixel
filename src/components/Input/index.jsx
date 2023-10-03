import styles from "./style.module.scss"

export const Input = ({ label, id, type, placeholder, value, setValue }) => {
    return (
        <div>
            <label className="label" htmlFor={id}>{label}</label>
            <input className={styles.inputBox} type={type} name={id} id={id} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

    )
}
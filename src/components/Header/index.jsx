import  logo  from "../../assets/logo.svg"

export const Header = () => {
    return(
        <header>
            <div>
                <img className="logo" src={logo} alt="Nu Kenzie Logo" />
            </div>
        </header>
    )
}
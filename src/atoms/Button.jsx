

const Button = ({onClick, classname, children}) => {

    return <button onClick={onClick} className={classname}>{children}</button>
}

export default Button;
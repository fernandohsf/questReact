const Button = (props) => {
    const alertMessage = () => {
        alert(`A label desse botão é ${props.label}`)
    }
    return(
        <button onClick={alertMessage} >Clique para ver a label</button>
    )
}

export default Button
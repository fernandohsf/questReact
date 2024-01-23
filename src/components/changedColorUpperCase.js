const ChangedColorUpperCase = (props) => {
    return(
        <>
            {props.children}
            <h2>Texto Alterado</h2>
            <div className="text" style={{color: props.color, textTransform: 'uppercase'}}>
                {props.children}
            </div>
        </>
    )
}
export default ChangedColorUpperCase
const Button = ({ changeCount, text, delta }) => {
    const handleClick = (e) => changeCount(e.target.dataset.delta)

    return (
        <button onClick={handleClick()} data-delta={delta}>{text}</button>
    )
}

export default Button

const Button = ({name, value, onClick}) => {

    const handleClick = () => {
        onClick(prevState => prevState + 1);
    }
    return (
        <>
            <button onClick={handleClick}>{name}</button>
        </>
    )
}
export default Button;
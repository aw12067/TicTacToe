const Square = ({value,onClick}) =>{
    const colorClassName = value ==='X'?'text-green':'text-orange';
    return (
    <>
        <button 
            type="button" 
            className={`square ${colorClassName}`} 
            onClick={onClick}>
            {value}
        </button>
    </>
    );
};

export default Square;
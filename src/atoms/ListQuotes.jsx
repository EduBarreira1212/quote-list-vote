
const ListQuote = ({array}) => {
    return (
        <>
            <li>
                {array.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </li>
        </>
    );
        
}

export default ListQuote;
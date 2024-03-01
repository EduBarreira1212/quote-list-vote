
const Quote = ({children}) => {
    return (
        <div id="div-quote">
            <p id="p-quote">Author: {children.author}</p>
            <p id="p-quote">Text: {children.text}</p>
        </div>
    );
}

export default Quote;
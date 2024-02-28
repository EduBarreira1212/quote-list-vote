import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";


const QuoteInput = () => {
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [quote, setQuote] = useState();
    const [quoteList, setQuoteList] = useState([]);

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleClick = () => {
        console.log(quote);
        setQuote({author: author, text: text});
        console.log(quote);
        setQuoteList((prev) => [...prev, quote])
        console.table(quoteList);
    }

    return (
        <>
            <section className="quote-input-section hidden">
                <Input className="input-author" onChange={handleAuthorChange} placeholder="Author"/>
                <Input className="input-text" onChange={handleTextChange} placeholder="Text"/>
                <Button classname="btn" onClick={handleClick}>Send</Button>
            </section>
        </>
    );
}

export default QuoteInput;
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";


const QuoteInput = () => {
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [quote, setQuote] = useState();
    const [quoteList, setQuoteList] = useState([]);

    
    const handleClick = () => {
        setAuthor(document.querySelector(".input-author").value);
        setText(document.querySelector(".input-text").value);
        setQuote({author: author, text:text});
    }

    return (
        <>
            <section className="quote-input-section hidden">
                <Input className="input-author" placeholder="Author"/>
                <Input className="input-text" placeholder="Text"/>
                <Button classname="btn" onClick={handleClick}>Send</Button>
            </section>
        </>
    );
}

export default QuoteInput;
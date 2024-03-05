import { useState } from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Quote from "../atoms/Quote";
import VoteButtons from "../atoms/VoteButtons";


const QuoteInput = () => {
    const [author, setAuthor] = useState();
    const [text, setText] = useState();
    const [quote, setQuote] = useState({author: "", text: ""});
    const [quoteList, setQuoteList] = useState([]);

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value);
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleClick = () => {
        setQuote({author: author, text: text});
        setQuoteList((prev) => [...prev, quote]);
    }

    return (
        <>
            <section className="quote-input-section hidden">
                <Input className="input-author" onChange={handleAuthorChange} placeholder="Author"/>
                <Input className="input-text" onChange={handleTextChange} placeholder="Text"/>
                <VoteButtons/>
                <Button classname="btn" onClick={handleClick}>Send</Button>
                {quoteList.map((item, index) => (
                <Quote key={index}>{item}</Quote>
                ))}
            </section>
        </>
    );
}

export default QuoteInput;
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Quote from "../atoms/Quote";
import VoteButtons from "../atoms/VoteButtons";
import axios from 'axios';


const QuoteInput = () => {
    const [note, setNote] = useState();
    const [quoteList, setQuoteList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://type.fit/api/quotes");
                setQuoteList(response.data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchData();
    }, []);


    const handleVoteClick = (event) => {
        setNote(event.target.value);
    }

    const handleClick = () => {
        //setQuoteList((prev) => [...prev, quote]);
    }

    return (
        <>
            <section className="quote-input-section hidden">
                
                <VoteButtons onClick={handleVoteClick}/>
                <Button classname="btn" onClick={handleClick}>Send</Button>
                {quoteList.sort((a, b) => b.note - a.note).map((item, index) => (
                <Quote key={index}>{item}</Quote>
                ))}
            </section>
        </>
    );
}

export default QuoteInput;
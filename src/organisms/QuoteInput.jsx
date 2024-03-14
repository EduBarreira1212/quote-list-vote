import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Quote from "../atoms/Quote";
import VoteButtons from "../atoms/VoteButtons";
import axios from 'axios';


const QuoteInput = () => {
    const [note, setNote] = useState();
    const [quoteList, setQuoteList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://type.fit/api/quotes");
                setQuoteList(response.data);
                setIsLoading(false)
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading ...</div>
    }

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex === quoteList.length - 1 ? 0 : prevIndex + 1));
      };

    const handleVoteClick = (event) => {
        setNote(event.target.value);
    }

    const handleClick = () => {
        //setQuoteList((prev) => [...prev, quote]);
        console.log(quoteList[currentIndex]);
        nextItem();
    }

    return (
        <>
            <section className="quote-input-section hidden">
                <Quote>{quoteList[currentIndex]}</Quote>
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
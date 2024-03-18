import Header from "../atoms/Header";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const HeaderOrganisms = () => {
    const handleClick = (event) => {
        document.querySelector(".quote-input-section").classList.remove("hidden");
        event.target.classList.add("hidden");
    }
    return (
        <>
            <Header className="App-header">
                <Paragraph className="header-p">Welcome to the quote list vote</Paragraph>
                <Button classname="start-btn btn" onClick={handleClick}>Start voting</Button>
            </Header>
        </>
    );
}

export default HeaderOrganisms;
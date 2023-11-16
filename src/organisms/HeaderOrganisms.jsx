import Header from "../atoms/Header";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const HeaderOrganisms = () => {
    const handleClick = () => {
        document.querySelector(".quote-input-section").classList.remove("hidden");
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
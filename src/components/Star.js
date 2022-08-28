import "./Star.css";
import logo from "../star.svg";
import { updateStarred } from "../api/fetch";

const Star = (props) => {
    const handleClick = () => {
        props.updateStarred(props.index, !props.starred);//set the UI while we wait for a response
        updateStarred(props.id, !props.starred)
        .then(response => props.updateStarred(props.index, response.starred))
        .catch(e => props.updateStarred(props.index, !props.starred))//undo UI if response error
    }

    return (
        <section className="star">
            <img src={logo} className={props.starred ? "starred" : "unstarred"} alt="star" onClick={handleClick} />
        </section>
    )
}

export default Star
import "./Card.css";
import Star from "./Star";
import Address from "./Address";

const Card = (props) => {
    return (
        <article className="card">
            {props.image && <img className="image" src={props.image} alt="brand" />}
            <header><label>Company Name: </label>{props.name}</header>
            <Star {...props} />
            <section className="description"><label>Description: </label>{props.description}</section>
            <Address {...props.address} />
        </article>
    )
}

export default Card
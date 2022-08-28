import "./Card.css";

const Address = ({ address1, address2, city, state, postalCode }) => {
    return (
        <section className="address">
            <label>Address:</label>
            {address1}{address2 && `, ${address2}`}
            <div>{city}, {state} {postalCode}</div>
        </section>
    )
}

export default Address
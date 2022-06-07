const Bed = (props) => {
    return (
        <div className="room Bed " id={`bed-${props.number}`}>
            <h1>Bed {props.number}</h1>
        </div>
    );
}

export default Bed;
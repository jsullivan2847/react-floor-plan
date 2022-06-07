const Bath = (props) => {
    return (
        <div className="room Bath" id={`${props.size}-bath`}>
            <h1>{props.size} Bath</h1>
        </div>
    )
}

export default Bath;
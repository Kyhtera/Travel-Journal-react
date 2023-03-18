
import "../styles/Card.css"
import pin from "../img/location-pin.svg"

function Card(props) {
    return (
        <div className="card">
            <div className="card-img-section">
                <img src={props.data.imageUrl} className="card-img" height="168" width="125"></img>
            </div>

            <div className="card-info">
                <div>
                    <span> <img src={pin} className="location-pin-icon" ></img></span>
                    <span className="location"> {props.data.location} </span>
                    <a className="map" target="blank" href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card-title"> {props.data.title} </div>
                <div className="card-date"> {props.data.startDate} - {props.data.endDate}</div>
                <div className="card-description"> {props.data.description}</div>


            </div>






        </div>
    )
}


export default Card
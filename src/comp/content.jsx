export default function Content(props) {
    return (
        <>
        <article className=" layout-content">
            <div className="img-container">
                <img src={props.img} className="content-img" alt="destination" />
            </div>
            <div className="content-text">
                <p className="location"><img src ="location.png" alt="location logo" className="location-logo"/>{props.location} <a href={props.googleMapsUrl} className="map-link">View on Google Maps</a></p>
                <h1 className="title">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>            
        </article>     
         </>
    )
}

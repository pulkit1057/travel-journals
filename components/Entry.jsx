export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.object.img.src} alt={props.object.img.alt} />
            </div>

            <div>
                <img src="../src/assets/marker.png" alt="map marker icon" height="12px" />
                <span>{props.object.country}</span>
                <a href={props.object.googleMapsLink}>View on Google Maps</a>
                <h2>{props.object.title}</h2>
                <p className="date">{props.object.dates}</p>
                <p className="discription">
                {props.object.text}
                </p>
            </div>


        </article>
    )
}
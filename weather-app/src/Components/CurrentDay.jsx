import "../css/CurrentDay.css"
import "../css/Weather.css"

export default function CurrentDay({city, date, avgtemp, maxtemp, mintemp, maxwind, chance_of_rain, totalprecip, icon}){
    return(
        <div id="weather-container" className="semitransparent-bg">
            <h1>{city}</h1>
            <div id="weather-content">
                <div id="icon-container">
                    <img src={icon}></img>
                    <div className="temp-content">
                        <p className="max-temp">{maxtemp}°</p>
                        <p> / </p>
                        <p className="min-temp">{mintemp}°</p>
                    </div>
                </div>
                <div className="wind-rain-content">
                    {chance_of_rain > 0
                    ? <div className="rain-content">
                        <p>{chance_of_rain}%</p>
                        <p>{totalprecip}mm</p>
                    </div>
                    : null}
                    {/* <div> */}
                        <p className="test">{maxwind}km/h</p>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
import "../css/CurrentDay.css"
import "../css/Weather.css"

export default function CurrentDay({city, date, avgtemp, maxtemp, mintemp, maxwind, chance_of_rain, totalprecip, icon}){
    return(
        <div id="weather-container" className="semitransparent-bg">
            <h1>{city}</h1>
            <div id="weather-content">
                <div id="icon-container">
                    <img src={icon}></img>
                    <div className="rain-content" style={{visibility: chance_of_rain > 0 ? 'visible': 'hidden'}}>
                        <p>{chance_of_rain}%</p>
                        <p>{Math.round(totalprecip*10)/10}mm</p>
                    </div>
                </div>
                <div className="wind-temp-content">
                    <div className="temp-content">
                        <p className="max-temp">{maxtemp}°</p>
                        <p> / </p>
                        <p className="min-temp">{mintemp}°</p>
                    </div>
                    <p>{maxwind}km/h</p>
                </div>
            </div>
        </div>
    )
}
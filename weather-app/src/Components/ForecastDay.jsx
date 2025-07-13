import "../css/ForecastDay.css"
import "../css/Weather.css"

export default function ForecastDay({date, maxtemp, mintemp, chance_of_rain, totalprecip, icon}){
    return(
        <div id="forecast-content" className="semitransparent-bg">
            <div>
                <img src={icon}></img>
                {chance_of_rain > 0 
                ? <div>
                    <p>{chance_of_rain}</p>
                    <p>{totalprecip}</p>
                </div>
                : null}
            </div>
            <div className="temp-content">
                <p className="max-temp">{maxtemp}°</p>
                <p> / </p>
                <p className="min-temp">{mintemp}°</p>
            </div>
        </div>
    )
}
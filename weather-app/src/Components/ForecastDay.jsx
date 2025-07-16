import "../css/ForecastDay.css"
import "../css/Weather.css"

export default function ForecastDay({date, maxtemp, mintemp, chance_of_rain, totalprecip, icon}){
    return(
        <div className="forecast-content semitransparent-bg">
            <div>
                <img src={icon}></img>
                <div className="temp-content">
                <p className="max-temp">{maxtemp}°</p>
                <p> / </p>
                <p className="min-temp">{mintemp}°</p>
            </div>
            </div>
            {chance_of_rain > 0 
                ? <div>
                    <p>{chance_of_rain}%</p>
                    <p>{totalprecip}mm</p>
                </div>
                : null}
        </div>
    )
}
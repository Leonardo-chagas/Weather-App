import "../css/ForecastDay.css"
import "../css/Weather.css"

export default function ForecastDay({date, maxtemp, mintemp, chance_of_rain, totalprecip, icon}){
    const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const getDayOfWeek = (day) => {
        const dayOfWeek = new Date(day).getDay();
        return isNaN(dayOfWeek) ? null : days[dayOfWeek];

    }
    return(
        <div className="forecast-container semitransparent-bg">
            <h2 className="day-of-week">{getDayOfWeek(date)}</h2>
            <div className="forecast-content">
                <div>
                    <img src={icon}></img>
                    <div className="temp-content">
                    <p className="max-temp">{maxtemp}°</p>
                    <p> / </p>
                    <p className="min-temp">{mintemp}°</p>
                </div>
                </div>
                <div className="rain-content" style={{visibility: chance_of_rain > 0 ? 'visible': 'hidden'}}>
                    <p>{chance_of_rain}%</p>
                    <p>{Math.round(totalprecip*10)/10}mm</p>
                </div>
            </div>
        </div>
    )
}
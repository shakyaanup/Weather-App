import "./style.scss";

const WeatherCard = ({data}) => {
	const { sys, weather, name, main, wind, timezone, dt, rain }  = data;
	const condition = weather && weather[0];

	const localTime = new Date((dt + timezone) * 1000);
	const dateString = localTime.toLocaleDateString("en-US", {
		weekday: "short",
		day: "numeric",
		month: "short",
	});

	const timeString = localTime.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true
	});

	const rain1h = rain?.["1h"] || 0;

	return (
		<div className="weather-card">
			<div className="weather-card__top">
				<div className="weather-card__top-left">
					<span className="weather-card__time">{dateString}<br/>{timeString}</span>
					<div className="weather-card__place">
						<h2 className="weather-card__city">{name}</h2>
						<span className="weather-card__country">{sys.country}</span>
					</div>
				</div>

				<div className="weather-card__detail">
					<p>Precipitation <strong>{rain1h}mm</strong></p>
					<p>Humidity <strong>{main?.humidity}%</strong></p>
					<p>Wind <strong>{Math.round(wind?.speed)}m/s</strong></p>
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
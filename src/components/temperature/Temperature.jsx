import "./style.scss";

const Temperature = ({data}) => {
	const { weather, main }  = data;
	const condition = weather && weather[0];

	return (
		<div className="temperature">
			<div className="temperature__main">{Math.round(main?.temp)} <span>ºC</span></div>
			<div className="temperature__description">
				Feels like {Math.round(main?.feels_like)}. {condition?.description}. Min temp {Math.round(main?.temp_min)}. Max temp {Math.round(main?.temp_max)}
			</div>
		</div>
	);
}

export default Temperature;
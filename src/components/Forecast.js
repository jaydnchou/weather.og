import React from 'react';
import backgroundImage from '../images/leaves2.jpg'

const Forecast = () => {
	return (
		<div>
			<img src={backgroundImage} alt="background" />
			<div className="card-img-overlay">
				<h1>-3&deg;</h1>
			</div>

			<div className="carousel slide" data-ride="carousel">

				<ol className="carousel-indicators">
					<li className="active" data-slide-to="0"></li>
					<li data-slide-to="1"></li>
				</ol>

				<div className="carousel-inner">
					<div className="carousel-item active">
						<h2>Pretty, but cold as fuck</h2>
					</div>
					<div className="container carousel-item">
						<div className="section">
							<ul>
								<li className="weekly-forecast">Monday</li>
								<li className="weekly-forecast">Tuesday</li>
								<li className="weekly-forecast">Wednesday</li>
								<li className="weekly-forecast">Thursday</li>
								<li className="weekly-forecast">Friday</li>
								<li className="weekly-forecast">Saturday</li>
								<li className="weekly-forecast">Sunday</li>
							</ul>
							<ul>
								<li className="weekly-forecast">-1&deg;</li>
								<li className="weekly-forecast">2&deg;</li>
								<li className="weekly-forecast">5&deg;</li>
								<li className="weekly-forecast">0&deg;</li>
								<li className="weekly-forecast">-1&deg;</li>
								<li className="weekly-forecast">0&deg;</li>
								<li className="weekly-forecast">4&deg;</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Forecast;

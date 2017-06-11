import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.setState = this.setState.bind(this);
  }

  render() {
    return (
      <section className="weather">
        <h1>Weather</h1>
        <ul className="el" >
          <h1>La Temperatura</h1>
          <p>{this.state.temp}</p>
          <h1>La Ciudad</h1>
          <p>{this.state.city}</p>
        </ul>
      </section>
    );
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      // debugger;
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  }

  componentDidUpdate(){
    this.getWeather.bind(this)();
  }
  // temp: position.main.temp,
  // city: position.name

  getWeather (){
    let url =  `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=bcb83c4b54aee8418983c2aff3073b3b`;
    var request = new XMLHttpRequest();


    request.open('GET', url, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = JSON.parse(request.responseText);
        this.setState({temp: resp.main.temp, city: resp.name});
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
  }


}





export default Weather;

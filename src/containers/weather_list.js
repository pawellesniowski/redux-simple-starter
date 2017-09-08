import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map.js';

class WeatherList extends Component {

    renderWeather(cityData){

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp-273);
        const pressure = cityData.list.map(item => item.main.pressure);
        const humidity = cityData.list.map(item=>item.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name} border="black">
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" unit="°C"/></td>
                <td><Chart data={pressure} color="green" unit="hPa"/></td>
                <td><Chart data={humidity} color="black" unit="%"/></td>
                
            </tr>  
        );
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Celsius)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {weather: state.weather}; // this comes from reducers/index.js 
}
export default connect(mapStateToProps)(WeatherList);

// const mapStateToProps = ({weather})=>{weather};  // EX6 syntax.
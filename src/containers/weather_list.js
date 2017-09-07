import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData){

        console.log("tutaj: ", cityData);

        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(item => item.main.pressure);
        const humidity = cityData.list.map(item=>item.main.humidity);


        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                
                <Chart data={temps} color="yellow"/>
                <Chart data={pressure} color="yellow"/>
                <Chart data={humidity} color="yellow"/>
                
            </tr>

            
        );
    }
    
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
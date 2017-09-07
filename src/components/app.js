import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div><SearchBar /></div>
        <div><WeatherList /></div>
      </div>
    );
  }
}

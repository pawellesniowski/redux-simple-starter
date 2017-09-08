import React, { Component } from 'react';


class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 9,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    };

    render(){
        return(
            <div ref="map" /> // we can refer to it by:  this.refs.map
        );
    };
};

export default GoogleMap;
import React, {Component} from 'react';

// 2. connecting with redux and fetching weather method form actions folder
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
//

// 1. create render method in class
// 2. create a controlled form component, with constuctor(props){....}
    // 2.a  controlled field is hwen value of field is set by state
    // we change state and it sets value of field 
    // typing into input changes STATE,then State  changes value of input
// 3.  update value form state.term

class SearchBar extends Component{
    // to create controlled form we need to set our 
    // state (component state, not the redux state -this is separete)
    // whenever our input is changed.

    // to set aur stae up - we need to initialised IT inside constructor
        constructor (props){
            super(props); // WTF is this, check this !!
            this.state = { term : '' }; // searched value will be this.state.term

            // to chain "this" form render to onInputChange method:
            this.onInputChange = this.onInputChange.bind(this);
            this.onFormSubmit = this.onFormSubmit.bind(this);
        }
    // 

    // change state function, onInputChange:
        onInputChange(event){
            this.setState({ term: event.target.value })
        }
    //

    // subbmiting the form, without default events, set fetching weather data(API):
        onFormSubmit(event){
            event.preventDefault(); // prevent default (reloading etc.)
            if (this.state.term !== ''){
                this.props.fetchWeather(this.state.term); //calling fetchWeather (actions)
                this.setState({ term: ''}); // updating state after subbmiting form(cleaning state, to be empty like afert initiation)
            }            
        }

    // simple render method:
        render(){
            return (
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input 
                        placeholder="Get a forecast"
                        className="form-control"
                        value={this.state.term} // the imputs value comes from state
                        onChange={this.onInputChange} // whenever someone change input, run this function
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>
                
            );
        };// end of render
}; // end of class SearchBar

// creating connection action-react-redux:
//1
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
//2
export default connect(null, mapDispatchToProps)(SearchBar);

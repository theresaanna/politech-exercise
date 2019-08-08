import React, { Component } from 'react';
import './App.css';
import keys from './api_keys';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import loadGifs from './reducers/gifs';

const store = createStore(loadGifs);

const Gifs = connect(state => state)(
  ({ data }) => (<div>Data: {data}</div>)
);

class App extends Component {
  componentDidMount() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${ keys.giphy_api_key }&s=cat&weirdness=4`)
      .then(response => response.json())
      .then(data => {
        store.dispatch({type: 'initial_load', payload: JSON.stringify(data)});
      })
  }
  render() {
    return (
      <div id="app-container">
        <Provider store={store}>
          <input type="text" name="search"/>
          <Gifs />
        </Provider>
      </div>
    )
  }
}

export default App;

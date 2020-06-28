import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SliderNowPlaying from './SliderNowPlaying';
import SliderLatest from "./SliderLatest";
import SliderUpcoming from "./SliderUpcoming";

ReactDOM.render(
  <React.StrictMode>
        <div className="App">
      <h1>Now Playing</h1>
      <SliderNowPlaying />
      <h1>Latest</h1>
      <SliderLatest />
      <h1>Upcoming</h1>
      <SliderUpcoming/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

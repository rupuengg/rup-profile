import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import customData from './profile-data.json';

ReactDOM.render(
  <div>
    <App profile={customData} />
    <Footer />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();

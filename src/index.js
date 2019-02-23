import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv'
import App from './App';

dotenv.config()
//import * as serviceWorker from './serviceWorker';

console.log("GITHUB_TOKEN: " + process.env.REACT_APP_GITHUB_TOKEN)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

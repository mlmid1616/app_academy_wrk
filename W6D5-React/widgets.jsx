import React from 'react';
import ReactDOM from 'react-dom';
// import Congrats from './congrats';
import Root from './frontend/root';


document.addEventListener("DOMContentLoaded", () => {
	 const main = document.getElementById("main");



  // ReactDOM.render(<Root />, main);
  ReactDOM.render(<Root />, main);
  // the first argument is pint to the import Root which points to the export of that file
});

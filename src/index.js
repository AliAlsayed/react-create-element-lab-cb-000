import React from 'react';
import ReactDOM from 'react-dom';

// IMPORTANT!!!! uncomment the lines below to make your tests work
/*
ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact
*/
const title = React.createElement('h1', {}, 'An Awesome Person')
const description = React.createElement('p', {}, 'Who is learning React')
const meInReact = React.createElement('div', {className: 'me'}, )

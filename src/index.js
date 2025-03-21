import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {render} from 'react-dom'



/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


root.render(<ArticleList articles = {articles} />, document.getElementById('container'))*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//root.render(<ArticleList articles = {articles} />, document.getElementById('container'))
/*
function Root() {
  return (
      <React.StrictMode>
          <App />
      </React.StrictMode>
  )
}
render(<Root />, document.getElementById('container'))

*/




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

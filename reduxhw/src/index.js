import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./reducers/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    {/* هنا عشان اي احد يبغى معلومات يروح الستور يسير الشغل في صفحه تبعو والاوت بوت بالاب */}
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

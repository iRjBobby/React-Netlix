import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './componenets/header';
import Section1 from './componenets/section1';
import Section2 from './componenets/section2';
import Section3 from './componenets/section3';
import Section4 from './componenets/section4';
import Section5 from './componenets/section5';
import Section6 from './componenets/section6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
  </React.StrictMode>
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './state-drills/Accordion';
import STORE from './state-drills/Store';

ReactDOM.render(<Accordion sections={STORE}/>, document.getElementById('root'));
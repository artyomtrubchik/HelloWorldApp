import ReactDOM from 'react-dom';
import React from 'react';
import MainComp from './components/mainComp';
import jQuery from 'jquery';
global.$ = jQuery;

ReactDOM.render(
    <MainComp url="/contacts"/>,
    document.getElementById('content')
);

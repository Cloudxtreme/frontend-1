import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store';
import'./themes/default/css/main.scss';

if (document.querySelectorAll('#header').length) {
    require.ensure([], () => {
        const Header = require('./module/default/components/header').default;
        render(<Provider store={store}><Header /></Provider>, document.getElementById("header"))
    }, 'header');
}



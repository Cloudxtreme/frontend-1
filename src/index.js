import React from 'react'
import { render } from 'react-dom'
import './themes/default/css/main.scss';
import '../node_modules/react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';

// all required modules
require('./module/common/entry');

// add some better method for changing build for environment
if (process.env.NODE_ENV === 'production') {
    // production only modules
} else {
    // development only modules
}

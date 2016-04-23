import './themes/default/css/main.scss';
import '../node_modules/react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';

// add applications here, each should have own dom-react rendering
require('./module/common/entry');

// add some better method for changing build for environment
if (process.env.NODE_ENV === 'production') {
    // production only requirements
} else {
    // development only requirements
}

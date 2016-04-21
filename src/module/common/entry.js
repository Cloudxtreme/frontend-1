import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { history, store } from '../../store';

if (document.querySelectorAll('#common').length) {
    //
    require.ensure([], () => {
        const App = require('./containers/App').default;
        render(<Provider store={store}>
            <App history={history} />
        </Provider>, document.getElementById("common"))
    }, 'common');
}

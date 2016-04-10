import React from 'react';
import CustomMessage from '../containers/CustomMessage';

class Header extends React.Component {

    componentWillMount() {
        console.log('will mount');
    }

    componentDidMount() {
        console.log('did mount');
    }

    render() {
        return (
            <div>
                <h1>Example Website</h1>
                <CustomMessage />
            </div>
        );
    }
}

export default Header;
import React, { PropTypes } from 'react'

const Welcome = ({name, onClick}) => (
    <div>Welcome {name} <a href="javascript:" onClick={onClick}>Click Me</a></div>
);

export default Welcome;
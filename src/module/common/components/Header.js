import React, { PropTypes, Component } from 'react'

export default class Header extends Component {
    
    render() {
        const { title, subtitle } = this.props;

        return (
            <div>
                <div class="page-header">
                    <h1>{ title } { subtitle ? <small>{subtitle}</small> : '' }</h1>
                </div>
            </div>
        );
    }
};


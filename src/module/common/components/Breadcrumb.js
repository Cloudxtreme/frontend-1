import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class Breadcrumb extends Component {

    render() {
        const { breadcrumbs } = this.props;
        let links = breadcrumbs.map((breadcrumb) => {
            if (breadcrumb.active) {
                return breadcrumb.title
            }
            return <Link to={breadcrumb.href}>{ breadcrumb.title }</Link>
        });
        return (
            <ol className="row breadcrumb">
                { links.map((link, i) =>
                    <li key={i} className={link.active ? 'active' : ''}>
                        { link }
                    </li>)}
            </ol>
        );
    }
};

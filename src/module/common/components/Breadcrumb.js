import React, { PropTypes, Component } from 'react'

export default class Breadcrumb extends Component {

    render() {
        const { breadcrumbs } = this.props;
        let links = breadcrumbs.map((breadcrumb) => {
            if (breadcrumb.active) {
                return breadcrumb.title
            }
            return <a href={breadcrumb.href}>{ breadcrumb.title }</a>
        });
        return (
            <ol className="breadcrumb">
                { links.map((link, i) =>
                    <li key={i} className={link.active ? 'active' : ''}>
                        { link }
                    </li>)}
            </ol>
        );
    }
};

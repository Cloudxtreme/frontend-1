module.exports = {
    path: 'store',
    indexRoute: {
        component: require('./containers/Store').default
    },
    childRoutes: [
        {
            path: ':slug',
            component: require('./containers/Product').default
        }
    ]
};
/**
 * All routes for the application
 *
 */
export const rootRoute = {
    component: 'div',
    childRoutes: [
        {path: '/', indexRoute: {component: require('./module/common/containers/Home').default}},
        // add module specific routes here
        require('./module/common/routes'),
        require('./module/store/routes')
    ]
};

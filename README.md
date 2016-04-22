# ReactJS + Redux + WebPack + ES6 + Bootstrap

Expect this to change in the near future as javascript and I continue to evolve.

## Getting Started

```
git clone git@github.com:brady-vitrano/frontend.git
cd frontend
npm install
npm start
# http://localhost:4000/
```

## React + Redux

Unfortunately, there are tons of strategies for building projects with these libraries. My goals are simple, 
create a project that has some structure for enterprise environments and can be adapted overtime. Changes such as
themes, AB testing, feature flags, and separate builds for various destinations.

## Running a Build

To run a production build

```
npm run build:prod
```

All build files will be placed in the `dist` directory with the following structure:

* `dist/` - all common files such as (svg, ttf, eot)
* `dist/<version>/latest.css` - where version is pulled from `package.json`
* `dist/<version>/latest.js` 

This forces all your static files to live in the root path of your website. However, what if you want to host on a CDN?
ie. http://cdn.example.com
 
You can add the environment variable `TARGET_URL` and it will be appended to the front of your public path.

```
TARGET_URL=http://cdn.example.com npm run build:prod
```

You can now upload all `dist` files into your CDN site with all common files at the root and a version path for latest resources.
ie. http://cdn.example.com/1.0.0/latest.css

Now, if you want to use a separate public path such as a `/static` directory, you can change the public path in `webpack.prod.js`  
`publicPath: TARGET_URL + '/static'`.

An alternative method without changing the webpack config is to simply set `TARGET_URL` with `/static`. 

 
## Clean URLs

So you want clean URLs for a single page application?

```
TARGET_URL=dist npm run build:prod
docker-compose up
# visit http://192.168.99.100:4000/
# optionally: http://192.168.99.100:4000/about
```

I am using Docker here to demonstrate the settings required on the server.

You can see the example configurations in the `docker` folder. I have two different containers to mimic assets and a website. 
I opted to proxy pass all assets to the `assets` container. This is for convenience because Docker VM can be on various IPs.
See `docker/website/files/usr/share/nginx/html/index.html`.

You will notice, I am using URL paths without a trailing slash. If you would like trialing slash, 
you can change the redirect in `docker/website/files/etc/nginx/conf.d/default.conf`.
 
 
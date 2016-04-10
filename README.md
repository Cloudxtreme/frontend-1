# ReactJS + Redux + WebPack + Bootstrap

I hate javascript build tools but here is a combination that works for me for now.
Expect this to change in the near future as javascript continues to evolve.

## Build

```
git clone git@github.com:brady-vitrano/frontend.git
cd frontend
npm install
export PATH=node_modules/.bin:$PATH
# development with live reload
npm run start
# or production
npm run build:prod
```

## Directory Structure

```
├── src # place all source here, including SASS, CSS, JS, HTML Templates 
│   ├── index.js # entry file for the app
│   ├── module # instead of a folder for all my reducers, I am using modules to keep it organized
│   │   ├── default # site wide stuff
│   │   │   ├── actionTypes.js
│   │   │   ├── actions.js
│   │   │   ├── components
│   │   │   │   ├── header.js
│   │   │   │   └── welcome.js
│   │   │   └── containers
│   │   │       └── CustomMessage.js
│   │   └── example # custom module supplies it's own reducers, actions, components and containers
│   │       ├── actionTypes.js
│   │       ├── actions.js
│   │       ├── components
│   │       │   └── example.js
│   │       ├── containers
│   │       │   └── example.js
│   │       └── reducers.js
│   ├── reducers.js # combine reducers from all modules together. why not make this dynamic? for simplicity
│   ├── store.js # the only state store for the website
│   └── themes # again, keeping themes in modules
│       └── default
│           └── css
│               └── main.scss # using sass
└── webpack.config.js # one file for both development and production settings. It's a mess of duplication.
```

## Other Commands

```
npm run analyzer
# upload stats.json to http://webpack.github.io/analyse/
webpack --display-modules --display-chunks
``` 
 

## Manual Installation of Node Modules

```
sudo npm install webpack -g
npm init
npm install --save-dev webpack 
npm install --save react react-dom babel-core babel-preset-react babel-preset-es2015
npm install --save babel-loader html-loader imports-loader
npm install --save redux react-redux
# styles
npm install --save jquery bootstrap-loader bootstrap-sass
npm install --save css-loader node-sass resolve-url-loader sass-loader style-loader url-loader
# font awesome
npm install --save font-awesome font-awesome-loader
# other
npm install --save-dev webpack-dev-server
npm install --save-dev clean-webpack-plugin extract-text-webpack-plugin
# Other NPM Tools: tether
# See: Bootstrap Loader Examples
```


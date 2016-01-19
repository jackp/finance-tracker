# finance-tracker
Simple finance tracker. Example of architecture for stand-alone React application

![image](https://cloud.githubusercontent.com/assets/1334476/12412136/7d04f1d0-be52-11e5-9aa9-eafc4ef063e9.png)

## Description
This simple project is meant to show the basic architecture used to create a stand-alone React application (no routing, no server-side rendering).

Combines the following technologies:
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [React-Redux](https://github.com/rackt/react-redux)
- [Redux-actions](https://github.com/acdlite/redux-actions)
- [Redux-devtools](https://github.com/gaearon/redux-devtools)
- [Redux-form](http://erikras.github.io/redux-form)
- [Babel](http://babeljs.io/)
- [Webpack](http://webpack.github.io/)
- [Semantic-UI](http://semantic-ui.com/)

## Installation
`npm install`

## Usage
- `npm start`
  - Starts development server on `PORT` (defaults to 3000)
  - To use Redux DevTools, toggle with `CTRL-H`
- `npm run build`
  - Creates production distribution in the `/dist` folder
- `npm run deploy`
  - Runs `build` command, then automatically deploys to GitHub pages using the `gh-pages` branch
  
## TODOS
- [ ] Add mocha unit tests
- [ ] Add karma integration tests
- [ ] Add additional optimizations to production bundle
- [ ] Add detailed documentation about file structure
- [ ] Add detailed documentation about how to create actions and reducers

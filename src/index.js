/* eslint-disable react/jsx-filename-extension, react/no-render-return-value, no-undef */

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const root = document.getElementById('root')
const render = Component => ReactDOM.render(
  <AppContainer>
    <Component />
  </AppContainer>,
  root,
)
render(App)
if (module.hot) module.hot.accept('./components/App', () => render(App))
registerServiceWorker()

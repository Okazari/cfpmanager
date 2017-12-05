import { combineReducers } from 'redux'

import channels from './channels'
import groups from './groups'
import router from './router'

export default combineReducers({
  channels,
  groups,
  router,
})

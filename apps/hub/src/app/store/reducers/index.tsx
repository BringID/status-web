import { combineReducers } from 'redux'

import bringID from './bring'

const rootReducer = combineReducers({
  bringID,
})

export type AppRootState = ReturnType<typeof rootReducer>
export default rootReducer

import { combineReducers } from 'redux'

import { taskReducer1 } from './orders-2'
import { taskReducer2 } from './orders-1'
import {viewReducer} from "./view";

export const rootReducer = combineReducers({

  task1: taskReducer1,
  task2: taskReducer2,
  view:viewReducer
})

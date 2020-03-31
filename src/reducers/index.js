import { combineReducers } from "redux";
import { MachineReducer } from "./Machine";
export const rootReducer = combineReducers({ machine: MachineReducer });

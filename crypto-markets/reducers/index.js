import { combineReducers } from 'redux';
import coins from './coins';
import coinInfo from './coinInfo'
import coinData from './coinHistory'

const rootReducer = combineReducers({
    coins,
    coinInfo,
    coinData
})

export default rootReducer

import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import userReducer from './user/userReducer'
import cartReducer from './cart/cartReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitlelist:['cart']
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer
});

export default persistReducer(persistConfig,rootReducer)
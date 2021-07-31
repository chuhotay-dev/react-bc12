// Import hàm khởi tạo store redux
import { createStore, combineReducers } from 'redux';
import shoesShopReducer from './reducers/ShoesShopReducer';

// Khởi tạo root reducer (quản lý các reducers)
const rootReducer = combineReducers({
  shoesShopReducer, // shoesShopReducer: shoesShopReducer
});

// Khởi tạo store (quản lý root reducer)
const store = createStore(rootReducer);

export default store;

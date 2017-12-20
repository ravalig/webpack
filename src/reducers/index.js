import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { fetchProductsListSuccess, fetchProductsListHasErrored, fetchProductsListIsLoading } from './reducer_products';
import { fetchProductDetailSuccess, fetchProductDetailHasErrored, fetchProductDetailIsLoading } from './reducer_products';
import { createProductHasErrored, createProductIsLoading } from './reducer_products';
import { updateProductHasErrored, updateProductIsLoading } from './reducer_products';

import AssetLookupReducer from './reducer_asset_lookup';


const rootReducer = combineReducers({

    fetchProductsListSuccess,
    fetchProductsListHasErrored,
    fetchProductsListIsLoading,

    fetchProductDetailSuccess,
    fetchProductDetailHasErrored,
    fetchProductDetailIsLoading,

    createProductIsLoading,
    createProductHasErrored,

    updateProductIsLoading,
    updateProductHasErrored,

    asset_lookup: AssetLookupReducer,
    form: formReducer
});

export default rootReducer;

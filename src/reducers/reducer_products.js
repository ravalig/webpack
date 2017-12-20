import _ from "lodash";

import {
    FETCH_PRODUCTS_LIST_HAS_ERRORED,
    FETCH_PRODUCTS_LIST_IS_LOADING,
    FETCH_PRODUCTS_LIST_SUCCESS,

    FETCH_PRODUCT_DETAIL_HAS_ERRORED,
    FETCH_PRODUCT_DETAIL_IS_LOADING,
    FETCH_PRODUCT_DETAIL_SUCCESS,

    CREATE_PRODUCT_HAS_ERRORED,
    CREATE_PRODUCT_IS_LOADING,

    UPDATE_PRODUCT_HAS_ERRORED,
    UPDATE_PRODUCT_IS_LOADING,

} from "../actions/types";

export function fetchProductsListHasErrored(state = "", action) {
    switch(action.type) {

        case FETCH_PRODUCTS_LIST_HAS_ERRORED:
            return action.error;

        default:
            return state;
    }
}

export function fetchProductsListIsLoading(state = false, action) {
    switch(action.type) {

        case FETCH_PRODUCTS_LIST_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function fetchProductsListSuccess(state = {}, action) {
    switch(action.type) {

        case FETCH_PRODUCTS_LIST_SUCCESS:
            return _.mapKeys(action.payload.data.products, "id");

        default:
            return state;
    }
}

export function fetchProductDetailHasErrored(state = "", action) {
    switch(action.type) {

        case FETCH_PRODUCT_DETAIL_HAS_ERRORED:
            return action.error;

        default:
            return state;
    }
}

export function fetchProductDetailIsLoading(state = false, action) {
    switch(action.type) {

        case FETCH_PRODUCT_DETAIL_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function fetchProductDetailSuccess(state = {}, action) {
    switch(action.type) {

        case FETCH_PRODUCT_DETAIL_SUCCESS:
            return action.payload.data;

        default:
            return state;
    }
}

export function createProductHasErrored(state = "", action) {
    switch(action.type) {

        case CREATE_PRODUCT_HAS_ERRORED:
            return action.error;

        default:
            return state;
    }
}

export function createProductIsLoading(state = false, action) {
    switch(action.type) {

        case CREATE_PRODUCT_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function updateProductHasErrored(state = "", action) {
    switch(action.type) {

        case UPDATE_PRODUCT_HAS_ERRORED:
            return action.error;

        default:
            return state;
    }
}

export function updateProductIsLoading(state = false, action) {
    switch(action.type) {

        case UPDATE_PRODUCT_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}
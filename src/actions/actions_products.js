import axios from "axios";

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

} from './types';

const ROOT_URL = "localhost:8000/";


export function fetchProductsListHasErrored(error) {
    return {
        type: FETCH_PRODUCTS_LIST_HAS_ERRORED,
        error: error
    };
}

export function fetchProductsListIsLoading(bool) {
    return {
        type: FETCH_PRODUCTS_LIST_IS_LOADING,
        isLoading: bool
    };
}

export function fetchProductsListSuccess(payload) {
    return {
        type: FETCH_PRODUCTS_LIST_SUCCESS,
        payload
    }
}

export function fetchProductsList() {
    const url = `${ROOT_URL}products/`;
    return (dispatch) => {
        dispatch(fetchProductsListIsLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }

                dispatch(fetchProductsListIsLoading(false));
                return response;
            })
            .then((payload) => dispatch(fetchProductsListSuccess(payload)))
            .catch((error) => dispatch(fetchProductsListHasErrored(error)));
    };
}


export function fetchProductDetailHasErrored(error) {
    return {
        type: FETCH_PRODUCT_DETAIL_HAS_ERRORED,
        error: error
    };
}

export function fetchProductDetailIsLoading(bool) {
    return {
        type: FETCH_PRODUCT_DETAIL_IS_LOADING,
        isLoading: bool
    };
}

export function fetchProductDetailSuccess(payload) {
    return {
        type: FETCH_PRODUCT_DETAIL_SUCCESS,
        payload
    }
}

export function fetchProductDetail(productId) {
    const url = `${ROOT_URL}products/${productId}`;
    return (dispatch) => {
        dispatch(fetchProductDetailIsLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }

                dispatch(fetchProductDetailIsLoading(false));
                return response;
            })
            .then((payload) => dispatch(fetchProductDetailSuccess(payload)))
            .catch((error) => dispatch(fetchProductDetailHasErrored(error)));
    };
}

export function createProductHasErrored(error) {
    return {
        type: CREATE_PRODUCT_HAS_ERRORED,
        error: error
    };
}

export function createProductIsLoading(bool) {
    return {
        type: CREATE_PRODUCT_IS_LOADING,
        isLoading: bool
    };
}

export function createProduct(values, callback, orgId) {
    const url = `${ROOT_URL}organizations/${orgId}/products`;
    return (dispatch) => {
        dispatch(createProductIsLoading(true));

        axios.post(url, values)
            .then((response) => {
                if (response.status != 201) {
                    throw Error(response.statusText);
                }
                dispatch(createProductIsLoading(false));
                callback();
            })
            .catch((error) => dispatch(createProductHasErrored(error)));
    };
}

export function updateProductHasErrored(error) {
    return {
        type: UPDATE_PRODUCT_HAS_ERRORED,
        error: error
    };
}

export function updateProductIsLoading(bool) {
    return {
        type: UPDATE_PRODUCT_IS_LOADING,
        isLoading: bool
    };
}

export function updateProduct(values, callback, orgId, productId) {
    const url = `${ROOT_URL}organizations/${orgId}/products/${productId}`;
    return (dispatch) => {
        dispatch(updateProductIsLoading(true));

        axios.put(url, values)
            .then((response) => {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                dispatch(updateProductIsLoading(false));
                callback();
            })
            .catch((error) => dispatch(updateProductHasErrored(error)));
    };
}


import { loadTableConstants } from './constants';
import { toastr } from 'react-redux-toastr';
import { handleResponse } from 'helpers';

export const loadTableActions = {
    getAll
};

const API_URL = process.env.REACT_APP_API_URL;

function getAll(url) {

    return dispatch => {
        dispatch( { type: loadTableConstants.GETALL_REQUEST } );
            let token     = localStorage.getItem("token"),
            tokenVerify = JSON.parse(token);
            // window.fetch(API_URL + url , {
            //         method: "GET",
            //         headers: {
            //         "Content-Type": "application/json",
            //         'x-access-token': tokenVerify.accessToken
            //         // Authorization: `Bearer ${tokenVerify.accessToken}`,
            //         }
            //     });
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        'x-access-token': tokenVerify.accessToken
                        // Authorization: `Bearer ${tokenVerify.accessToken}`,
                        }
                };
        return fetch(API_URL + url
            , requestOptions
            )
                .then(handleResponse)
                .then(response => {
                    dispatch( { type: loadTableConstants.GETALL_SUCCESS, data: response } );

                    return {status: true}
                })
                .catch(error => {
                    dispatch({ type: loadTableConstants.GETALL_FAILURE, message: error });
                    toastr.error('', error)

                    return {status: false}
                });
    };
}


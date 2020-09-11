import axios from 'axios';
import { returnErrors } from './messages';
import { AUTH_ERROR, USER_LOADED, USER_LOADING } from './types';

export const loadUser = () => (dispath, getState) => {

    dispath({
        type: USER_LOADING
    });

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
        .get('api/auth/user', config)
        .then(res => {
            if (res.data.id == null) {
                dispath({

                    type: AUTH_ERROR
                });
            } else {
                dispath({

                    type: USER_LOADED,
                    payload: res.data
                });
            }

        }).catch(err => {
            dispath(returnErrors(err.response.data, err.response.status));
            dispath({
                type: AUTH_ERROR
            });
        });
}
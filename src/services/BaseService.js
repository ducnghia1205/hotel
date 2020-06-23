import { AuthStore } from 'stores';
import { ApiConfig } from '../configs';
import { HttpError } from 'errors';

const BaseService = {

    async get(endpoint) {
        const { token_type, access_token } = AuthStore.authorization;
        endpoint = ApiConfig.map(endpoint);

        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `${token_type} ${access_token}`
            }
        });
        if (!response.ok) { HttpError.handle(response) }
        return await response.json();
    },

    async post(endpoint, bodyData) {
        try {
            endpoint = ApiConfig.map(endpoint);
            const { token_type, access_token } = AuthStore.authorization;
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `${token_type} ${access_token}`
                },
                body: JSON.stringify(bodyData)
            });

            if (!response.ok) { HttpError.handle(response) }

            return await response.json();
        } catch (error) {
            console.log("error post", error);

        }

    },

    async put(endpoint, bodyData) {
        try {
            endpoint = ApiConfig.map(endpoint);
            const { token_type, access_token } = AuthStore.authorization;
            const response = await fetch(endpoint, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `${token_type} ${access_token}`
                },
                body: JSON.stringify(bodyData)
            });

            if (!response.ok) { HttpError.handle(response) }

            return await response.json();
        } catch (error) {
            console.log("error", error);

        }

    },

    async uploadFile(endpoint, bodyData) {
        try {
            endpoint = ApiConfig.map(endpoint);
            const { token_type, access_token } = AuthStore.authorization;
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `${token_type} ${access_token}`
                },
                body: bodyData
            });

            if (!response.ok) { HttpError.handle(response) }

            return await response.json();
        } catch (error) {
            console.log("error upload", error);

        }

    },

    /**
     * Throw common error on not successful status
     * @param {object} response 
     * @param {bool} auth - check for unauth error or not
     */
    handleCommonError(response, auth = false) {
        if (response.status === 401 && auth) {
            window.location("/login")
        }
        if (response.status !== 200 && response.status !== 201) {
            throw new Error(response.status)
        }
        return;
    }
}

export default BaseService
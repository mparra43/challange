import { ParametersRequest } from "../types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;



export const fetcher = (request:ParametersRequest) => {
    const {endpoint, method, data}= request;
    const url = `${baseUrl}/${endpoint}`;
    if (method === 'GET') {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }
}

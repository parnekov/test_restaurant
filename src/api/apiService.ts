/* ENV */
import Config from 'react-native-config';

export const apiRequest = (
  path: string,
  method: 'GET' | 'POST' = 'GET',
  body?: object,
) => {
  return new Promise((resolve, reject) => {
    const HEADERS = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const ENDPOINT: RequestInfo = `${Config.BASE_URL}${path}`;
    const INIT: RequestInit = {
      headers: HEADERS,
      method,
      body: JSON.stringify(body),
    };

    console.log(`ENDPOINT ======>${ENDPOINT}`);
    console.log(`BODY ======>${INIT.body}`);

    fetch(ENDPOINT, INIT)
      .then(response => {
        console.log('RESPONSE STATUS', response.status);

        if (!response.ok) {
          reject({status: response.status});
        }

        return response.json();
      })
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        console.log('ERROR', error);

        reject(error);
      });
  });
};

import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-hgz2e141.auth0.com',
  clientID: 'RvRTqFDNDiFHa0qh1ioFsgAzuEuvYHt1',
  redirectUri: 'http://localhost: 7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

//send to auth0 for login if not logged in
export const login = () => {
  auth0.authorize();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user\'s profile');
          resolve({
            username: profile.name,
            token: results.accessToken,
            image: profile.picture
          });
        });
      } else {
        reject('could not log in');
      }
    });
  });
};

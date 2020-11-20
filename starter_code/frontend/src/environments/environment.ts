/* @TODO replace with your variables ^^DONE^^
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'asma.eu', // the auth0 domain prefix
    audience: 'drink', // the audience set for the auth0 app
    clientId: '37EVjKbwfRozPlLhFs7cg3Tb0YGFBrB8', // the client id generated for the auth0 app
    callbackURL: 'http://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};


export default {
  oidc: {
    clientId: '0oai7abe2qgq2j4fi356',
    issuer: 'https://dev-290972.okta.com/oauth2/default',
    redirectUri: 'http://localhost:8080/implicit/callback',
    scope: 'openid profile email',
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
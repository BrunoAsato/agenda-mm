const environment = {
  // Comparing true string because ENV does not provide bool values, only strings
  production: process.env.PROD === 'true',
  env: process.env.ENV || 'dev',
  basePath: process.env.BASE_PATH || '/',
  graphQLURI: process.env.GRAPHQL_URL || 'http://localhost:5000/graphql',
  firebase: {
    apiKey: 'AIzaSyDFh_V9Vb1zLZJKH0985N08jFhsdVdl4N0',
    authDomain: 'sigma-abc.firebaseapp.com',
    databaseURL: 'http://localhost',
    projectId: 'sigma-abc',
    storageBucket: 'sigma-abc.appspot.com',
    messagingSenderId: '5550154962',
    appId: '1:5550154962:web:e2d9751898a83a15',
    measurementId: 'G-66LY6NY68K'
  }
  // disableLogger: process.env.DISABLE_LOGGER === 'true'
};
export default environment;

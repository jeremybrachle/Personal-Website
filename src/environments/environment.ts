// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCfeJo66SmG89AHQOD4wTOzFyAFSC-PutA',
    authDomain: 'contactme-64f75.firebaseapp.com',
    databaseURL: 'https://contactme-64f75.firebaseio.com',
    projectId: 'contactme-64f75',
    storageBucket: 'contactme-64f75.appspot.com',
    messagingSenderId: '45643017084'
  }
};

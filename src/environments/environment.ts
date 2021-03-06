// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  globalConstants: {
    defualtProfilePic: `https://firebasestorage.googleapis.com/v0/b/chat-ng-electron.appspot.com/
    o/default_image.jpg?alt=media&token=00a0946f-598d-436c-b3da-ad19917ab6fe`
  },
  firebase: {
    apiKey: 'AIzaSyAU-4NDAnBpiwsnXdXMEOKo4mpnjwnMAcQ',
    authDomain: 'chat-ng-electron.firebaseapp.com',
    databaseURL: 'https://chat-ng-electron.firebaseio.com',
    projectId: 'chat-ng-electron',
    storageBucket: 'chat-ng-electron.appspot.com',
    messagingSenderId: '724809864836',
    appId: '1:724809864836:web:806ef7964526b017'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

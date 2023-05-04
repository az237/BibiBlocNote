// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBFzYM7Ff8tt5ZSbrSMEjSJcAxpDII-5gM",
    authDomain: "noteapp-8b473.firebaseapp.com",
    projectId: "noteapp-8b473",
    storageBucket: "noteapp-8b473.appspot.com",
    messagingSenderId: "1031278341029",
    appId: "1:1031278341029:web:49689f5071a7569dd8164c"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

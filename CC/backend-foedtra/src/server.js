// Load Hapi-Firebase Auth Strategy
const HapiFirebaseAuth = require('hapi-firebase-auth');

// Initialize the default app
const admin = require('firebase-admin');

// Register the plugin
await server.register({
  plugin: HapiFirebaseAuth
});

// Initialize the Admin SDK with your credentials
// This is an example of what it should look in your code
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: '<PROJECT_ID>',
    clientEmail: 'foo@<PROJECT_ID>.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

// Include auth strategy using existing Firebase Admin instance
server.auth.strategy('firebase', 'firebase', {
  instance: admin
})
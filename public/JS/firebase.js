










//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "YOUR_API_KEY",
//     authDomain: "YOUR_AUTH_DOMAIN",
//     databaseURL: "YOUR_DATABASE_URL",
//     projectId: "YOUR_PROJECT_ID",
//     storageBucket: "YOUR_STORAGE_BUCKET",
//     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//     appId: "YOUR_APP_ID"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     const database = firebase.database();
//     const ref = database.ref('messages');
    
//     ref.push({
//       name: name,
//       email: email,
//       message: message
//     }).then(() => {
//       alert('Message envoyé avec succès!');
//       document.querySelector('form').reset();
//     }).catch((error) => {
//       alert('Erreur: ' + error.message);
//     });
//   });

//   const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');

// admin.initializeApp();

// // Configure the email transport using the default SMTP transport and a GMail account.
// // See: https://nodemailer.com/about/
// const mailTransport = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'ebanaplamedy@gmail.com',
//     pass: '1234EB@7',
//   },
// });

// // Your email and password
// const APP_NAME = 'SimpleNews';

// exports.sendEmailNotification = functions.database.ref('/messages/{pushId}')
//   .onCreate((snapshot, context) => {
//     const messageData = snapshot.val();
//     const mailOptions = {
//       from: `${APP_NAME} <noreply@firebase.com>`,
//       to: 'ebanaplamedy@gmail.com',
//       subject: `New message from ${messageData.name}`,
//       text: `Depuis simpleNews tu as un nouveau messge de ${messageData.name} (${messageData.email}): ${messageData.message}`
//     };

//     return mailTransport.sendMail(mailOptions)
//       .then(() => {
//         console.log('New email sent to: ebanaplamedy@gmail.com');
//       })
//       .catch((error) => {
//         console.error('There was an error while sending the email:', error);
//       });
//   });

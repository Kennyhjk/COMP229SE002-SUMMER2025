const functions = require("firebase-functions");
const app = require("./server/express"); // server 폴더 안의 express.js 불러오기

exports.app = functions.https.onRequest(app);

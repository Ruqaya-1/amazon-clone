const functions = require("firebase-functions");
const express = require("express") // this is an express app for backend
const cors = require("cors"); // these are dependencies cors and stripe
// const { request, response } = require("express");
const stripe = require("stripe")("sk_test_51JBCrKSIyIYs1SbmGOj8d3VOTcogf5Sq15WohDlGG1Y1FLApBuwPictOydS2qbpk0L0v8ZTsoO1836Z3lIY19n8g008D6BB6Sn") // secret key from stripe

// setup API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('hello Ruqaya'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment request received', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // submits the currency
        currency: "inr",
    })
    //  201 is Ok - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// http://localhost:5001/clone-15051/us-central1/api

// firebase emulator suite
// http://localhost:4000/logs?q=metadata.emulator.name%3D%22functions%22

















// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

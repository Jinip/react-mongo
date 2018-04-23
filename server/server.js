import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import mongoose from 'mongoose'

import users from './routes/user-route';

let port = process.env.PORT || 3001;
let app = express();

app.use(cors());

app.use(bodyParser.json())

app.use("/", users);

mongoose.connect("mongodb://localhost/dance", (err) => {
    err 
        ? console.log(err)
        : console.log("Mongo connect")
});

app.listen(port, (err) => {
    err
        ? console.log(err)
        : console.log("listening on port " + port);
})
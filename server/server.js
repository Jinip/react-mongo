import express from 'express';
import cors from 'cors'

let port = process.env.PORT || 3001;
let app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(port, (err) => {
    err
    ? console.log(err)
    : console.log("listening on port " + port);
})
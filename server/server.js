import express from 'express';

let port = process.env.PORT || 3001;
let app = express();

app.get("/", (req, res) => {
    res.send("Hello");
})

app.listen(port, (err) => {
    err
    ? console.log(err)
    : console.log("listening on port " + port);
})
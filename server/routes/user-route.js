import express from 'express';
import User from '../models/user-model'

let router = express.Router();

router.route("/")
    .get((req, res) => {
        User.find((err, users) => {
            if (err) return res.send(err);
            
            return res.send(users);
        })
    })

    .post((req, res) => {
        console.log(req.body);
        let user = new User(req.body);

        user.save((err, newUser) => {
            if (err) return res.send(err);

            return res.send(newUser);
        })
    })

export default router;
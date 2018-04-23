import mongoose, { Schema } from 'mongoose';

let UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
})

export default mongoose.model("user", UserSchema);
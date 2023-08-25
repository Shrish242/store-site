const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/my_database', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

const userSchema = new mongoose.Schema({
    mail: String,
    password: String,
    confirmpassword: String,
});

const User = mongoose.model('User', userSchema);


app.post('/', (req, res) => {
    console.log(req.body);
    const { mail, password } = req.body;
    User.findOne({ mail: mail })
        .then(user => {
            if (user) {
                res.send({ message: "user already exists" });
            } else {
                const newUser = new User({
                    mail,
                    password,
                });

                newUser.save()
                    .then(() => {
                        res.send({ message: "successfully registered" });
                    })
                    .catch(err => {
                        res.send(err);
                    });
            }
        })
        .catch(err => {
            res.send(err);
        });
});


app.post('/login', (req, res) => {
    console.log(req.body);
    const { mail, password } = req.body;
    User.findOne({ mail: mail , password: password})
        .then(user => {
            if (user) {
                if(password === user.password){
                    res.send({ user }); // Sending the user object
                }
            } else {
                res.send({ message: "user does not exist" }); // Providing a consistent response
            }
           
        })
        .catch(err =>{
            res.send(err);
        });
});


app.listen(5000, () => {
    console.log('Server running on port 9000');
});

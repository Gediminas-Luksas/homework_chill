const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config/db')

mongoose.connect(config.DB, {
useNewUrlParser: true,
}).then(() => {
        console.log('Database is Connected!')
    },
    err => {
        console.log('Can not Connected to database!' + err)
    }
);


const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req,res) => {
    res.send({
        message: `${req.body.email} - Register Success!`
    })
})

const PORT = process.env.PORT || 51555;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});
require('./config/enviroment');
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes');
const cors = require('cors');



mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-3kvrj.gcp.mongodb.net/week10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log("Subiu");
});
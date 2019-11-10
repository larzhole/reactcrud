const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./DB.js');
const businessRoute = require('./business.route');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.DB, { useNewUrlParser: true, useUnifiedTopology: true}).then(
	() => {
		console.log('DB is connected');
	},
	(error) => {
		console.log('Cannot connect to the DB' + error);
	}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/business', businessRoute);

app.listen(PORT, () => {
	console.log('Server is running on port: ', PORT);
});

const express = require('express');
const businessRoutes = express.Router();

let Business = require('./business.model');

businessRoutes.route('/add').post((req, res) => {
	console.log('/add');
	console.log(req);
	let business = new Business(req.body);
	business.save()
		.then((b) => {
			res.status(200).json({'business': 'business added successfully'});
		}).catch((error) => {
			res.status(400).send('unable to save');
		});
});

businessRoutes.route('/').get((req, res) => {
	Business.find((error, businesses) => {
		if (error) {
			console.log(error);
		} else {
			res.json(businesses);
		}
	});
});

businessRoutes.route('/edit/:id').get((req, res) => {
	let id = req.params.id;
	Business.findById(id, (error, business) => {
		res.json(business);
	})
});

businessRoutes.route('/update/:id').put((req, res) => {
	Business.findById(req.params.id, (error, business) => {
		if (!business) {
			res.status(404).send('business data is not found');
		} else {
			business.personName = req.body.personName;
			business.businessName = req.body.businessName;
			business.businessGstNumber = req.body.businessGstNumber;

			business.save().then(() => {
				res.json('Update complete');
			}).catch((error) =>{
				res.status(400).send('Unable to update business');
			});
		}
	});
});

businessRoutes.route('/delete/:id').delete((req, res) => {
	Business.findByIdAndRemove({_id: req.params.id}, (error, business) => {
		if (error) {
			res.json(error);
		} else {
			res.json('Successfully removed');
		}
	});
});

module.exports = businessRoutes;

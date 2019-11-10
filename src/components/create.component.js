import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

	constructor(props) {
		super(props);

		this.onChangePersonName = this.onChangePersonName.bind(this);
		this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
		this.onChangeBusinessGstNumber = this.onChangeBusinessGstNumber.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			personName: '',
			businessName: '',
			businessGstNumber: ''
		}
	}

	onChangePersonName(e) {
		this.setState({
			personName: e.target.value
		});
	}

	onChangeBusinessName(e) {
		this.setState({
			businessName: e.target.value
		});
	}

	onChangeBusinessGstNumber(e) {
		this.setState({
			businessGstNumber: e.target.value
		});
	}

	onSubmit(e) {
	    e.preventDefault();
	    console.log('onSubmit:');
		console.log(e);
	    
	    const payload = {
	    	personName: this.state.personName,
	    	businessName: this.state.businessName,
	    	businessGstNumber: this.state.businessGstNumber
	    };
	    axios.post('http://localhost:4000/business/add', payload)
	    	.then((res) => {
	    		console.log(res);
	    	});

	    this.setState({
	      person_name: '',
	      business_name: '',
	      business_gst_number: ''
	    })
	}

	render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input 
                        	type="text" 
                        	className="form-control"
                        	value={this.state.personName}
                        	onChange={this.onChangePersonName}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input 
                        	type="text" 
                        	className="form-control"
                        	value={this.state.businessName}
                        	onChange={this.onChangeBusinessName}
                        	/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input 
                        	type="text" 
                        	className="form-control"
                        	value={this.state.businessGstNumber}
                        	onChange={this.onChangeBusinessGstNumber}
                        	/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
	}
}

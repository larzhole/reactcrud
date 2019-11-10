import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}

	delete() {
		axios.delete('http://localhost:4000/business/' + this.props.obj._id)
			.then(() => {
				console.log('deleted');
			}).catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
	        <tr>
	          <td>
	            {this.props.obj.personName}
	          </td>
	          <td>
	            {this.props.obj.businessName}
	          </td>
	          <td>
	            {this.props.obj.businessGstNumber}
	          </td>
	          <td>
				<Link 
					to={"/edit/" + this.props.obj._id} 
					className="btn btn-primary">Edit
				</Link>
	          </td>
	          <td>
	            <button 
	            	className="btn btn-danger"
	            	onClick={this.delete}>Delete
	            </button>
	          </td>
	        </tr>
		);
	}
}

export default TableRow;
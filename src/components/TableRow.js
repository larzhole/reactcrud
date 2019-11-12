import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './TableRow.css';

class TableRow extends Component {

	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
		this.state = {
			isDisplayed: true
		}
	}

	delete() {
		axios.delete('http://localhost:4000/business/' + this.props.obj._id)
			.then(() => {
				this.setState({
					isDisplayed: false
				})
			}).catch((error) => {
				console.log(error);
			});
	}

	render() {
		if (this.state.isDisplayed) {
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

		return null;
	}
}

export default TableRow;
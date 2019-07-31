import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div className="home">
				<div className="Aligner">
					<div className="Aligner-item">
						<h1>HTML-Emails</h1>
					</div>
				</div>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
	state = {
		minimumContirbution: '',
		errorMessage: '',
		loading: false,
		message: '',
		signingInfo: ''
	};

	// onSubmit = async (event) => {
	// 	event.preventDefault();
	// 	this.setState({ loading: true, errorMessage: '' });
	// 	try {
	// 		const accounts = await web3.eth.getAccounts();
	// 		await factory.methods.createCampaign(this.state.minimumContirbution).send({
	// 			from: accounts[0]
	// 		});
	// 		Router.pushRoute('/');
	// 	} catch (err) {
	// 		this.setState({ errorMessage: err.message });
	// 	}

	// 	this.setState({ loading: false });
	// };

	signMessage = async (event) => {
		event.preventDefault();
		this.setState({ loading: true, errorMessage: '', signingInfo: '' });
		try {
			const accounts = await web3.eth.getAccounts();
			const messageHash = await web3.utils.sha3(this.state.message);
			const signature = await web3.eth.sign(messageHash, accounts[0]);

			this.setState({
				signingInfo: `Message: "${this.state
					.message}" was signed from this account: ${accounts[0]}. Your signing hash is ${signature}`
			});
		} catch (err) {
			this.setState({ errorMessage: err.message });
		}

		this.setState({ loading: false });
	};

	render() {
		return (
			<Layout>
				{/* <h3>Create a Campaign</h3>

				<Form error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input
							label="wei"
							labelPosition="right"
							value={this.state.minimumContirbution}
							onChange={(event) =>
								this.setState({
									minimumContirbution: event.target.value
								})}
						/>
					</Form.Field>
					<Message error header="Oops!" content={this.state.errorMessage} />
					<Button loading={this.state.loading} primary>
						Create!
					</Button>
				</Form> */}

				<h3>Sign a message</h3>
				<Form error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Enter message text</label>
						<Input
							value={this.state.message}
							onChange={(event) =>
								this.setState({
									message: event.target.value
								})}
						/>
					</Form.Field>
					<Message info header="Your signing details:" content={this.state.signingInfo} />
					<Button loading={this.state.loading} primary onClick={this.signMessage}>
						Sign Message!
					</Button>
				</Form>
			</Layout>
		);
	}
}

export default CampaignNew;

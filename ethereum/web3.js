import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	// we are in the browser and metamask is running.
	web3 = new Web3(window.web3.currentProvider);
} else {
	//We are  on the Server or the user is not running metamask
	const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0dc8a11d025249599e51017be0d573fb');

	web3 = new Web3(provider);
}

export default web3;

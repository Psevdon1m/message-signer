import web3 from './web3';
import campaignFactory from './build/CampaingFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(campaignFactory.interface),
	'0xe3010798EA869e7958Bf1b0f484Ec8a77BeFb84d'
);

export default instance;

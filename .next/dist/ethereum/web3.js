'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
	// we are in the browser and metamask is running.
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	//We are  on the Server or the user is not running metamask
	var provider = new _web2.default.providers.HttpProvider('https://ropsten.infura.io/v3/0dc8a11d025249599e51017be0d573fb');

	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sQUFBUCxTQUFnQixBQUFyRCxhQUFrRSxBQUNqRTtBQUNBO1FBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUhELE9BR08sQUFDTjtBQUNBO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEFBQWhDLEFBQWpCLEFBRUE7O1FBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJEOi93b3JrL3VkZW15L2tpY2tzdGFydGVyIn0=
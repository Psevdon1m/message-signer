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
}
// } else {
// 	//We are  on the Server or the user is not running metamask
// 	const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0dc8a11d025249599e51017be0d573fb');

// 	web3 = new Web3(provider);
// }

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBckQsYUFBa0UsQUFDakU7QUFDQTtRQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0E7O0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQUFFQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkQ6L3dvcmsvdWRlbXkvbWVzc2FnZSBzaWduZXIifQ==
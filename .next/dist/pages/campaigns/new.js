'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\work\\udemy\\message signer\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContirbution: '',
			errorMessage: '',
			loading: false,
			message: '',
			signingInfo: ''
		}, _this.signMessage = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts, messageHash, signature;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								_this.setState({ loading: true, errorMessage: '', signingInfo: '' });
								_context.prev = 2;
								_context.next = 5;
								return _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;
								_context.next = 8;
								return _web2.default.utils.sha3(_this.state.message);

							case 8:
								messageHash = _context.sent;
								_context.next = 11;
								return _web2.default.eth.sign(messageHash, accounts[0]);

							case 11:
								signature = _context.sent;

								_this.setState({
									signingInfo: 'Message: "' + _this.state.message + '" was signed from this account: ' + accounts[0] + '. Your signing hash is ' + signature
								});
								_context.next = 18;
								break;

							case 15:
								_context.prev = 15;
								_context.t0 = _context['catch'](2);

								_this.setState({ errorMessage: _context.t0.message });

							case 18:

								_this.setState({ loading: false });

							case 19:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[2, 15]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

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

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}, 'Sign a message'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, 'Enter message text'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.message,
				onChange: function onChange(event) {
					return _this3.setState({
						message: event.target.value
					});
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { info: true, header: 'Your signing details:', content: this.state.signingInfo, __source: {
					fileName: _jsxFileName,
					lineNumber: 88
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, onClick: this.signMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			}, 'Sign Message!')));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udGlyYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaWduaW5nSW5mbyIsInNpZ25NZXNzYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInV0aWxzIiwic2hhMyIsIm1lc3NhZ2VIYXNoIiwic2lnbiIsInNpZ25hdHVyZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDTDt3QkFBUSxBQUNjLEFBQ3JCO2lCQUZPLEFBRU8sQUFDZDtZQUhPLEFBR0UsQUFDVDtZQUpPLEFBSUUsQUFDVDtnQkFBYSxBLEFBTE47QUFBQSxBQUNQLFdBdUJELEE7d0ZBQWMsaUJBQUEsQUFBTyxPQUFQOytCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDYjtjQUFBLEFBQU0sQUFDTjtjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQWpCLEFBQStCLElBQUksYUFGcEMsQUFFYixBQUFjLEFBQWdEO3dCQUZqRDt3QkFBQTtlQUlXLGNBQUEsQUFBSyxJQUpoQixBQUlXLEFBQVM7O1lBQTFCO0FBSk0sNEJBQUE7d0JBQUE7ZUFLYyxjQUFBLEFBQUssTUFBTCxBQUFXLEtBQUssTUFBQSxBQUFLLE1BTG5DLEFBS2MsQUFBMkI7O1lBQS9DO0FBTE0sK0JBQUE7d0JBQUE7ZUFNWSxjQUFBLEFBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxhQUFhLFNBTnZDLEFBTVksQUFBMkIsQUFBUzs7WUFBdEQ7QUFOTSw2QkFRWjs7Y0FBQSxBQUFLO3FDQUNzQixNQUFBLEFBQUssTUFBL0IsQUFDRSwrQ0FBMEMsU0FENUMsQUFDNEMsQUFBUyxpQ0FWMUMsQUFRWixBQUFjLEFBRW9FO0FBRnBFLEFBQ2I7d0JBVFc7QUFBQTs7WUFBQTt3QkFBQTt3Q0FhWjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBYmxCLEFBYVosQUFBYyxBQUFvQjs7WUFHbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FoQkgsQUFnQmIsQUFBYyxBQUFXOztZQWhCWjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7OztBQWhCZDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Ozs7OzJCQXFCUztnQkFDUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQXNCQztBQXRCRDtBQUFBLElBQUEsa0JBc0JDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BdEJELEFBc0JDLEFBQ0EsbUNBQUEsQUFBQyx1Q0FBSyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7ZUFBMUI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx1Q0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSxrQkFBQSxBQUFDLE9BQUQ7bUJBQ1QsQUFBSztlQUNLLE1BQUEsQUFBTSxPQUZQLEFBQ1QsQUFBYyxBQUNTO0FBRFQsQUFDYixNQUREO0FBSEY7O2VBQUE7aUJBSEYsQUFDQyxBQUVDLEFBUUQ7QUFSQztBQUNDLHdCQU9GLEFBQUMsMENBQVEsTUFBVCxNQUFjLFFBQWQsQUFBcUIseUJBQXdCLFNBQVMsS0FBQSxBQUFLLE1BQTNELEFBQWlFO2VBQWpFO2lCQVhELEFBV0MsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQyxNQUE2QyxTQUFTLEtBQXRELEFBQTJEO2VBQTNEO2lCQUFBO0FBQUE7TUFwQ0gsQUFDQyxBQXVCQyxBQVlDLEFBTUg7Ozs7O0FBdkZ3QixBLEFBMEYxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovd29yay91ZGVteS9tZXNzYWdlIHNpZ25lciJ9
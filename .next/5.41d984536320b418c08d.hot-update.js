webpackHotUpdate(5,{

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(804);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(498);

var _factory = __webpack_require__(1112);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(731);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(728);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\work\\udemy\\kickstarter\\pages\\campaigns\\new.js?entry';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udGlyYnV0aW9uIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJzaWduaW5nSW5mbyIsInNpZ25NZXNzYWdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInV0aWxzIiwic2hhMyIsIm1lc3NhZ2VIYXNoIiwic2lnbiIsInNpZ25hdHVyZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDTDt3QkFBUSxBQUNjLEFBQ3JCO2lCQUZPLEFBRU8sQUFDZDtZQUhPLEFBR0UsQUFDVDtZQUpPLEFBSUUsQUFDVDtnQkFBYSxBLEFBTE47QUFBQSxBQUNQLFdBdUJELEE7d0ZBQWMsaUJBQUEsQUFBTyxPQUFQOytCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDYjtjQUFBLEFBQU0sQUFDTjtjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBQWpCLEFBQStCLElBQUksYUFGcEMsQUFFYixBQUFjLEFBQWdEO3dCQUZqRDt3QkFBQTtlQUlXLGNBQUEsQUFBSyxJQUpoQixBQUlXLEFBQVM7O1lBQTFCO0FBSk0sNEJBQUE7d0JBQUE7ZUFLYyxjQUFBLEFBQUssTUFBTCxBQUFXLEtBQUssTUFBQSxBQUFLLE1BTG5DLEFBS2MsQUFBMkI7O1lBQS9DO0FBTE0sK0JBQUE7d0JBQUE7ZUFNWSxjQUFBLEFBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxhQUFhLFNBTnZDLEFBTVksQUFBMkIsQUFBUzs7WUFBdEQ7QUFOTSw2QkFRWjs7Y0FBQSxBQUFLO3FDQUNzQixNQUFBLEFBQUssTUFBL0IsQUFDRSwrQ0FBMEMsU0FENUMsQUFDNEMsQUFBUyxpQ0FWMUMsQUFRWixBQUFjLEFBRW9FO0FBRnBFLEFBQ2I7d0JBVFc7QUFBQTs7WUFBQTt3QkFBQTt3Q0FhWjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBYmxCLEFBYVosQUFBYyxBQUFvQjs7WUFHbkM7O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FoQkgsQUFnQmIsQUFBYyxBQUFXOztZQWhCWjtZQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7OztBQWhCZDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Ozs7OzJCQXFCUztnQkFDUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQXNCQztBQXRCRDtBQUFBLElBQUEsa0JBc0JDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BdEJELEFBc0JDLEFBQ0EsbUNBQUEsQUFBQyx1Q0FBSyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7ZUFBMUI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx1Q0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7Y0FBVSxrQkFBQSxBQUFDLE9BQUQ7bUJBQ1QsQUFBSztlQUNLLE1BQUEsQUFBTSxPQUZQLEFBQ1QsQUFBYyxBQUNTO0FBRFQsQUFDYixNQUREO0FBSEY7O2VBQUE7aUJBSEYsQUFDQyxBQUVDLEFBUUQ7QUFSQztBQUNDLHdCQU9GLEFBQUMsMENBQVEsTUFBVCxNQUFjLFFBQWQsQUFBcUIseUJBQXdCLFNBQVMsS0FBQSxBQUFLLE1BQTNELEFBQWlFO2VBQWpFO2lCQVhELEFBV0MsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQyxNQUE2QyxTQUFTLEtBQXRELEFBQTJEO2VBQTNEO2lCQUFBO0FBQUE7TUFwQ0gsQUFDQyxBQXVCQyxBQVlDLEFBTUg7Ozs7O0FBdkZ3QixBLEFBMEYxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovd29yay91ZGVteS9raWNrc3RhcnRlciJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\work\\udemy\\kickstarter\\pages\\campaigns\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\work\\udemy\\kickstarter\\pages\\campaigns\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40MWQ5ODQ1MzYzMjBiNDE4YzA4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz83NWI4Y2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRtaW5pbXVtQ29udGlyYnV0aW9uOiAnJyxcclxuXHRcdGVycm9yTWVzc2FnZTogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdFx0c2lnbmluZ0luZm86ICcnXHJcblx0fTtcclxuXHJcblx0Ly8gb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHQvLyBcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcclxuXHQvLyBcdHRyeSB7XHJcblx0Ly8gXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuXHQvLyBcdFx0YXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRpcmJ1dGlvbikuc2VuZCh7XHJcblx0Ly8gXHRcdFx0ZnJvbTogYWNjb3VudHNbMF1cclxuXHQvLyBcdFx0fSk7XHJcblx0Ly8gXHRcdFJvdXRlci5wdXNoUm91dGUoJy8nKTtcclxuXHQvLyBcdH0gY2F0Y2ggKGVycikge1xyXG5cdC8vIFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuXHQvLyBcdH1cclxuXHJcblx0Ly8gXHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcblx0Ly8gfTtcclxuXHJcblx0c2lnbk1lc3NhZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJywgc2lnbmluZ0luZm86ICcnIH0pO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cdFx0XHRjb25zdCBtZXNzYWdlSGFzaCA9IGF3YWl0IHdlYjMudXRpbHMuc2hhMyh0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG5cdFx0XHRjb25zdCBzaWduYXR1cmUgPSBhd2FpdCB3ZWIzLmV0aC5zaWduKG1lc3NhZ2VIYXNoLCBhY2NvdW50c1swXSk7XHJcblxyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRzaWduaW5nSW5mbzogYE1lc3NhZ2U6IFwiJHt0aGlzLnN0YXRlXHJcblx0XHRcdFx0XHQubWVzc2FnZX1cIiB3YXMgc2lnbmVkIGZyb20gdGhpcyBhY2NvdW50OiAke2FjY291bnRzWzBdfS4gWW91ciBzaWduaW5nIGhhc2ggaXMgJHtzaWduYXR1cmV9YFxyXG5cdFx0XHR9KTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcblx0fTtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHR7LyogPGgzPkNyZWF0ZSBhIENhbXBhaWduPC9oMz5cclxuXHJcblx0XHRcdFx0PEZvcm0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuXHRcdFx0XHRcdDxGb3JtLkZpZWxkPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIndlaVwiXHJcblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5taW5pbXVtQ29udGlyYnV0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWluaW11bUNvbnRpcmJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlXHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvRm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XHJcblx0XHRcdFx0XHQ8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gcHJpbWFyeT5cclxuXHRcdFx0XHRcdFx0Q3JlYXRlIVxyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9Gb3JtPiAqL31cclxuXHJcblx0XHRcdFx0PGgzPlNpZ24gYSBtZXNzYWdlPC9oMz5cclxuXHRcdFx0XHQ8Rm9ybSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XHJcblx0XHRcdFx0XHQ8Rm9ybS5GaWVsZD5cclxuXHRcdFx0XHRcdFx0PGxhYmVsPkVudGVyIG1lc3NhZ2UgdGV4dDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDxJbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBldmVudC50YXJnZXQudmFsdWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9Gb3JtLkZpZWxkPlxyXG5cdFx0XHRcdFx0PE1lc3NhZ2UgaW5mbyBoZWFkZXI9XCJZb3VyIHNpZ25pbmcgZGV0YWlsczpcIiBjb250ZW50PXt0aGlzLnN0YXRlLnNpZ25pbmdJbmZvfSAvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnkgb25DbGljaz17dGhpcy5zaWduTWVzc2FnZX0+XHJcblx0XHRcdFx0XHRcdFNpZ24gTWVzc2FnZSFcclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvRm9ybT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25OZXc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBdUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFOQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBVEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFqQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUFoQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBc0JBO0FBdEJBO0FBQUE7O0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
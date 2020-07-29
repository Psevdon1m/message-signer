webpackHotUpdate(5,{

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(1113);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
}
// } else {
// 	//We are  on the Server or the user is not running metamask
// 	const provider = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0dc8a11d025249599e51017be0d573fb');

// 	web3 = new Web3(provider);
// }

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUE1RCxhQUF5RSxBQUN6RTtBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQzs7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDovd29yay91ZGVteS9tZXNzYWdlIHNpZ25lciJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\work\\udemy\\message signer\\ethereum\\web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\work\\udemy\\message signer\\ethereum\\web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hMzI3MjVjZTE0ZGQ2M2Q0MjFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8zZTY1ZjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xyXG5cclxubGV0IHdlYjM7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy53ZWIzICE9PSAndW5kZWZpbmVkJykge1xyXG4vLyB3ZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmcuXHJcbndlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xyXG59XHJcbi8vIH0gZWxzZSB7XHJcbi8vIFx0Ly9XZSBhcmUgIG9uIHRoZSBTZXJ2ZXIgb3IgdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcclxuLy8gXHRjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoJ2h0dHBzOi8vcm9wc3Rlbi5pbmZ1cmEuaW8vdjMvMGRjOGExMWQwMjUyNDk1OTllNTEwMTdiZTBkNTczZmInKTtcclxuXHJcbi8vIFx0d2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2ViMztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaperButton = function (_React$Component) {
  _inherits(PaperButton, _React$Component);

  function PaperButton(props) {
    _classCallCheck(this, PaperButton);

    var _this = _possibleConstructorReturn(this, (PaperButton.__proto__ || Object.getPrototypeOf(PaperButton)).call(this, props));

    _this.state = {
      bubbles: []
    };
    _this.bubbling = _this.bubbling.bind(_this);
    return _this;
  }

  _createClass(PaperButton, [{
    key: 'bubbling',
    value: function bubbling(e) {
      var _this2 = this;

      var dim = e.target.getBoundingClientRect();
      var x = (e.clientX - dim.left).toFixed();
      var y = (e.clientY - dim.top).toFixed();
      var timeStamp = Date.now();

      this.setState({ bubbles: [].concat(_toConsumableArray(this.state.bubbles), [{ x: x, y: y, id: timeStamp }]) });
      setTimeout(function () {
        var filteredBubbles = _this2.state.bubbles.filter(function (el) {
          return el.id !== timeStamp;
        });
        _this2.setState({ bubbles: filteredBubbles });
      }, 500);

      this.props.onClick(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          background = _props.background,
          bubbleColor = _props.bubbleColor,
          className = _props.className;


      var renderBubbles = this.state.bubbles.map(function (el) {
        return _react2.default.createElement('span', {
          key: el.id,
          className: 'paper-bb',
          style: {
            background: bubbleColor,
            top: el.y + 'px',
            left: el.x + 'px'
          }
        });
      });
      return _react2.default.createElement(
        'div',
        {
          className: 'paper-bc ' + className,
          style: { background: background },
          onMouseDown: this.bubbling
        },
        renderBubbles,
        children
      );
    }
  }]);

  return PaperButton;
}(_react2.default.Component);

PaperButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  onClick: _propTypes2.default.func,
  background: _propTypes2.default.string,
  bubbleColor: _propTypes2.default.string,
  className: _propTypes2.default.string
};

PaperButton.defaultProps = {
  background: '#fff',
  bubbleColor: '#999',
  onClick: function onClick() {},
  className: ''
};

exports.default = PaperButton;
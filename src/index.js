import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class PaperButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbles: []
    };
    this.bubbling = this.bubbling.bind(this);
  }

  bubbling(e) {
    const dim = e.target.getBoundingClientRect();
    const x = (e.clientX - dim.left).toFixed();
    const y = (e.clientY - dim.top).toFixed();
    const timeStamp = Date.now();

    this.setState({ bubbles: [ ...this.state.bubbles, { x, y, id: timeStamp } ] });
    setTimeout(() => {
      const filteredBubbles = this.state.bubbles.filter(el => el.id !== timeStamp);
      this.setState({ bubbles: filteredBubbles });
    }, 500);

    this.props.onClick(e);
  }

  render() {
    const { children, background, bubbleColor, className } = this.props;
    
    const renderBubbles = this.state.bubbles.map(el => (
      <span
        key={el.id}
        className='paper-bb'
        style={{
          background: bubbleColor,
          top: `${el.y}px`,
          left: `${el.x}px`
        }}
      />
    ));
    return (
      <div
        className={`paper-bc ${className}`}
        style={{ background }}
        onMouseDown={this.bubbling}
      >
        {renderBubbles}
        {children}
      </div>
    );
  }
}

PaperButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  background: PropTypes.string,
  bubbleColor: PropTypes.string,
  className: PropTypes.string
};

PaperButton.defaultProps = {
  background: '#fff',
  bubbleColor: '#999',
  onClick: () => {},
  className: ''
};

export default PaperButton;
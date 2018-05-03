import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class PaperButton extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className='paper-bc'>
        {children}
      </div>
    );
  }
}

PaperButton.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

PaperButton.defaultProps = {
  backgroundColor: '#fff'
};

export default PaperButton;
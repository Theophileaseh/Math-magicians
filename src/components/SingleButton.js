import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
const OneButton = ({ buttonName, className, clickHandler }) => {
  const handleClick = () => clickHandler(buttonName);
  return (<button type="button" className={className} onClick={handleClick}>{buttonName}</button>);
};

OneButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default OneButton;
